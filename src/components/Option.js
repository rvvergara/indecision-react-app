import React from 'react';

const Option = (props) => {
  const { id, handleDeleteSingleOption, option } = props;
  return (
    <li id={id} className="option">
      <p className="option__text">
        {id}
        .&nbsp;
        {option}
      </p>
      <button
        type="button"
        onClick={e => handleDeleteSingleOption(option)}
        className="button button--link"
      >
        Remove
      </button>
    </li>
  );
};

export default Option;
