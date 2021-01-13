# Cart Details App

Micro service with the responsibility of exposing endpoints that provide info regarding products/promotions to be used on checkout

## Endpoints
/_v1/api/getPromotionDetails?promotionId=dummy-promotion-id - returns the promotion details based on the promotionId provided
/_v1/api/getSkuDetails?skuId=1 - returns the sku details such as PackageWeightKg based on the SKU ID provided