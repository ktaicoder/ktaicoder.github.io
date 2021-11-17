import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const docsDirectory = join(process.cwd(), 'docs')

type SlugDoc = {
    slug: string
    meta: { [key: string]: any }
    content: string
}
export function getDocBySlug(slug): SlugDoc {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(docsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return { slug: realSlug, meta: data, content }
}

export function getAllDocs(): SlugDoc[] {
    const slugs = fs.readdirSync(docsDirectory)
    const docs = slugs.map((slug) => getDocBySlug(slug))

    return docs
}
