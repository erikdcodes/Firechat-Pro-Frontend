import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import AppLayout from "../Layouts/AppLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();
  const history = useHistory();

  const loginWithFirebase = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setError("");
        history.push("/inbox");
      })
      .catch((err) => setError(err));
  };

  return (
    <AppLayout>
      <Wrapper>
        <div className="form-wrapper">
          {error && (
            <p style={{ color: "red", marginBottom: "15px" }}>
              Error: {error.code}
            </p>
          )}
          <form
            onSubmit={(e) => loginWithFirebase(e)}
            onChange={() => setError("")}
          >
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="blue" type="submit">
              Login
            </button>
          </form>
        </div>
      </Wrapper>
    </AppLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .form-wrapper {
    max-width: 500px;
    padding: 50px;
    margin-top: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export default Login;
