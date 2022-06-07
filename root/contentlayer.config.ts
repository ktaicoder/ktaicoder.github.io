import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'

import remarkGfm from 'remark-gfm'
// @ts-ignore
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: '**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
        description: {
            type: 'string',
            description: 'The description of the post',
            required: false,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => {
                // console.log('computedFields param=', doc)
                return `/post-frame/${doc._raw.flattenedPath}`
            },
        },
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
    },
}))

export default makeSource({
    contentDirPath: '_posts',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            rehypeAutolinkHeadings,
            rehypePrism,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['anchor'],
                    },
                },
            ],
        ],
    },
})
