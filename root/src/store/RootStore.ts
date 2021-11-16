import log from 'src/log'
import SidebarStore from './SidebarStore'
import { RootStoreInitialState } from './types'

/**
 * @class Mobx 루트 스토어
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
