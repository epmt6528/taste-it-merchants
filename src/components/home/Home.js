import React, {Component} from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import TeamCard from './TeamCard'


class Home extends Component {

    render() {
        return (
            <div className = "site-home">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default Home