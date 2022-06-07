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
    // eslint-disable-next-line class-methods-use-this
    hydrate = (data: RootStoreInitialState | null | undefined) => {
        log.debug('store hydrate:', data)
    }
}

export default RootStore
