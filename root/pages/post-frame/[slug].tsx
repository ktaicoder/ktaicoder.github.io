import { allPosts, Post } from 'contentlayer/generated'
import dynamic from 'next/dynamic'

const MdxPost = dynamic(() => import('src/components/MdxPost/MdxPost'))
const MainLayout = dynamic(() => import('src/layout/main/MainLayout'))

export async function getStaticPaths() {
    const paths: string[] = allPosts.map((post) => post.url)
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
    const { title } = post

    return (
        <MainLayout title={title}>
            <MdxPost post={post} />
        </MainLayout>
    )
}

export default PostLayout
