/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

type Props = {
    title: string
    src: string
    slug?: string
}

const Thumbnail: React.FC<Props> = ({ title, src, slug }: Props) => {
    const image = <img src={src} width={1280} height={720} alt="" />
    return slug ? (
        <Link href={`/guide/${slug}`}>
            <a aria-label={title}>{image}</a>
        </Link>
    ) : (
        image
    )
}

export default Thumbnail
