import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonProps } from './button'

interface Props extends ButtonProps {
    to: string
    external?: boolean
}

export const LinkButton: React.FC<Props> = ({ to, external, ...props }) => {
    const onClick = useMemo(() => {
        return props.disabled
            ? (e: any) => {
                  e.preventDefault()
              }
            : undefined
    }, [props.disabled])

    if (external) {
        return (
            <a href={to} onClick={onClick}>
                <Button {...props} />
            </a>
        )
    }

    return (
        <Link to={to} onClick={onClick}>
            <Button {...props} />
        </Link>
    )
}
