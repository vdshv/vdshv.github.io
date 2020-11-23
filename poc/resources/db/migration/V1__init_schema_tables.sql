IF NOT EXISTS (SELECT * FROM sysobjects WHERE id = OBJECT_ID(N'[dbo].[action]') AND OBJECTPROPERTY(id, N'ISUSERTABLE') = 1)
CREATE TABLE [dbo].[action]
  (
     [id]            [BIGINT] NOT NULL,
     [data]          [VARCHAR](max) NULL,
     [form_id]       [BIGINT] NULL,
     [respondent_id] [BIGINT] NULL,
     CONSTRAINT [PK_ACTION] PRIMARY KEY ( [id] ASC )
  )

go

IF NOT EXISTS (SELECT * FROM sysobjects WHERE id = OBJECT_ID(N'[dbo].[form]') AND OBJECTPROPERTY(id, N'ISUSERTABLE') = 1)
CREATE TABLE [dbo].[form]
  (
     [id]              [BIGINT] NOT NULL,
     [data]            [VARCHAR](max) NULL,
     [organization_id] [BIGINT] NULL,
     CONSTRAINT [PK_FORM] PRIMARY KEY ( [id] ASC )
  )

go

IF NOT EXISTS (SELECT * FROM sysobjects WHERE id = OBJECT_ID(N'[dbo].[form_submission]') AND OBJECTPROPERTY(id, N'ISUSERTABLE') = 1)
CREATE TABLE [dbo].[form_submission]
  (
     [id]            [BIGINT] NOT NULL,
     [status]        [VARCHAR](255) NULL,
     [data]          [VARCHAR](max) NULL,
     [uuid]          [UNIQUEIDENTIFIER] NULL,
     [respondent_id] [BIGINT] NULL,
     [action_id]     [BIGINT] NULL,
     CONSTRAINT [PK_FORM_SUBMISSION] PRIMARY KEY ( [id] ASC )
  )

go

IF NOT EXISTS (SELECT * FROM sysobjects WHERE id = OBJECT_ID(N'[dbo].[organization]') AND OBJECTPROPERTY(id, N'ISUSERTABLE') = 1)
CREATE TABLE [dbo].[organization]
  (
     [id]         [BIGINT] NOT NULL,
     [enabled]    [BIT] NOT NULL,
     [name]       [VARCHAR](200) NOT NULL,
     [properties] [VARCHAR](max) NULL,
     CONSTRAINT [PK_ORGANIZATION] PRIMARY KEY ( [id] ASC )
  )

go

IF NOT EXISTS (SELECT * FROM sysobjects WHERE id = OBJECT_ID(N'[dbo].[respondent]') AND OBJECTPROPERTY(id, N'ISUSERTABLE') = 1)
CREATE TABLE [dbo].[respondent]
  (
     [id]              [BIGINT] NOT NULL,
     [first_name]      [VARCHAR](200) NOT NULL,
     [last_name]       [VARCHAR](200) NOT NULL,
     [phone_number]    [VARCHAR](20) NULL,
     [email]           [VARCHAR](200) NULL,
     [respondent_type] [VARCHAR](255) NULL,
     [properties]      [VARCHAR](max) NULL,
     [organization_id] [BIGINT] NULL,
     CONSTRAINT [PK_RESPONDENT] PRIMARY KEY ( [id] ASC )
  )

go

IF NOT EXISTS (SELECT * FROM sysobjects WHERE id = OBJECT_ID(N'[dbo].[user]') AND OBJECTPROPERTY(id, N'ISUSERTABLE') = 1)
CREATE TABLE [dbo].[user]
  (
     [id]              [BIGINT] NOT NULL,
     [enabled]         [BIT] NULL,
     [first_name]      [VARCHAR](200) NOT NULL,
     [last_name]       [VARCHAR](200) NOT NULL,
     [username]        [VARCHAR](100) NOT NULL,
     [email]           [VARCHAR](200) NOT NULL,
     [password]        [VARCHAR](200) NOT NULL,
     [role]            [VARCHAR](255) NOT NULL,
     [properties]      [VARCHAR](max) NULL,
     [organization_id] [BIGINT] NULL,
     CONSTRAINT [PK_USER] PRIMARY KEY ( [id] ASC )
  )

go

IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = object_id(N'[dbo].[fk_action_form_id]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1)
ALTER TABLE [dbo].[action]
  WITH CHECK ADD CONSTRAINT [fk_action_form_id] FOREIGN KEY([form_id])
  REFERENCES [dbo].[form] ([id])

go

ALTER TABLE [dbo].[action]
  CHECK CONSTRAINT [fk_action_form_id]

go

IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = object_id(N'[dbo].[fk_action_respondent_id]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1)
ALTER TABLE [dbo].[action]
  WITH CHECK ADD CONSTRAINT [fk_action_respondent_id] FOREIGN KEY(
  [respondent_id]) REFERENCES [dbo].[respondent] ([id])

go

ALTER TABLE [dbo].[action]
  CHECK CONSTRAINT [fk_action_respondent_id]

go

IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = object_id(N'[dbo].[fk_form_organization_id]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1)
ALTER TABLE [dbo].[form]
  WITH CHECK ADD CONSTRAINT [fk_form_organization_id] FOREIGN KEY(
  [organization_id]) REFERENCES [dbo].[organization] ([id])

go

ALTER TABLE [dbo].[form]
  CHECK CONSTRAINT [fk_form_organization_id]

go

IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = object_id(N'[dbo].[fk_form_submission_action_id]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1)
ALTER TABLE [dbo].[form_submission]
  WITH CHECK ADD CONSTRAINT [fk_form_submission_action_id] FOREIGN KEY(
  [action_id]) REFERENCES [dbo].[action] ([id])

go

ALTER TABLE [dbo].[form_submission]
  CHECK CONSTRAINT [fk_form_submission_action_id]

go

IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = object_id(N'[dbo].[fk_form_submission_respondent_id]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1)
ALTER TABLE [dbo].[form_submission]
  WITH CHECK ADD CONSTRAINT [fk_form_submission_respondent_id] FOREIGN KEY(
  [respondent_id]) REFERENCES [dbo].[respondent] ([id])

go

ALTER TABLE [dbo].[form_submission]
  CHECK CONSTRAINT [fk_form_submission_respondent_id]

go

IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = object_id(N'[dbo].[fk_respondent_organization_id]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1)
ALTER TABLE [dbo].[respondent]
  WITH CHECK ADD CONSTRAINT [fk_respondent_organization_id] FOREIGN KEY(
  [organization_id]) REFERENCES [dbo].[organization] ([id])

go

ALTER TABLE [dbo].[respondent]
  CHECK CONSTRAINT [fk_respondent_organization_id]

go

IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = object_id(N'[dbo].[fk_user_organization_id]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1)
ALTER TABLE [dbo].[user]
  WITH CHECK ADD CONSTRAINT [fk_user_organization_id] FOREIGN KEY(
  [organization_id]) REFERENCES [dbo].[organization] ([id])

go

ALTER TABLE [dbo].[user]
  CHECK CONSTRAINT [fk_user_organization_id]

go 

IF NOT EXISTS (SELECT * 
               FROM   sysindexes 
               WHERE  id = Object_id('dbo.form_submission') 
                      AND NAME = 'form_submission_uuid_index') 
  CREATE INDEX form_submission_uuid_index 
    ON dbo.form_submission (uuid); 
go