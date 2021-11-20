import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import Meta from 'src/components/mdx/Meta'

type Props = {
    children: React.ReactNode
    pageTitle?: string
}

function MdxPostLayout({ children, pageTitle }: Props) {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    // 스마트폰에서 아무리해도 pre > code 부분이 overflow 가로 스크롤이 안된다
    // 그래서 윈도우 크기를 기준으로 최대 너비를 고정했다
    const { width: windowWidth } = useWindowSize()
    const [bodyWidth, setBodyWidth] = useState(0)

    useEffect(() => {
        if (windowWidth && !isNaN(windowWidth) && windowWidth > 0) {
            setBodyWidth(windowWidth)
        }
    }, [windowWidth])

    return (
        <>
            <Meta pageTitle={pageTitle} />
            <Box
                sx={{
                    color: '#111827',
                    overflow: 'hidden',
                    pb: 10,
                    '& article.mdx-article': {
                        maxWidth: bodyWidth <= 0 ? 'auto' : `${bodyWidth - (48 + 2)}px`,
                    },
                    '& h1': {
                        fontSize: '1.8rem',
                        fontWeight: 900,
                        mb: 4,
                        pb: 1,
                        pl: 0,
                        borderBottom: '1px solid #ccc',
                    },
                    '& h2': {
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        mt: 4,
                        mb: 1,
                    },
                    '& h3': {
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        mt: 4,
                        mb: 1,
                    },

                    '& h4': {
                        mt: 3,
                        mb: 1,
                        fontSize: '1.15rem',
                        fontWeight: 600,
                    },
                    '& h5': {
                        m: 0,
                        mt: 1,
                        fontSize: '1.05rem',
                        fontWeight: 600,
                    },
                    '& h6': {
                        m: 0,
                        mt: 1,
                        fontSize: '1rem',
                        fontWeight: 600,
                    },
                    '& p': {
                        m: 0,
                        mt: '0.5rem',
                        fontSize: '0.95rem',
                        fontWeight: 400,
                        lineHeight: '1.8rem',
                    },
                    '& div.code-snippet-wrap': {
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
                <Container maxWidth="md">{children}</Container>
            </Box>
        </>
    )
}

export default MdxPostLayout
