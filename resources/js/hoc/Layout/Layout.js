import React, {Component} from 'react'
import Header from '../../components/Main/Header/Header'
import Footer from '../../components/Main/Footer/Footer'
import Navigatiion from '../../components/Main/Navigation/Navigation'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header />
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
