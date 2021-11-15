import log from 'src/log'
import SidebarStore from './SidebarStore'
import { RootStoreInitialState } from './types'

/**
 * @class Mobx 루트 스토어
 * @property {IntlStore} intlStore - UI 상태
 * @property {ProjectLayoutStore} projectLayoutStore - 프로젝트 레이아웃
 */
class RootStore {
    /**
     * ProfileStore
     */
    sidebarStore = new SidebarStore()

    /**
     * hydrate
     */
    hydrate = (data: RootStoreInitialState | null | undefined) => {
        log.debug('store hydrate:', data)
        if (!data) return
        // this.intlStore.hydrate(data?.intlStoreData)
        // add other stores
    }
}

export default RootStore
