IF EXISTS (
  SELECT *
  FROM   sys.columns
  WHERE  object_id = OBJECT_ID(N'[dbo].[form_submission]')
         AND name = 'completed_date'
)
ALTER TABLE [dbo].[form_submission] DROP COLUMN [completed_date]

IF NOT EXISTS (
  SELECT *
  FROM   sys.columns
  WHERE  object_id = OBJECT_ID(N'[dbo].[form_submission]')
         AND name = 'appointment_time'
)
ALTER TABLE [dbo].[form_submission] ADD appointment_time DATETIME NULL;

IF NOT EXISTS (
  SELECT *
  FROM   sys.columns
  WHERE  object_id = OBJECT_ID(N'[dbo].[form_submission]')
         AND name = 'temperature'
)
ALTER TABLE [dbo].[form_submission] ADD temperature DATETIME NULL;


IF NOT EXISTS (select * from sysindexes where id=object_id('dbo.form_submission') and name='form_sub_appointment_time_index')
CREATE INDEX form_sub_appointment_time_index ON dbo.form_submission (appointment_time);
go

IF NOT EXISTS (select * from sysindexes where id=object_id('dbo.form_submission') and name='form_sub_outcome_index')
CREATE INDEX form_sub_outcome_index ON dbo.form_submission (outcome);
go