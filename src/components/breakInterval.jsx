import React from "react";
import haut from "/src/img/hauts.png";
import bas from "/src/img/bas.png";

function BreakInterval(props) {
    function decreaseCounter() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }

        props.increaseBreak();
    }
    return (
        <section id="break-time">
            <fieldset>
                <legend align="center">
                    <h4>Set break time</h4>
                </legend>
                <section className="interval-container">
                    <button
                        disabled={props.isPlay === true ? "disabled" : ""}
                        onClick={decreaseCounter}
                        title="Decrease minutes">
                        <img src={bas} alt="decrease" />
                    </button>
                    <p className="interval-length">{props.breakInterval}</p>
                    <button
                        disabled={props.isPlay === true ? "disabled" : ""}
                        onClick={increaseCounter}
                        title="Increase minutes">
                        <img src={haut} alt="increase" />
                    </button>
                </section>
            </fieldset>
        </section>
    );
}

export default BreakInterval;
