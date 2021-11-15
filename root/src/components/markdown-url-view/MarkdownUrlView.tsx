import MarkdownView from '../markdown-view/MarkdownView'
import { useState, useCallback, useEffect } from 'react'

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
            console.log(err)
        }
    }, [])

    useEffect(() => {
        reload(url)
    }, [url])
    return <MarkdownView markdown={markdown} />
}
