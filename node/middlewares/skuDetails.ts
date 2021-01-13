import { getSettings, getSkuDetails } from '../util/utils'  

export async function skuDetails(ctx: Context, next: () => Promise<any>) {
  
  try {
    const settings = await getSettings(ctx)
    const sku = await getSkuDetails(ctx, settings)
      
    ctx.response.status = 200
    ctx.response.body = sku.data
  } catch (exception) {
    console.error(exception.message)
    throw exception
  }
  await next()
}
