import { useState } from "react";
import { firebaseApp } from "../api/firebase";

const onSumbit = (email, password) => {
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
};

export function SignUpPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <div>
      <h1>SignUpPage</h1>
      <input
        placeholder="email"
        data-name="email"
        onChange={handleChangeForm}
      />
      <input
        placeholder="password"
        data-name="password"
        onChange={handleChangeForm}
      />
      <button onClick={() => onSumbit(form.email, form.password)}>
        SignUp
      </button>
    </div>
  );
}
