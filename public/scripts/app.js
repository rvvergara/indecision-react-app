'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
  _inherits(Indecision, _React$Component);

  function Indecision(props) {
    _classCallCheck(this, Indecision);

    var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

    _this.state = {
      options: props.options
    };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleDeleteSingleOption = _this.handleDeleteSingleOption.bind(_this);
    return _this;
  }

  _createClass(Indecision, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var json = localStorage.getItem('options');
      var options = JSON.parse(json);
      if (options) {
        this.setState(function () {
          return { options: options };
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var index = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[index]);
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleDeleteSingleOption',
    value: function handleDeleteSingleOption(option) {
      var index = this.state.options.indexOf(option);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (x) {
            return x !== option;
          })
        };
      });
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter a valid option';
      } else if (this.state.options.includes(option)) {
        return 'Option already exists!';
      }
      this.setState(function (prevState) {
        return {
          options: [].concat(_toConsumableArray(prevState.options), [option])
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = 'Put your life in the hands of a computer';
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { options: this.state.options, handlePick: this.handlePick }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteSingleOption: this.handleDeleteSingleOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return Indecision;
}(React.Component);

Indecision.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    'header',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { disabled: props.options.length === 0, onClick: props.handlePick },
      'What To Do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'No options yet, add an option'
    ),
    React.createElement(
      'ol',
      null,
      props.options.map(function (option, i) {
        return React.createElement(Option, {
          option: option,
          key: i,
          id: i,
          handleDeleteSingleOption: props.handleDeleteSingleOption
        });
      })
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'li',
    { id: props.id },
    props.option,
    React.createElement(
      'button',
      { onClick: function onClick(e) {
          return props.handleDeleteSingleOption(props.option);
        } },
      'X'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option', id: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return { error: error };
      });
      if (!error) e.target.reset();
    }
  }]);

  return AddOption;
}(React.Component);

// const User = props => (
//   <div>
//     <p>Name: {props.name} </p>
//     <p>Age: {props.age}</p>
//   </div>
// );
// <User name="Ryan" age="26" />

ReactDOM.render(React.createElement(Indecision, null), document.getElementById('app'));
