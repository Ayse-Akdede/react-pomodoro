import React from "react";
import stops from "/src/img/stops.png";
import reset from "/src/img/reset.png";
import start from "/src/img/start.png";

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0,
            checked: false,
        };

        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId,
        });
    }
    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }
    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false,
                        });

                        this.props.toggleInterval(this.state.isSession);
                    } else {
                        this.setState({
                            isSession: true,
                        });

                        this.props.toggleInterval(this.state.isSession);
                    }
                } else {
                    this.props.UpdateTimerMinute();
                    this.setState({
                        timerSecond: 59,
                    });
                }

                break;
            default:
                this.setState(prevState => {
                    return {
                        timerSecond: prevState.timerSecond - 1,
                    };
                });
                break;
        }
    }

    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true,
        });
    }

    render() {
        return (
            <section id="timer-clock">
                <fieldset>
                    <legend align="center">
                        <h3>
                            {this.state.isSession === true ? "Work" : "Break"}
                        </h3>
                    </legend>
                    <section className="timer-container">
                        <span className="timer">{this.props.timerMinute}</span>
                        <span className="timer">:</span>
                        <span className="timer">
                            {this.state.timerSecond === 0
                                ? "00"
                                : this.state.timerSecond < 10
                                ? "0" + this.state.timerSecond
                                : this.state.timerSecond}
                        </span>
                    </section>
                    <section className="timer-actions">
                        <button onClick={this.playTimer} title="Start">
                            <img class="timer-logo" src={start} alt="" />
                        </button>
                        <button onClick={this.stopTimer} title="Stop">
                            <img class="timer-logo" src={stops} alt="" />
                        </button>
                        <button onClick={this.resetTimer} title="Reset">
                            <img class="timer-logo" src={reset} alt="" />
                        </button>
                    </section>
                </fieldset>
            </section>
        );
    }
}

export default Timer;
