import React from 'react';
import Option from './Option';

const Options = (props) => {
  const { handleDeleteOptions, options, handleDeleteSingleOption } = props;
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options:</h3>
        <button type="button" onClick={handleDeleteOptions} className="button button--link">
          Remove All
        </button>
      </div>
      {options.length === 0 && <p className="widget__message">No options yet, add an option</p>}

      <ol>
        {options.map((option, i) => (
          <Option
            option={option}
            key={i}
            id={i}
            handleDeleteSingleOption={handleDeleteSingleOption}
          />
        ))}
      </ol>
    </div>
  );
};

export default Options;
