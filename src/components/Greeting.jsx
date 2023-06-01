import { useState } from 'react';
import Output from './Output';
import Async from './Async';

const Greeting = () => {
  const [textChanged, setTextChanged] = useState(false);

  return (
    <div>
      <h2>Hello World!</h2>
      {/* <p>It's good to see you</p> */}
      {!textChanged && <Output>It's good to see you.</Output>}
      {textChanged && <Output>Text Changed!</Output>}
      <button
        onClick={() => {
          setTextChanged(!textChanged);
        }}
      >
        Change Text!
      </button>
      <Async />
    </div>
  );
};

export default Greeting;
