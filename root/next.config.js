const { withContentlayer } = require("next-contentlayer")

const PRODUCTION = process.env.NODE_ENV === 'production'
const ROUTER_BASE_URL = process.env.ROUTER_BASE_URL ?? ''
const API_BASE_URL = process.env.API_BASE_URL ?? 'https://github.com/ktaicoder'
const ASSET_PREFIX = process.env.ASSET_PREFIX ?? ''

let SITE_URL
if (PRODUCTION) {
    SITE_URL = 'https://ktaicoder.github.io'
} else {
    SITE_URL = process.env.SITE_URL ?? 'http://localhost:3000'
}


/** @type {import('next').NextConfig} */
const CFG = {
    reactStrictMode: true,
    assetPrefix: ASSET_PREFIX,
    // images: {
    //     formats: ['image/avif', 'image/webp']
    // },

    poweredByHeader: false,
    productionBrowserSourceMaps: !PRODUCTION,
    devtool: PRODUCTION ? 'hidden-source-map' : 'inline-source-map',

    // 착각하기 쉬운거
    // 빌드할때만 사용된다. 웹페이지 동작 중에는 빌드된 것으로 사용한다.
    publicRuntimeConfig: {
        ROUTER_BASE_URL,
        API_BASE_URL,
        SITE_URL,
        DEBUG: !PRODUCTION,
    }
    // experimental: {
    //     swcFileReading: false
    // }
}

// exportPathMap을 설정하면 mdx 변경시 새로고침이 안된다
// 운영환경에서만 설정한다
// if (PRODUCTION) {
//     const fs = require('fs')
//     const postIds = fs.readdirSync('./_posts')
//         .filter(it => it.endsWith('.mdx'))
//         .map(filenm => filenm.replace(/\.mdx$/, ''))

//     // ex) '/post/hw-pc-program-guide': { page: '/post/[slug]' }
//     const posts = {}
//     postIds.forEach(postId => {
//         posts[`/post/${postId}`] = { page: '/post/[slug]' }
//         posts[`/post-frame/${postId}`] = { page: '/post-frame/[slug]' }
//     })
//     console.log(posts)
//     CFG.exportPathMap = async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
//         return {
//             '/': { page: '/' },
//             '/hw/guide': { page: '/hw/guide' },
//             '/codingpack/os-image-guide': { page: '/codingpack/os-image-guide' },
//             ...posts
//         }
//     }
// }

module.exports = withContentlayer(CFG)
