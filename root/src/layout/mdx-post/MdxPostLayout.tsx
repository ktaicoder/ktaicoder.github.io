import Header from 'src/components/mdx/Header'
import Meta from 'src/components/mdx/Meta'

type Props = {
    children: React.ReactNode
    pageTitle?: string
}

const MdxPostLayout: React.FC<Props> = ({ children, pageTitle }: Props) => {
    return (
        <>
            <Meta pageTitle={pageTitle} />

            <div className="max-w-prose mx-auto px-4">
                <Header />
                <main className="pt-4 pb-12">{children}</main>
            </div>
        </>
    )
}

export default MdxPostLayout
