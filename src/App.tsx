import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`hello! ${value}`);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="username"
        value={value}
        onChange={onChange}
      />
      <button>LOGIN</button>
    </form>
  );
};

export default App;
