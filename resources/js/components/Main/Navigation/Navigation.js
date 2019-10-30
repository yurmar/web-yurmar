import React, {Fragment} from 'react'
import './Navigation.scss'

const Navigation = props => {
    const cls = [
        'd-block',
        'd-sm-block',
        'd-md-none',
        'NavigationMobile',
        'fa'
    ]

    if (props.isOpen) {
        cls.push('fa-times')
        cls.push('open')
    } else {
        cls.push('fa-bars')
    }

    return (
        <Fragment>
            <i
                className={cls.join(' ')}
                onClick={props.onToggle}
            />

            <nav className="Navigation text-center d-none d-md-block">
                <ul>
                    <li className="active" ><a href="#">Главная</a></li>
                    <li><a href="#">Портфолио</a></li>
                    <li><a href="#">3D</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </Fragment>

    )
}

export default Navigation
