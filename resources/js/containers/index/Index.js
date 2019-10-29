import React, {Component, Fragment} from 'react'
import {IndexTitle} from './IndexHeader/IndexTitle/IndexTitle'
import {IndexService} from './IndexHeader/IndexService/IndexService'
import './index.scss'

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <div className="IndexHeader">
                    <IndexTitle />
                    <IndexService />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
