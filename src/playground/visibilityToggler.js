class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayStatus: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggler</h1>
        <button onClick={this.handleClick}>
          {this.state.displayStatus ? "Hide details" : "Show Details"}
        </button>
        <p style={{ display: this.state.displayStatus ? "block" : "none" }}>
          This is a detail you can now see!
        </p>
      </div>
    );
  }
  handleClick() {
    this.setState(prevState => ({
      displayStatus: !prevState.displayStatus
    }));
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));
