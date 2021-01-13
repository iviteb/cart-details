import {ClientsConfig, IOClients, LRUCache, method, Service, ServiceContext} from "@vtex/api";

import { checkAppSettings } from './middlewares/checkAppSettings'
import { promotionDetails } from './middlewares/promotionDetails'
import { skuDetails } from './middlewares/skuDetails'

declare global {
  type Context = ServiceContext<IOClients>
}

const TIMEOUT_MS = 800;

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 });

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<IOClients> = {
  // We pass our custom implementation of the clients bag, containing the Status client.
  implementation: IOClients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    // This key will be merged with the default options and add this cache to our Status client.
    status: {
      memoryCache,
    },
  },
};

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  routes: {
    promotionDetails: method({
      GET: [checkAppSettings, promotionDetails],
    }),
    skuDetails: method({
      GET: [checkAppSettings, skuDetails],
    })
  },
})
