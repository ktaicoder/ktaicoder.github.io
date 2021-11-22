import { Box, useMediaQuery, useTheme } from '@mui/material'
import { useMeasure } from 'react-use'
import Meta from 'src/components/mdx/Meta'
import { useMainLayoutContext } from '../main/MainLayoutContext'

type Props = {
    children: React.ReactNode
    pageTitle?: string
}

const MAX_WIDTH = 840

function MdxPostLayout({ children, pageTitle }: Props) {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const [containerRef, { width: containerWidth }] = useMeasure()
    const { sidebarWidth = 0 } = useMainLayoutContext() ?? {}

    let bodyWidth = 0
    if (!isNaN(containerWidth) && containerWidth > 0) {
        bodyWidth = Math.min(+containerWidth.toFixed(0), MAX_WIDTH)
    }

    return (
        <>
            <Meta pageTitle={pageTitle} />
            <Box
                sx={{
                    color: '#111827',
                    overflow: 'hidden',
                    pb: 10,
                    '& article.mdx-article': {
                        maxWidth: bodyWidth <= 0 ? 0 : `${bodyWidth - 56}px`,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    },
                    '& h1': {
                        fontSize: '1.65rem',
                        fontWeight: 900,
                        mb: 4,
                        pb: 1,
                        pl: 0,
                        textAlign: 'center',
                        borderBottom: '1px solid #ccc',
                    },
                    '& h2': {
                        fontSize: '1.45rem',
                        fontWeight: 700,
                        mt: 4,
                        mb: 1,
                    },
                    '& h3': {
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        color: '#000',
                        mt: 4,
                        mb: 1,
                    },

                    '& h4': {
                        mt: 3,
                        mb: 1,
                        color: '#111',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                    },
                    '& h5': {
                        m: 0,
                        mt: 1,
                        color: '#333',
                        fontSize: '1.0rem',
                        fontWeight: 600,
                    },
                    '& h6': {
                        m: 0,
                        mt: 1,
                        color: '#444',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        lineHeight: '1.9rem',
                    },
                    '& p': {
                        m: 0,
                        color: '#444',
                        mt: '0.5rem',
                        mb: '0.5rem',
                        fontSize: '0.95rem',
                        fontWeight: 400,
                        lineHeight: '1.75rem',
                    },
                    '& > pre': {
                        overflow: 'auto',
                        position: 'relative',
                        wordWrap: 'break-word',
                    },

                    '& pre': {
                        backgroundColor: '#1f2937',
                        fontFamily:
                            "'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
                        marginBottom: '16px',
                    },
                    '& :not(pre) > code': {
                        backgroundColor: 'transparent',
                        position: 'relative',
                        color: '#000',
                        fontWeight: 600,
                        paddingLeft: '0.4em',
                        paddingRight: '0.4em',
                        fontFamily:
                            "'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
                        fontSize: '85%',
                        lineHeight: 1.5,
                        wordBreak: 'break-word',
                        whiteSpace: 'nowrap',
                        '&::before': {
                            position: 'absolute',
                            content: '""',
                            top: -2,
                            right: 0,
                            left: 0,
                            bottom: -2,
                            zIndex: 0,
                            borderRadius: '6px',
                            background: 'rgba(175,183,193,0.2)',
                            padding: '0.2em 0.4em',
                        },
                    },
                    '& pre > code': {
                        padding: 0,
                        color: 'inherit',
                        background: 'inherit',
                        whiteSpace: 'pre',
                        fontFamily:
                            "'Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
                    },

                    '& ul > li,& ol > li': {
                        lineHeight: 1.8,
                    },
                    '& ul > li + li,& ol > li + li': {
                        mt: 0.5,
                    },
                }}
            >
                <Box
                    ref={containerRef}
                    sx={{
                        position: 'relative',
                        width: `calc(100vw - ${sidebarWidth}px)`,
                        maxWidth: `calc(100vw - ${sidebarWidth}px)`,
                        overflowX: 'hidden',
                    }}
                >
                    <Box
                        sx={{
                            display: bodyWidth <= 0 ? 'none' : 'block',
                            maxWidth: `${MAX_WIDTH}px`,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        {children}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default MdxPostLayout
