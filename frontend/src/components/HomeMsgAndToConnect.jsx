import "../styles/homecomponent.css";

function HomeMsgAndToConnect() {
  return (
    <section>
      <div className="HomeMessage">
        <h1>Welcome to Sanrio Fan Club Page</h1>
        <p>
          Welcome to our Sanrio community! Here, you can chat and share posts
          about your favorite Sanrio characters. To maintain the quality of our
          community, each member can check and add up to 2 characters per month.
          Sign in now to unlock full access and become a Gold Member!
        </p>
      </div>
      <div className="register">
        <h2>Register</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          //   value={formData.email}
          //   onChange={handleChange}
          required
        />

        <label id="password" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          //   value={formData.password}
          //   onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </div>
    </section>
  );
}

export default HomeMsgAndToConnect;
