import React from 'react';

const Action = (props) => {
  const { options, handlePick } = props;
  return (
    <div>
      <button
        className="big-button"
        type="button"
        disabled={options.length === 0}
        onClick={handlePick}
      >
        What To Do?
      </button>
    </div>
  );
};

export default Action;
