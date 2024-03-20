import { useState } from "react";
import credentails from "../utils/credentails.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    if (email !== credentails.email && password !== credentails.password) {
      toast.error("Invalid credentials");
    } else {
      toast.success("Please enter otp");
      navigate("/verify");
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col p-5 border-2 mt-7 w-1/3 rounded-xl items-center">
        <h1 className="text-xl font-bold">Login</h1>
        <h3 className="font-semibold mt-2 text-base">
          Welcome Back to ECOMMERCE
        </h3>
        <h5 className="text-xs mt-1 font-medium">
          The next gen business marketplace
        </h5>
        <form className="w-4/5 mt-4 border-b-2">
          <label for="name" className="font-medium text-xs">
            Email
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 rounded w-full h-8 mb-4 font-normal text-xs p-2"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label for="name" className="font-medium text-xs">
            Password
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 rounded w-full h-8 mb-4 font-normal text-xs p-2"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            className="h-10 mb-4 border-0 w-full mt-4 bg-black rounded text-white"
            type="submit"
            value="Login"
            onClick={login}
          ></input>
        </form>
        <div className="flex items-center mt-3 gap-1">
          <h4 className="font-normal text-xs">Don't have an Account?</h4>
          <h4 className="text-xs font-medium">SIGN UP</h4>
        </div>
      </div>
    </div>
  );
};
export default Login;
