import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  return (
    <form>
      <Input
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={() => {}}
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        onChange={() => {}}
      />
    </form>
  );
};
export default Login;
