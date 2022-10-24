import { Link, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStyles } from './useStyles'
export default function LinkButton(props) {
    const [isActive, setIsACtive] = React.useState(false)
    const classes = useStyles()

    const [className, setClassName] = React.useState(classes.navItemButton)
    const location = useLocation()

    const nave = useNavigate()
    const handleClick = () => {
        nave(props.link)
    }
    useEffect(() => {

        setIsACtive(location.pathname === "/" + props.link)

        isActive ? setClassName(classes.navItemButtonSelected) : setClassName(classes.navItemButton)
    }, [handleClick])

    return (
        <>
            <Link onClick={handleClick} component="button" underline='none' href={props.link} className={className}  >
                <Typography>
                    {props.name}
                </Typography>
            </Link>

        </>
    )
}
