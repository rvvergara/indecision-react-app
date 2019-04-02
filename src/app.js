class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }
  handlePick() {
    const index = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[index]);
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid option';
    } else if (this.state.options.includes(option)) {
      return 'Option already exists!';
    }
    this.setState(prevState => ({
      options: [...prevState.options, option]
    }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action options={this.state.options} handlePick={this.handlePick} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

Indecision.defaultProps = {
  options: []
};

const Header = props => (
  <header>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </header>
);

Header.defaultProps = {
  title: 'Indecision'
};

const Action = props => (
  <div>
    <button disabled={props.options.length === 0} onClick={props.handlePick}>
      What To Do?
    </button>
  </div>
);

const Options = props => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    <p>
      {props.options.length > 0 ? 'Here are your options' : 'No options yet'}
    </p>
    <ol>
      {props.options.map((option, i) => (
        <Option option={option} key={i} id={i} />
      ))}
    </ol>
  </div>
);

const Option = props => <li id={props.id}>{props.option}</li>;

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" id="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    e.target.reset();
  }
}

// const User = props => (
//   <div>
//     <p>Name: {props.name} </p>
//     <p>Age: {props.age}</p>
//   </div>
// );
// <User name="Ryan" age="26" />

ReactDOM.render(<Indecision />, document.getElementById('app'));