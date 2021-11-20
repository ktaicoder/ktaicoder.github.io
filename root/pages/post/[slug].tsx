import rehypePrism from '@mapbox/rehype-prism'
import { Box } from '@mui/system'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import { useEffect } from 'react'
import MdxComponents from 'src/components/mdx/MdxComponents'
import config from 'src/config'
import MainLayout from 'src/layout/main/MainLayout'
import MdxPostLayout from 'src/layout/mdx-post/MdxPostLayout'
import { getAllPosts, getPost } from 'src/lib/mdxUtils'
import { IPost } from 'src/model/IPost'

type Props = {
    source: MDXRemoteSerializeResult
    frontMatter: Omit<IPost, 'slug'>
}

// pre 태그를 code-snippet-wrap으로 감싼다
function wrapSnippet(pre: Element) {
    const wrap = document.createElement('div')
    wrap.classList.add('code-snippet-wrap')
    pre.parentNode?.insertBefore(wrap, pre)
    // pre.remove()
    wrap.appendChild(pre)
}

export function PostPage({ source, frontMatter }: Props) {
    const ogImage = config.siteURL + frontMatter.thumbnail

    useEffect(() => {
        const preTags = document.querySelectorAll('article.mdx-article > pre')
        const preTagArray = Array.prototype.slice.call(preTags)
        preTagArray.forEach((node) => {
            wrapSnippet(node)
        })
    }, [])

    return (
        <MainLayout title={frontMatter.title}>
            <MdxPostLayout pageTitle={frontMatter.title}>
                <Head>
                    <meta name="description" content={frontMatter.description} key="description" />
                    <meta property="og:description" content={frontMatter.description} key="ogDescription" />
                    <meta property="og:image" content={ogImage} key="ogImage" />
                </Head>

                <Box component="article" className="mdx-article">
                    {/* <Typography variant="h3">{frontMatter.title}</Typography>
                    <p>{frontMatter.description}</p> */}
                    <MDXRemote {...source} components={MdxComponents} />
                </Box>
            </MdxPostLayout>
        </MainLayout>
    )
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { content, data } = getPost(params?.slug as string)

    const mdxSource = await serialize(content, {
        scope: data,
        mdxOptions: {
            rehypePlugins: [rehypePrism],
        },
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts(['slug'])

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}
