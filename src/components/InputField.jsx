import { useEffect, useState } from 'react';

const InputField = () => {
  const [showMessage, SetshowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SetshowMessage(true);
    }, 2000);
  }, []);

  return (
    <div>
      <h3>Sign up</h3>
      <div title="mixer"></div>
      <img src="https://www.google.com" alt="google" />
      <label htmlFor="login">Login</label>
      <input type="text" id="login" placeholder="user login" />
      <label>
        Password
        <input type="password" id="password" placeholder="password" />
      </label>
      <br />
      {showMessage && <div data-testid='message'>this is message</div>}
      <br />
      <button>Submit</button>
    </div>
  );
};

export default InputField;
