import { Apps } from '@vtex/api'
import axios from 'axios'

export const getSettings = async (ctx: any) => {
    const apps = new Apps(ctx.vtex);
    return await apps.getAppSettings(ctx.vtex.userAgent)
}

export const getPromotionDetails = async (ctx: any, settings: any) => {

    return axios({
      url: `https://${ctx.vtex.account}.vtexcommercestable.com.br/api/rnb/pvt/calculatorconfiguration/${ctx.query.promotionId}`,
      method: 'get',
      headers: {
        'Control-Cache': 'proxy-revalidate, no-cache, no-store',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "X-VTEX-API-AppKey": settings.vtexAppKey,
        "X-VTEX-API-AppToken": settings.vtexAppToken,
      }
    }).catch(err => {
      return err
    })
}

export const getSkuDetails = async (ctx: any, settings: any) => {

  return axios({
    url: `https://${ctx.vtex.account}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/${ctx.query.skuId}`,
    method: 'get',
    headers: {
      'Control-Cache': 'proxy-revalidate, no-cache, no-store',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "X-VTEX-API-AppKey": settings.vtexAppKey,
      "X-VTEX-API-AppToken": settings.vtexAppToken,
    }
  }).catch(err => {
    return err
  })
}