import { allPosts, Post } from 'contentlayer/generated'
import dynamic from 'next/dynamic'

const MdxPost = dynamic(() => import('src/components/MdxPost/MdxPost'))

export async function getStaticPaths() {
    const paths: string[] = allPosts.map((post) => post.url.replace(/\/post-frame\//, '/post/'))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug) as Post
    return {
        props: {
            post,
        },
    }
}

const PostLayout = ({ post }: { post: Post }) => {
    return <MdxPost post={post} />
}

export default PostLayout
