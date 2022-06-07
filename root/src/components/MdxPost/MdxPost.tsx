import { Box } from '@mui/material'
import { Post } from 'contentlayer/generated'
// eslint-disable-next-line import/no-unresolved
import { useMDXComponent } from 'next-contentlayer/hooks'
import Head from 'next/head'
import MdxComponents from 'src/components/mdx/MdxComponents'
import MdxPostLayout from 'src/layout/mdx-post/MdxPostLayout'

type Props = {
    post: Post
}

const MdxPost = ({ post }: Props) => {
    const { title, description } = post
    const MDXContent = useMDXComponent(post.body.code)

    return (
        <MdxPostLayout pageTitle={title}>
            <Head>
                <meta name="description" content={description} key="description" />
                <meta property="og:description" content={description} key="ogDescription" />
                {/* <meta property="og:image" content={ogImage} key="ogImage" /> */}
            </Head>
            <Box component="article" className="mdx-article">
                {/* <Typography variant="h3">{frontMatter.title}</Typography>
                    <p>{frontMatter.description}</p> */}
                {/* <MDXRemote {...source} components={MdxComponents} /> */}
                {/* <div dangerouslySetInnerHTML={{ __html: post.body.html }} */}
                <MDXContent components={MdxComponents} />
            </Box>
        </MdxPostLayout>
    )
}

export default MdxPost
