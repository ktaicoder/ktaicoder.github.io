import log from 'src/log'
import { useState, useCallback, useEffect } from 'react'
import MarkdownView from '../markdown-view/MarkdownView'

type Props = {
    url: string
}

export default function MarkdownUrlView(props: Props) {
    const { url } = props
    const [markdown, setMarkdown] = useState('# HW Guide')
    const reload = useCallback(async (url: string) => {
        try {
            const markdownText = await fetch(url).then((res) => res.text())
            setMarkdown(markdownText ?? '')
        } catch (err) {
            log.debug(err)
        }
    }, [])

    useEffect(() => {
        reload(url)
    }, [url, reload])
    return <MarkdownView markdown={markdown} />
}
