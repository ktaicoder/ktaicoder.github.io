/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Button, ButtonProps } from '@mui/material'
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'
import clsx from 'clsx'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { routerUrlOf } from 'src/lib/urls'

type NextComposedProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & NextLinkProps

const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>((props, ref) => {
    const { as, href, replace, scroll, passHref, shallow, prefetch, ...other } = props

    return (
        <NextLink
            href={href}
            prefetch={prefetch}
            as={as}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            passHref={passHref}
        >
            <a ref={ref} {...other} />
        </NextLink>
    )
})

interface LinkPropsBase {
    activeClassName?: string
    innerRef?: React.Ref<HTMLAnchorElement>
    naked?: boolean
}

export type LinkProps = LinkPropsBase & NextComposedProps & Omit<MuiLinkProps, 'href'>

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function SmartLink(props: LinkProps) {
    const { href, activeClassName = 'active', className: classNameProps, innerRef, naked, ...other } = props

    const router = useRouter()
    const pathname = typeof href === 'string' ? href : href.pathname
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    })

    if (naked) {
        const routerHref = typeof href === 'string' ? routerUrlOf(href) : href
        return <NextComposed className={className} ref={innerRef} href={routerHref} {...other} />
    }

    return <MuiLink component={NextComposed} className={className} ref={innerRef} href={href as string} {...other} />
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
    <SmartLink {...props} innerRef={ref} />
))

export const LinkButton = (props: Omit<ButtonProps, 'component'> & LinkProps) => {
    return <Button component={Link} {...props} />
}
