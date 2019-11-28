import React from "react";
import "../scss/app.scss";
import BreakInterval from "./breakInterval";
import SessionLength from "./SessionLength";
import Timer from "./Timer";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,
            isPlay: false,
        };

        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
        this.onToggleInterval = this.onToggleInterval.bind(this);
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
        this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
        this.onResetTimer = this.onResetTimer.bind(this);
    }

    onIncreaseBreakLength() {
        this.setState(prevState => {
            return {
                breakLength: prevState.breakLength + 1,
            };
        });
    }

    onDecreaseBreakLength() {
        this.setState(prevState => {
            return {
                breakLength: prevState.breakLength - 1,
            };
        });
    }

    onIncreaseSessionLength() {
        this.setState(prevState => {
            return {
                sessionLength: prevState.sessionLength + 1,
                timerMinute: prevState.sessionLength + 1,
            };
        });
    }
    onDecreaseSessionLength() {
        this.setState(prevState => {
            return {
                sessionLength: prevState.sessionLength - 1,
                timerMinute: prevState.sessionLength - 1,
            };
        });
    }

    onUpdateTimerMinute() {
        this.setState(prevState => {
            return {
                timerMinute: prevState.timerMinute - 1,
            };
        });
    }

    onToggleInterval(isSession) {
        if (isSession) {
            this.setState({
                timerMinute: this.state.sessionLength,
            });
        } else {
            this.setState({
                timerMinute: this.state.breakLength,
            });
        }
    }
    onResetTimer() {
        this.setState({
            timerMinute: this.state.sessionLength,
        });
    }

    onPlayStopTimer(isPlay) {
        this.setState({
            isPlay: isPlay,
        });
    }

    render() {
        return (
            <main>
                <h2>My First Pomodoro</h2>
                <Timer
                    timerMinute={this.state.timerMinute}
                    breakLength={this.state.breakLength}
                    UpdateTimerMinute={this.onUpdateTimerMinute}
                    toggleInterval={this.onToggleInterval}
                    resetTimer={this.onResetTimer}
                    onPlayStopTimer={this.onPlayStopTimer}
                />
                <section className="interval-length-container">
                    <BreakInterval
                        isPlay={this.state.isPlay}
                        breakInterval={this.state.breakLength}
                        increaseBreak={this.onIncreaseBreakLength}
                        decreaseBreak={this.onDecreaseBreakLength}
                    />
                    <SessionLength
                        isPlay={this.state.isPlay}
                        sessionLength={this.state.sessionLength}
                        increaseSession={this.onIncreaseSessionLength}
                        decreaseSession={this.onDecreaseSessionLength}
                    />
                </section>
            </main>
        );
    }
}

export default App;
