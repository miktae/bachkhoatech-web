import React from 'react'

function Toggle(props) {
    return (
        <div className="toggle">
            <div className="switch-holder">
                <div className="d-flex align-items-center justify-content-around switch-label">
                    <span>{props.name}</span>
                    <i style={{
                        width: '48px',
                        height: '48px',
                    }}
                        className={props.icon}></i>
                </div>
                <div className="switch-toggle">
                    <input type="checkbox" id={props.name} />
                    <label htmlFor={props.name}></label>
                </div>
            </div>
        </div>
    )
}

export default Toggle