import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/c741e848-5f1b-4230-8400-909aa0a4ac80/US-en-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
          <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold">Sign In</h1>
                {error ? (
                  <p className="p-2 bg-red-600 mt-3.5">
                    {error}
                  </p>
                ) : null}
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col py-4"
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rounded "
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rounded "
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <button className="bg-red-600 py-3 my-6 rounded font-bold">
                    Sign In
                  </button>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p>
                      <input className="mr-2" type="checkbox" />
                      Remeber Me
                    </p>
                    <p>Need Help?</p>
                  </div>
                  <p className="py-8">
                    <span className="text-gray-600 mr-2">
                      Subscribed to Netflix?
                    </span>
                    {""}
                    <Link to="/signup" className="underline hover:font-bold">
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
