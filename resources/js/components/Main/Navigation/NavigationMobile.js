import React, {Component, Fragment} from 'react'
import './Navigation.scss'
import {Backdrop} from '../../UI/Backdrop/Backdrop'

const links = [1,2,3,4]

export default class NavigationMobile extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href="">Link {link}</a>
                </li>
            )
        })
    }

    render() {
        const cls = [
            'NavigationMenu'
        ]

        if (!this.props.isOpen) {
            cls.push('close')
        }

        return (
            <Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
            </Fragment>
        )
    }
}
