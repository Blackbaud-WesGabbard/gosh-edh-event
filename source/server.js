import { createServer } from 'boiler-room-runner'
import { configureStore } from './store'
import routes from './routes'
import renderDocument from './lib/renderDocument/'
import { updateClient } from 'supporticon/utils/client'
import './lib/localisation'

const store = configureStore()
const basepath = process.env.BASE_PATH

updateClient({ baseURL: process.env.SUPPORTICON_BASE_URL })

export default ({ assets }) => {
  const app = createServer({
    basepath,
    renderDocument,
    routes,
    store,
    assets
  })

  app.staticRoutes = ['/404', '/500']

  return app
}

export { renderDocument }
