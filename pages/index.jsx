import { useState } from 'react';

export default () => {
  const initialData = [];
  const [data, setData] = useState(initialData);

  const handleClick = () => {
    const text = document.querySelector('#noteinput').value.trim();
    // TODO
  };

  return (
    <>
      <div>
      <button onClick={() => { void(0); }}>All</button>
      <button onClick={() => { void(0); }}>Active</button>
      <button onClick={() => { void(0); }}>Completed</button>
      </div>
      <div>
        <input id="noteinput" style={{ width: '40%' }} type="text" placeholder="Enter a new note" />
        <input id="statusinput" style={{ width: '40%' }} type="text" placeholder="status" />
        <button onClick={() => { void(0); }}>Add note</button>
        <div>
          {/* notes list */}
        </div>
      </div>
    </>
  );
};
 