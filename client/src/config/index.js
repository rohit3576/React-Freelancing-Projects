// config/formControls.js

export const registerFormControls = [
  {
    name: "userName", // 🔁 FIXED: Match schema & backend ("userName" not "username")
    label: "User Name",
    placeholder: "Enter your username",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
    showToggle: true, // 👁️ Optional enhancement: to allow toggling visibility later
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Re-enter your password",
    componentType: "input",
    type: "password",
    showToggle: true, // 👁️ Optional enhancement
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
    showToggle: true, // 👁️ Optional
  },
];
