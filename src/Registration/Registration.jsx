import "./Register.css";

const Registration = () => {
  return (
    <div>
      <div id="container">
        <header>Register new account</header>
        <form method="post">
          <fieldset />
          <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            autofocus
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <br />
          <input
            type="text"
            name="photo"
            id="photo"
            placeholder="Photo URL"
            required
          />
          <br /> <br /> <br />
          <label for="submit"></label>
          <input type="submit" name="submit" id="submit" value="REGISTER" />
        </form>
      </div>
    </div>
  );
};

export default Registration;
