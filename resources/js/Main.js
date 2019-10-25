import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Index from './containers/index'

export default class Main extends Component {
    render() {
        return (
            <Layout>
                <Index />
            </Layout>
        )
    }
}
