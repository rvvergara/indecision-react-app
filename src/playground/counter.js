class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSubtract}>-</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
  handleAdd() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  handleSubtract() {
    this.setState(prevState => {
      return prevState.count > 0
        ? { count: prevState.count - 1 }
        : { count: prevState.count };
    });
  }
  handleReset() {
    this.setState(() => ({ count: 0 }));
  }
}

Counter.defaultProps = {
  count: 0
};
ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));
