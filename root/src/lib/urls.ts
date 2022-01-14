import urljoin from 'url-join'
import config from 'src/config'
import urlParse from 'url-parse'
import Router from 'next/router'

const { apiBaseURL = '', routerBaseURL = '' } = config

// 로컬 모드에서는 CONFIG_ROUTER_PATH = '' or '/'
// 서버에서는 요런식으로 된다. CONFIG_ROUTER_PATH = '/flawing/web-admin'
const CONFIG_ROUTER_PATH = () => {
    if (!routerBaseURL) return ''
    return urlParse(routerBaseURL, true).pathname
}

export function routerFullUrlOf(path: string): string {
    const prefix = routerBaseURL ?? 'http://localhost:3000'
    return urljoin(prefix, path)
}

export function routerUrlOf(path: string): string {
    const routerPath = CONFIG_ROUTER_PATH()
    if (path === undefined || path === null) {
        return '/'
    }

    if (!routerPath || routerPath === '/') return path
    return `${routerPath}${path && path.startsWith('/') ? '' : '/'}${path}`
}

export const routerPush = (path: string): void => {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        Router.push(path)
    } else {
        // const url = routerUrlOf(path)
        // Router.push(path, url)
        Router.push(path, path)
    }
}

export const routerBack = (): void => {
    Router.back()
}

export const apiUrlOf = (path: string): string => {
    return urljoin(apiBaseURL, path)
}

/**
 * 오픈 소스 URLs
 */
export const openSourceUrls = {
    /**
     * 오픈 소스 보기 URL
     */
    view: (cate: string): string => apiUrlOf(`/p/m/open-source-license/${cate}.html`),
}

/**
 * 약관 URLs
 */
export const clauseUrls = {
    /**
     * 약관 정보 URL
     */
    //view: (clauseId: number) => apiUrl(`/p/m/clause/${clauseId}.html?verbose=true`),
    view: (clauseId: number): string => apiUrlOf(`/p/m/clause/${clauseId}.html`),

    // 이용약관
    viewUsage: (): string => apiUrlOf('/p/m/clause/1000004.html'),

    // 개인정보 처리방침
    viewPrivacy: (): string => apiUrlOf('/p/m/clause/1000000.html'),

    // 법적 고지
    viewLegalNotice: (): string => apiUrlOf('/p/m/clause/1000002.html'),

    /**
     * 약관 내용 보기 URL
     */
    substanceView: (substanceId: number): string => apiUrlOf(`/p/m/clause-substance/${substanceId}.html`),
}
