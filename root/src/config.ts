import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const cfg = {
    routerBaseURL: publicRuntimeConfig.ROUTER_BASE_URL,
    apiBaseURL: publicRuntimeConfig.API_BASE_URL,
    siteURL: publicRuntimeConfig.SITE_URL,
    debug: Boolean(publicRuntimeConfig.DEBUG),
}

// console.log('config=', cfg)
export default cfg
