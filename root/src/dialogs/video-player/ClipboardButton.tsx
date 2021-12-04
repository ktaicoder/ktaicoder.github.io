import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useCopyToClipboard } from 'react-use'

type Props = {
    buttonText: string
    clipboardTextFunc: () => string | undefined | null
}

export default function ClipboardButton(props: Props) {
    const [msgVisible, setMsgVisible] = useState(false)
    const { buttonText, clipboardTextFunc } = props
    const [, copyToClipboard] = useCopyToClipboard()

    const _handleCopyButtonClick = () => {
        const text = clipboardTextFunc()
        if (text && text.length > 0) {
            copyToClipboard(text)
            setMsgVisible(true)
        }
    }

    useEffect(() => {
        if (!msgVisible) return
        setMsgVisible(true)
        const timer = setTimeout(() => {
            setMsgVisible(false)
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [msgVisible])

    return (
        <div style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}>
            <Button onClick={_handleCopyButtonClick} color="primary" style={{ opacity: msgVisible ? 0 : 1 }}>
                {buttonText}
            </Button>
            {msgVisible && (
                <span
                    style={{
                        position: 'absolute',
                        textAlign: 'center',
                        width: 'auto',
                        top: '50%',
                        left: '50%',
                        height: 'auto',
                        fontSize: '0.6rem',
                        color: '#999',
                        transform: 'translate(-50%,-50%)',
                    }}
                >
                    Copied
                </span>
            )}
        </div>
    )
}
