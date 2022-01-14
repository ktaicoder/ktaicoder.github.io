import { ListItem, ListItemProps } from '@mui/material'
import React from 'react'
import { Link, LinkProps } from 'src/components/link'

const ListItemLink: React.FC<Omit<LinkProps, 'href'> & ListItemProps<'button', { button?: true; href: string }>> = (
    props,
) => {
    const { children, href, ...restProps } = props
    return (
        <ListItem button component={Link} {...restProps} href={href}>
            {children}
        </ListItem>
    )
}

export default ListItemLink
