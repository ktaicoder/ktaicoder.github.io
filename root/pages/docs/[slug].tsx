import DocLayout from 'src/layout/doc/DocLayout'
import { getAllDocs, getDocBySlug } from 'src/lib/docs'
import markdownToHtml from 'src/lib/markdown'

export default function Doc({ meta, content }) {
    return <DocLayout meta={meta}>{content}</DocLayout>
}

export async function getStaticProps({ params }) {
    const doc = getDocBySlug(params.slug)
    const content = await markdownToHtml(doc.content || '')

    return {
        props: {
            ...doc,
            content,
        },
    }
}

export async function getStaticPaths() {
    const docs = getAllDocs()

    return {
        paths: docs.map((doc) => {
            return {
                params: {
                    slug: doc.slug,
                },
            }
        }),
        fallback: 'blocking',
    }
}
