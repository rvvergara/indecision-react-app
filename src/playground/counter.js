class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const count = Number(localStorage['count']);
    if (!isNaN(count)) this.setState(() => ({ count }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
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

ReactDOM.render(<Counter />, document.getElementById('app'));
