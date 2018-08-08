import React, { Component } from 'react'
 
class Clock extends Component{
    render() {
        return (
            <div className="clock">
                <div className="clock__days">
                    <label className="clock__title">days</label>
                    <label className="clock__amount">20</label>
                </div>
                <div className="clock__hours">
                    <label className="clock__title">hours</label>
                    <label className="clock__amount">20</label>
                </div>
                <div className="clock__minutes">
                    <label className="clock__title">minutes</label>
                    <label className="clock__amount">20</label>
                </div>
                <div className="clock__seconds">
                    <label className="clock__title">seconds</label>
                    <label className="clock__amount">20</label>
                </div>
            </div>
        )
    }
}

export default Clock;