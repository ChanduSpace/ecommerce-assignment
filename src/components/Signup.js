import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col p-5 border-2 mt-7 w-1/3 rounded-xl items-center">
        <h1 className="text-xl font-bold">Create your account</h1>
        <form className="w-4/5 mt-4">
          <label for="name" className="font-medium text-xs">
            Name
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 rounded w-full h-8 mb-4 font-normal text-xs p-2"
            placeholder="Enter"
          ></input>
          <label for="name" className="font-medium text-xs">
            Email
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 rounded w-full h-8 mb-4 font-normal text-xs p-2"
            placeholder="Enter"
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
            placeholder="Enter"
          ></input>
          <input
            className="h-10 mb-4 border-0 w-full mt-4 bg-black rounded text-white"
            type="submit"
            value="Submit"
          ></input>
        </form>
        <div className="flex items-center mt-3 gap-1">
          <h4 className="font-normal text-xs">Have an Account?</h4>
          <Link to="/login">LOGIN</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
