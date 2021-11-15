const PRODUCTION = process.env.NODE_ENV === 'production'

const ROUTER_BASE_URL = process.env.ROUTER_BASE_URL ?? ''
const API_BASE_URL = process.env.API_BASE_URL ?? 'https://github.com/ktaicoder'
const ASSET_PREFIX = process.env.ASSET_PREFIX ?? ''


/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    assetPrefix: ASSET_PREFIX,
    images: {
        formats: ['image/avif', 'image/webp']
    },

    // 착각하기 쉬운거
    // 빌드할때만 사용된다. 웹페이지 동작 중에는 빌드된 것으로 사용한다.
    publicRuntimeConfig: {
        ROUTER_BASE_URL,
        API_BASE_URL,
        DEBUG: !PRODUCTION,
    },
}
