IF EXISTS (
  SELECT *
  FROM   sys.columns
  WHERE  object_id = OBJECT_ID(N'[dbo].[form_submission]')
         AND name = 'createdDate'
)
ALTER TABLE [dbo].[form_submission] DROP COLUMN [createdDate]

IF NOT EXISTS (
  SELECT *
  FROM   sys.columns
  WHERE  object_id = OBJECT_ID(N'[dbo].[form_submission]')
         AND name = 'created_date'
)
ALTER TABLE [dbo].[form_submission] ADD created_date DATETIME NULL;