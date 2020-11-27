import React, {Component} from 'react'
// import {Link} from "react-router-dom";
import LinkedIn from '../../assets/img/icons/linkedin.svg'
import Github from '../../assets/img/icons/gitHub.svg'
import Behance from '../../assets/img/icons/behance.svg'

class TeamCard extends Component {
    render() {
        return (
            <div className="team-card">
                {/* Member Image */}
                <picture>
                    <source srcSet={this.props.about.imgWebPUrl} type="image/webp" />
                    <img src={this.props.about.imgUrl} alt="{this.props.about.name}" className="team-card__face"/>
                </picture>

                {/* Name */}
                <div className="team-card-name">
                    <h1>{this.props.about.name}</h1>
                </div>

                {/* Role */}
                <div className="team-card-role">
                    <p>{this.props.about.role}</p>
                </div>

                {/* Social Links */}
                <ul>
                    {this.props.about.linkedIn ? <li><a href={this.props.about.linkedIn}　target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="linkedIn Link"/></a></li> : ''}
                    {this.props.about.github ? <li><a href={this.props.about.github}　target="_blank" rel="noopener noreferrer"><img src={Github} alt="githubLink"/></a></li> : ''}
                    {this.props.about.behance ? <li><a href={this.props.about.behance}　target="_blank" rel="noopener noreferrer"><img src={Behance} alt="behance Link"/></a></li> : ''}
                </ul>
            </div>
        )
    }
}

export default TeamCard