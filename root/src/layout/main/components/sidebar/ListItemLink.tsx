import { Link as MuiLink, ListItem, ListItemProps } from '@mui/material'
import React from 'react'
import { Link, LinkProps } from 'src/components/link'
import { routerUrlOf } from 'src/lib/urls'

const ListItemLink: React.FC<Omit<LinkProps, 'href'> & ListItemProps<'button', { button?: true; href: string }>> = (
    props,
) => {
    const { children, href, ...restProps } = props
    const external = href.startsWith('http://') || href.startsWith('https://')
    // console.log('href', children)
    if (external) {
        return (
            <ListItem button component={MuiLink} {...restProps} href={href}>
                {children}
            </ListItem>
        )
    } else {
        const hrefAs: string = routerUrlOf(href)
        return (
            <ListItem button component={Link} {...restProps} href={hrefAs}>
                {children}
            </ListItem>
        )
    }
}

export default ListItemLink
// type Props = {
//     to: string
//     activeClassName: string
//     className: string
//     children?: React.ReactNode
// } & LinkProps
// export default function ListItemLink(props: Props) {
//     const { to, className, ...others } = props

//     const renderLink = React.useMemo(
//         () =>
//             React.forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => (
//                 <MuiLink href={routerUrlOf(to)} ref={ref} {...itemProps} />
//             )),
//         [to],
//     )

//     return (
//         <li>
//             <ListItem button className={className} component={renderLink} {...others} />
//         </li>
//     )
// }
