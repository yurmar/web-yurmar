import React, {Component, Fragment} from 'react'
import {IndexTitle} from './IndexHeader/IndexTitle/IndexTitle'
import {IndexService} from './IndexHeader/IndexService/IndexService'
import './index.scss'
import 'font-awesome/css/font-awesome.min.css'

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <div className="IndexHeader" style={{backgroundImage: "url(../../images/bg-header.jpg)"}}>
                    <IndexTitle />
                    <div className="IndexService container">
                        <div className="row">
                            <IndexService />
                            <IndexService />
                            <IndexService />
                        </div>
                    </div>

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
