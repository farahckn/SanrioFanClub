function SignUp() {
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     username: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Ajoutez ici la logique pour soumettre les données du formulaire
  //     console.log(formData);
  //   };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          //   value={formData.email}
          //   onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          //   value={formData.username}
          //   onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          //   value={formData.password}
          //   onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmed your password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          //   value={formData.confirmPassword}
          //   onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
