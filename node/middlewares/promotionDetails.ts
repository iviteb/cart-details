import { getSettings, getPromotionDetails} from '../util/utils'  
  
  export async function promotionDetails(ctx: Context, next: () => Promise<any>) {
    
    try {
      const settings = await getSettings(ctx)
      const promotion = await getPromotionDetails(ctx, settings)
        
      ctx.response.status = 200
      ctx.response.body = promotion.data
    } catch (exception) {
      console.error(exception.message)
      throw exception
    }
    await next()
  }
  