import rehypePrism from '@mapbox/rehype-prism'
import { Box } from '@mui/system'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import MdxComponents from 'src/components/mdx/MdxComponents'
import MainLayout from 'src/layout/main/MainLayout'
import MdxPostLayout from 'src/layout/mdx-post/MdxPostLayout'
import { getAllPosts, getPost } from 'src/lib/mdxUtils'
import { IPost } from 'src/model/IPost'

type Props = {
    source: MDXRemoteSerializeResult
    frontMatter: Omit<IPost, 'slug'>
}

export function PostFramePage({ source, frontMatter }: Props) {
    // const ogImage = config.siteURL + frontMatter.thumbnail

    return (
        <MainLayout title={frontMatter.title}>
            <MdxPostLayout pageTitle={frontMatter.title}>
                <Head>
                    <meta name="description" content={frontMatter.description} key="description" />
                    <meta property="og:description" content={frontMatter.description} key="ogDescription" />
                    {/* <meta property="og:image" content={ogImage} key="ogImage" /> */}
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

export default PostFramePage

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
