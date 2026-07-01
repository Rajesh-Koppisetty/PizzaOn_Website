import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "./assets/login.jpg";

function SignIn() {
  const navigate = useNavigate();   // ✅ correct hook place

  const [login, setLogin] = useState(true);

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!user.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Invalid email";
    }

    if (!user.password) {
      newErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (!login) {
      if (!user.name) {
        newErrors.name = "Name is required";
      }

      if (!user.number) {
        newErrors.number = "Mobile required";
      } else if (!/^\d{10}$/.test(user.number)) {
        newErrors.number = "Enter valid 10 digit mobile";
      }

      if (!user.confirmpassword) {
        newErrors.confirmpassword = "Confirm password required";
      } else if (user.password !== user.confirmpassword) {
        newErrors.confirmpassword = "Passwords not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const url = login
      ? "http://localhost:8080/PizzaOn/login"
      : "http://localhost:8080/PizzaOn/register";

    const payload = login
      ? {
          email: user.email,
          password: user.password,
        }
      : {
          name: user.name,
          email: user.email,
          number: user.number,
          password: user.password,
        };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (login) {
          if (data) {
            alert("Login Successful");
            navigate("/home");   // ✅ redirect
          } else {
            alert("Invalid Credentials");
          }
        } else {
          alert("Registration Successful");
          setLogin(true);
        }

        setUser({
          name: "",
          email: "",
          number: "",
          password: "",
          confirmpassword: "",
        });
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="w-50 border rounded p-5 bg-light">
          <h2 className="text-center">
            {login ? "Login Form" : "Registration Form"}
          </h2>

          <form onSubmit={handleSubmit}>
            {!login && (
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.name}</small>
              </div>
            )}

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <small className="text-danger">{errors.email}</small>
            </div>

            {!login && (
              <div className="mb-3">
                <label>Mobile</label>
                <input
                  type="tel"
                  className="form-control"
                  name="number"
                  value={user.number}
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.number}</small>
              </div>
            )}

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <small className="text-danger">{errors.password}</small>
            </div>

            {!login && (
              <div className="mb-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmpassword"
                  value={user.confirmpassword}
                  onChange={handleChange}
                />
                <small className="text-danger">
                  {errors.confirmpassword}
                </small>
              </div>
            )}

            <button className="btn btn-primary w-100">
              {login ? "Login" : "Register"}
            </button>
          </form>

          <p
            className="text-center mt-3 text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setLogin(!login)}
          >
            {login
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;