import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
  }

  componentDidMount() {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    if (options) {
      this.setState(() => ({ options }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;
    if (prevState.options.length !== options.length) {
      const json = JSON.stringify(options);
      localStorage.setItem('options', json);
    }
  }

  handlePick() {
    const { options } = this.state;
    const index = Math.floor(Math.random() * options.length);
    alert(options[index]);
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteSingleOption(option) {
    this.setState(prevState => ({
      options: prevState.options.filter(x => x !== option),
    }));
  }

  handleAddOption(option) {
    const { options } = this.state;

    if (!option) {
      return 'Enter a valid option';
    }
    if (options.includes(option)) {
      return 'Option already exists!';
    }
    this.setState(prevState => ({
      options: [...prevState.options, option],
    }));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    const { options } = this.state;
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action options={options} handlePick={this.handlePick} />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingleOption={this.handleDeleteSingleOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
