import { Box } from '@mui/material'
import React from 'react'
import { useMeasure } from 'react-use'
import Meta from 'src/components/mdx/Meta'
import { flatSx } from 'src/lib/sx-props'
import { useMainLayoutContext } from '../main/MainLayoutContext'
import { rootSx } from './style'

type Props = {
    children?: React.ReactNode | React.ReactNode[]
    pageTitle?: string
}

const MAX_WIDTH = 840

function MdxPostLayout({ children, pageTitle }: Props) {
    const [containerRef, { width: containerWidth }] = useMeasure()
    const { sidebarWidth = 0 } = useMainLayoutContext() ?? {}

    let bodyWidth = 0
    if (!isNaN(containerWidth) && containerWidth > 0) {
        bodyWidth = Math.min(+containerWidth.toFixed(0), MAX_WIDTH)
    }

    return (
        <Box className="MdxPostLayout-root">
            <Meta pageTitle={pageTitle} />
            <Box
                sx={flatSx(rootSx, {
                    '& article.mdx-article': {
                        maxWidth: bodyWidth <= 0 ? 0 : `${bodyWidth - 56}px`,
                        mx: 'auto',
                    },
                })}
            >
                <Box
                    ref={containerRef}
                    sx={{
                        position: 'relative',
                        width: 'auto',
                        maxWidth: `calc(100vw - ${sidebarWidth}px)`,
                        overflowX: 'hidden',
                    }}
                >
                    <Box
                        sx={{
                            display: bodyWidth <= 0 ? 'none' : 'block',
                            maxWidth: `${MAX_WIDTH}px`,
                            mx: 'auto',
                        }}
                    >
                        {children}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MdxPostLayout
