```sql
SELECT TOP (1000) [ScanPack_Detail_Id]
      ,[ScanPack_Id]
      ,[ScanPack_NoItem]
      ,[ScanPack_Barcode]
      ,[ScanPack_Serial]
      ,[ScanPack_PartNumber]
      ,[ScanPack_Date]
FROM [abc].[INOAC].[ScanPackRack_Detail]
ORDER BY [ScanPack_Detail_Id] DESC
-- ScanPack_Id
-- ScanPack_NoItem
-- ScanPack_Date

SELECT * FROM [INOAC].[ScanPackRack_Header]
ORDER BY [ScanPack_Id] DESC
-- ScanPack_Id
-- Area
-- PartNumber
-- Qty
-- ProduceDate

SELECT CLIENTE FROM [dbo].[tbABCProcces]
GROUP BY CLIENTE

SELECT *PROYECTO* FROM [dbo].[tbABCProcces]
GROUP BY PROYECTO
-- WHERE PartName = 'LG07880'
```
