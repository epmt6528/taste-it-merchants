import React from 'react';

const HamburgerButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-line"></div>
        <div className="toggle-middle-line"></div>
        <div className="toggle-line"></div>
    </button>
)

export default HamburgerButton