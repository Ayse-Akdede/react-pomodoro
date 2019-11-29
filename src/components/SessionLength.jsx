import React from "react";
import hauts from "/src/img/hauts.png";
import bas from "/src/img/bas.png";

function SessionLength(props) {
    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }
    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }

    return (
        <section id="session-time">
            <fieldset>
                <legend align="center">
                    <h4>Set work time</h4>
                </legend>
                <section className="interval-container">
                    <button
                        disabled={props.isPlay === true ? "disabled" : ""}
                        onClick={decreaseSession}
                        title="Decrease minutes">
                        <img src={bas} alt="decrease" />
                    </button>
                    <p className="interval-length">{props.sessionLength}</p>
                    <button
                        disabled={props.isPlay === true ? "disabled" : ""}
                        onClick={increaseSession}
                        title="Increase minutes">
                        <img src={hauts} alt="increase" />
                    </button>
                </section>
            </fieldset>
        </section>
    );
}

export default SessionLength;
