import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import Meta from 'src/components/mdx/Meta'

type Props = {
    children: React.ReactNode
    pageTitle?: string
}

const MdxPostLayout: React.FC<Props> = ({ children, pageTitle }: Props) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    // 스마트폰에서 아무리해도 pre > code 부분이 overflow 가로 스크롤이 안된다
    // 그래서 윈도우 크기로 최대 너비를 고정했다
    const { width: windowWidth } = useWindowSize()
    const [bodyWidth, setBodyWidth] = useState(0)

    useEffect(() => {
        if (windowWidth && !isNaN(windowWidth) && windowWidth > 0) {
            setBodyWidth(windowWidth)
        }
    }, [windowWidth])

    // useEffect(() => {
    //     const width = window.innerWidth
    //     if (width && !isNaN(width) && width > 0) {
    //         setBodyWidth(width)
    //     }
    // }, [])

    return (
        <>
            <Meta pageTitle={pageTitle} />
            <Box
                sx={{
                    color: '#111827',
                    overflow: 'hidden',
                    maxWidth: bodyWidth <= 0 ? 'auto' : `${bodyWidth - (smDown ? 18 : 32)}px`,

                    '& h1': {
                        fontSize: '1.8rem',
                        fontWeight: 900,
                        mb: 2,
                    },
                    '& h2': {
                        fontSize: '1.6rem',
                        fontWeight: 800,
                        mt: 5,
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
                        fontSize: '1.2rem',
                        fontWeight: 600,
                    },
                    '& h5': {
                        mt: 1,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                    },
                    '& h6': {
                        mt: 1,
                        fontSize: '1.05rem',
                        fontWeight: 600,
                    },
                    '& p': {
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
                        backgroundColor: '#1f2937',
                        color: '#24292f',
                        fontWeight: 500,
                        fontFamily:
                            "'Noto Sans KR','Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
                        background: 'rgba(175,183,193,0.2)',
                        padding: '0.2em 0.4em',
                        fontSize: '85%',
                        lineHeight: 1.5,
                        wordBreak: 'break-word',
                        borderRadius: '6px',
                    },
                    '& pre > code': {
                        padding: 0,
                        color: 'inherit',
                        background: 'inherit',
                        whiteSpace: 'pre',
                        fontFamily:
                            "'Nanum Gothic Coding', ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
                    },
                    '& ul > li': {
                        lineHeight: 1.8,
                    },
                    '& ul > li + li': {
                        mt: 1,
                    },
                }}
            >
                <Container maxWidth="md">
                    <Box component="main" mt={6} mb={4}>
                        {children}
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default MdxPostLayout
