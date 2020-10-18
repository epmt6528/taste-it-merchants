import React, {Component} from 'react'
// import {Link} from "react-router-dom";

class TeamCard extends Component {
    render() {
        return (
            <div className="team-card">
                <div className="team-card-image">
                    <img alt="Team Card"/>
                </div>
                <div className="team-card-name">
                    <h1>{this.props.about.name}</h1>
                </div>
                <div className="team-card-role">
                    <p>{this.props.about.role}</p>
                </div>
                <div className="aboutUs-card-social">
                    {/* <Link to={{ pathname: `${this.props.about.socialLink1}` }} target="_blank">
                        <img src={this.props.about.socialIcon1} alt="Social Links 1"/></Link>
                        <Link to={{ pathname: `${this.props.about.socailLink2}` }} target="_blank">
                            <img src={this.props.about.socialIcon2} alt="Social Links 2"/></Link> */}
                </div>
            </div>
        )
    }
}

export default TeamCard