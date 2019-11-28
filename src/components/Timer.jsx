import React from "react";
import Switch from "react-switch";

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
        this.state({
            text: "Start",
        });
    }
    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
        this.setState({
            text: "Stop",
        });
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
            <section>
                <section className="timer-container">
                    <h4>{this.state.isSession === true ? "Work" : "Break"}</h4>
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
                    <button onClick={this.playTimer}>Start</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <button onClick={this.resetTimer}>Restart</button>
                </section>
            </section>
        );
    }
}

export default Timer;
