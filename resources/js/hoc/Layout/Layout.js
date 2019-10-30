import React, {Component} from 'react'
import Topline from '../../components/Main/Topline/Topline'
import Footer from '../../components/Main/Footer/Footer'
import Navigation from '../../components/Main/Navigation/Navigation'
import NavigationMobile from '../../components/Main/Navigation/NavigationMobile'

export default class Layout extends Component {
    state = {
        menu: false
    }

    navigationMobileHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    navigationMobileCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div>
                <header>
                    <Topline />
                    <NavigationMobile
                        isOpen={this.state.menu}
                        onClose={this.navigationMobileCloseHandler}
                    />
                    <Navigation
                        onToggle={this.navigationMobileHandler}
                        isOpen={this.state.menu}
                    />
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
