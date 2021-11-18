import { useTheme } from '@mui/material/styles'
import { Container, useMediaQuery } from '@mui/material'
import Header from 'src/components/mdx/Header'
import Meta from 'src/components/mdx/Meta'

type Props = {
    children: React.ReactNode
    pageTitle?: string
}

const MdxPostLayout: React.FC<Props> = ({ children, pageTitle }: Props) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <>
            <Meta pageTitle={pageTitle} />

            <div className={smDown ? 'max-w-md mx-auto' : 'max-w-prose mx-auto px-4'}>
                <Header />
                <main className="pt-4 pb-12">{children}</main>
            </div>

            {/* <Container maxWidth="md">
                <Header />
                <main className="pt-4 pb-12">{children}</main>
            </Container> */}
        </>
    )
}

export default MdxPostLayout
