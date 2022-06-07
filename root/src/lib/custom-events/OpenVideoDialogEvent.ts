import log from 'src/log'
import { filter, fromEvent, map, Observable } from 'rxjs'
import { dispatch, EventTypes } from './common'

type Payload = {
    videoUrl: string
}

const getStr = (obj: any, propertyName: string): string | undefined => {
    if (propertyName in obj && typeof obj[propertyName] === 'string') {
        return obj[propertyName]
    }
    return undefined
}

export class OpenVideoDialogEvent {
    static send = (params: { videoUrl: string }) => {
        dispatch(EventTypes.video.openDialog, params)
    }

    private static retrieveEventBody = (event: any): Payload | null => {
        if (!event.detail) return null
        const detail = event.detail
        const type = event.type

        if (type === EventTypes.video.openDialog) {
            const videoUrl = getStr(detail, 'videoUrl')
            if (videoUrl) {
                return { videoUrl }
            }
        }

        log.warn('unknown event payload', event)
        return null
    }

    static observe = (): Observable<Payload> => {
        return fromEvent(window, EventTypes.video.openDialog).pipe(
            map((event: any) => OpenVideoDialogEvent.retrieveEventBody(event)),
            filter((body) => body != null),
            map((body) => body as Payload), // as not-null
        )
    }
}
