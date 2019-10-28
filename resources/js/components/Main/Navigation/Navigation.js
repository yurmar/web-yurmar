import React, {Fragment} from 'react'
import './Navigatiion.scss'

const Navigatiion = () => {
    return (
        <Fragment>
            <nav className="Navigation text-center">
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

export default Navigatiion
