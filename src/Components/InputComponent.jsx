import React from "react";

const TextInput = (props) => {
  const { onChange, onBlur, value, error, success, ...otherProps } = props;

  return (
    <div className={'mb-2 w-[265px]'}>
      <input
        {...otherProps}
        className={`p-[10px] border-2 border-solid rounded-md border-${error ? "red" : success ? "green" : "lightblue"}
        outline-none w-full`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <span  className="text-red">{error}</span>}
      {success && <span className="text-green">Success!</span>}
    </div>
  );
};

export default TextInput;