IF NOT EXISTS (
  SELECT *
  FROM   sys.columns
  WHERE  object_id = OBJECT_ID(N'[dbo].[form_submission]')
         AND name = 'createdDate'
)
ALTER TABLE [dbo].[form_submission] ADD createdDate DATETIME NULL;

IF NOT EXISTS (
  SELECT *
  FROM   sys.columns
  WHERE  object_id = OBJECT_ID(N'[dbo].[form_submission]')
         AND name = 'properties'
)
ALTER TABLE [dbo].[form_submission] ADD properties DATETIME NULL;