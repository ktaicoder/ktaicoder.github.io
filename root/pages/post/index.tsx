import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import MdxPostLayout from 'src/layout/mdx-post/MdxPostLayout'

import { SITE_NAME } from 'src/lib/mdx-constants'
import { getAllPosts } from 'src/lib/mdxUtils'
import { IPost } from 'src/model/IPost'

type Props = {
    posts: IPost[]
}

export default function PostHome({ posts }: Props) {
    return (
        <MdxPostLayout>
            <Head>
                <title>{SITE_NAME}</title>
            </Head>

            <h1 className="text-4xl font-bold mb-4">Recipes</h1>

            <div className="space-y-12">
                {posts.map((post) => (
                    <div key={post.slug}>
                        {/* <div className="mb-4">
                            <Thumbnail slug={post.slug} title={post.title} src={post.thumbnail} />
                        </div> */}

                        <h2 className="text-2xl font-bold mb-4">
                            <Link href={`/post/${post.slug}`}>
                                <a>{post.title}</a>
                            </Link>
                        </h2>

                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </MdxPostLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts(['slug', 'date', 'thumbnail', 'title', 'description'])

    return { props: { posts } }
}
