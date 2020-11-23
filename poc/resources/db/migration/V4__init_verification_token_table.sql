IF EXISTS (SELECT * FROM sysobjects WHERE id = OBJECT_ID(N'[dbo].[verification_token]') AND OBJECTPROPERTY(id, N'ISUSERTABLE') = 1)
DROP TABLE [dbo].[verification_token]
GO


IF NOT EXISTS (SELECT * FROM sysobjects WHERE id = OBJECT_ID(N'[dbo].[verification_token]') AND OBJECTPROPERTY(id, N'ISUSERTABLE') = 1)
CREATE TABLE [dbo].[verification_token]
  (
     [id]           [BIGINT] IDENTITY(1,1) NOT NULL,
     [email]        [VARCHAR](100) NULL,
     [expiry_date]  [DATETIME2] NULL,
     [token]        [VARCHAR](100) NOT NULL,
     [token_type]   [VARCHAR](100) NOT NULL,
     [user_id] [BIGINT] NULL,
     [properties] [VARCHAR](max) NULL,
     CONSTRAINT [PK_VERIFICATION_TOKEN] PRIMARY KEY ( [id] ASC )
  )

go

IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = object_id(N'[dbo].[fk_verification_token_user_id]') AND OBJECTPROPERTY(id, N'IsForeignKey') = 1)
ALTER TABLE [dbo].[verification_token]
  WITH CHECK ADD CONSTRAINT [fk_verification_token_user_id] FOREIGN KEY(
  [user_id]) REFERENCES [dbo].[user] ([id])

go

ALTER TABLE [dbo].[verification_token]
  CHECK CONSTRAINT [fk_verification_token_user_id]

go
