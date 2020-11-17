import React, {Component} from 'react'
// import {Link} from "react-router-dom";
import LinkedIn from '../../img/icons/linkedin.svg'
import Github from '../../img/icons/gitHub.svg'
import Behance from '../../img/icons/behance.svg'

class TeamCard extends Component {
    render() {
        return (
            <div className="team-card">

                <img src={this.props.about.imgUrl} alt="{this.props.about.name}" className="team-card__face"/>

                <div className="team-card-name">
                    <h1>{this.props.about.name}</h1>
                </div>
                <div className="team-card-role">
                    <p>{this.props.about.role}</p>
                </div>
                <ul>
                    {this.props.about.linkedIn ? <li><a href={this.props.about.linkedIn}　target="_blank"><img src={LinkedIn} alt="linkedIn Link"/></a></li> : ''}
                    {this.props.about.github ? <li><a href={this.props.about.github}　target="_blank"><img src={Github} alt="githubLink"/></a></li> : ''}
                    {this.props.about.behance ? <li><a href={this.props.about.behance}　target="_blank"><img src={Behance} alt="behance Link"/></a></li> : ''}
                </ul>
            </div>
        )
    }
}

export default TeamCard