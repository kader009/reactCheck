const InputField = () => {
  return (
    <div>
      <h3>Sign up</h3>
      <label>
        Login
        <input type="text" id="login"/>
      </label>
      <label>
        Password
        <input type="password" id="password"/>
      </label>
      <br />
      <button>Submit</button>
    </div>
  );
};

export default InputField;
