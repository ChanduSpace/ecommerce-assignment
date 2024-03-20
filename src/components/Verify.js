import { useState } from "react";
import credentials from "../utils/credentails.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const buildOTP = (newDigit) => {
    let existingDigits;
    if (otp.length > 0) {
      existingDigits = otp.toString();
    } else {
      existingDigits = "";
    }
    const newDigitGiven = newDigit.toString();

    setOtp(existingDigits + newDigitGiven);
  };

  const verifyOtp = (e) => {
    e.preventDefault();

    console.log(otp, "--otp in be");

    if (otp === credentials.otp) {
      toast.success("Logged in successfully");
      navigate("/interested");
    } else {
      toast.error("Invalid otp please retry");
      setOtp("");
    }
  };

  console.log(otp, "--otp");
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col p-5 border-2 mt-7 w-1/3 rounded-xl items-center">
        <h1 className="text-xl font-bold">Verify your email</h1>
        <h5 className="text-xs mt-3 font-medium text-center w-9/12">
          Enter the 8 digit code you have received on swa***@gmail.com
        </h5>
        <form className="w-4/5 mt-4">
          <label for="name" className="font-medium text-sm ">
            Code{" "}
          </label>
          <br />
          <div className="flex justify-between">
            <input
              class="border-2 w-9 h-9 rounded-md"
              required
              onChange={(e) => buildOTP(e.target.value)}
            />
            <input
              class="border-2 w-9 h-9 rounded-md"
              required
              onChange={(e) => buildOTP(e.target.value)}
            />
            <input
              class="border-2 w-9 h-9 rounded-md"
              required
              onChange={(e) => buildOTP(e.target.value)}
            />
            <input
              class="border-2 w-9 h-9 rounded-md"
              required
              onChange={(e) => buildOTP(e.target.value)}
            />
            <input
              class="border-2 w-9 h-9 rounded-md"
              required
              onChange={(e) => buildOTP(e.target.value)}
            />
            <input
              class="border-2 w-9 h-9 rounded-md"
              required
              onChange={(e) => buildOTP(e.target.value)}
            />
          </div>
          <input
            className="h-10 mb-4 border-0 w-full mt-8 bg-black rounded text-white text-sm"
            type="submit"
            value="VERIFY"
            onClick={verifyOtp}
          ></input>
        </form>
      </div>
    </div>
  );
};
export default Verify;
