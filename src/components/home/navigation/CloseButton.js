import React from 'react'

const CloseButton = props => (
    <button className="close-button" onClick={props.click}>
        <div className="close-button-first-line"></div>
        <div className="close-button-second-line"></div>
    </button>
)

export default CloseButton