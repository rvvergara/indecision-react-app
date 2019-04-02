import React from 'react';
import Option from './Option';

const Options = (props) => {
  const { handleDeleteOptions, options, handleDeleteSingleOption } = props;
  return (
    <div>
      <button type="button" onClick={handleDeleteOptions}>
        Remove All
      </button>
      {options.length === 0 && <p>No options yet, add an option</p>}

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
