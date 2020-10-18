import React, {Component} from 'react'

class Footer extends Component{
    render(){
        return (
            <footer className="site-footer">
                {/* <div onClick={refreshPage} className="site-logo">
                <Link to="/"><img src={LogoImage} alt="Logo"/></Link>
                </div> */}
                
                <div className ="footer-content1">
                    <img alt="Logo"/>
                </div>
                <div className ="footer-content2">
                    <h2>About Us</h2>
                    <p>Taste It is an online food delivery platform that provides
you with new food experiences through mystery dishes
that are tailored to suit your preferences.</p>
                </div>
                <div className ="footer-content3">
                    <ul className ="content3-list">
                        <li><h2>Design Assets</h2></li>
                        <li>Marketing Materials</li>
                        <li>Promotional Videos</li>
                        <li>Project Proposal</li>
                    </ul>
                </div>
                <div className ="footer-content4">
                <ul className ="content4-list">
                        <li><h2>Development Assets</h2></li>
                        <li>Tech Stacks</li>
                        <li>GitHub Repository</li>
                    </ul>
                </div>
                <hr/>
                <div className ="footer-content5">
                    <div className = "content5-text1"><p>Made with love remotely from Vancouver, BC.</p></div>
                    <div className = "content5-text2"><p>© 2020 Taste It. All rights reserved.</p></div>
                </div>
            </footer>
        )
    }

}
export default Footer