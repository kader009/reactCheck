const InputField = () => {
  return (
    <div>
      <h3>Sign up</h3>
      <label>
        Login
      </label>
        <input type="text" id="login" placeholder="user login"/>
      <label>
        Password
        <input type="password" id="password" placeholder="password"/>
      </label>
      <br />
      <button>Submit</button>
    </div>
  );
};

export default InputField;
