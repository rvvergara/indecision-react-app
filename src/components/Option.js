import React from 'react';

const Option = (props) => {
  const { id, handleDeleteSingleOption, option } = props;
  return (
    <li id={id}>
      {option}
      <button type="button" onClick={e => handleDeleteSingleOption(option)}>
        X
      </button>
    </li>
  );
};

export default Option;
