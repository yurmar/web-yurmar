import React, {Component} from 'react'
import Topline from '../../components/Main/Topline/Topline'
import Footer from '../../components/Main/Footer/Footer'
import Navigatiion from '../../components/Main/Navigation/Navigation'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <header>
                    <Topline />
                    <Navigatiion />
                </header>

                <main>
                    { this.props.children }
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        )
    }
}
