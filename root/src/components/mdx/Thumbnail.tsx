import React from 'react'
import Link from 'next/link'

type Props = {
    title: string
    src: string
    slug?: string
}

const Thumbnail: React.FC<Props> = ({ title, src, slug }: Props) => {
    const image = <img src={src} alt={`Cover Image for ${title}`} width={1280} height={720} />
    return (
        <>
            {slug ? (
                <Link href={`/guide/${slug}`}>
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </>
    )
}

export default Thumbnail
