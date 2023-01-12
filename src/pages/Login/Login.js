import React from "react";

const Login = () => {
  return (
    <div className="min-h-full h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="container mx-auto center">
          <div className="mb-2">
            <div className="flex justify-center"></div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-700">
              Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
              If you want to register, please{" "}
              <a
                href
                to="#"
                className="font-medium text-blue-600 hover:text-orange-500"
              >
                signup
              </a>
            </p>
          </div>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <div className="my-5">
              <label htmlFor="email" className="sr-only">
                Enter your email address:
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border"
                type="email"
                id="email"
                size="30"
                required
                placeholder="Email address"
                onChange={(e) => console.log("email", e.target.value)}
              />
            </div>
            <div className="my-5">
              <label htmlFor="password" className="sr-only">
                Enter your password address:
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border"
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
                onChange={(e) => console.log("password", e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberme"
                name="rememberme"
                value="remember"
                className="h-4 w-4 text-blue-600 m-2"
              />
              <label for="rememberme">Remember me?</label>
            </div>

            <a
              href
              to="#"
              className="font-medium text-blue-600 hover:text-orange-500"
            >
              Forgotten the password?
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-orange-600 mt-10"
              onSubmit={() => console.log("form submitter")}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
