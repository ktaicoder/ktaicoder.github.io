import { fromEvent, Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { dispatch, EventTypes } from './common'

type Payload = {
    postId: string
}

const getStr = (obj: any, propertyName: string): string | undefined => {
    if (propertyName in obj && typeof obj[propertyName] === 'string') {
        return obj[propertyName]
    }
    return undefined
}

export class OpenPostDialogEvent {
    static send = (params: { postId: string }) => {
        dispatch(EventTypes.post.openDialog, params)
    }

    private static retrieveEventBody = (event: any): Payload | null => {
        if (!event.detail) return null
        const detail = event.detail
        const type = event.type

        if (type === EventTypes.post.openDialog) {
            const postId = getStr(detail, 'postId')
            if (postId) {
                return { postId }
            }
        }

        console.warn('unknown event payload', event)
        return null
    }

    static observe = (): Observable<Payload> => {
        return fromEvent(window, EventTypes.post.openDialog).pipe(
            map((event: any) => OpenPostDialogEvent.retrieveEventBody(event)),
            filter((body) => body != null),
            map((body) => body as Payload), // as not-null
        )
    }
}
