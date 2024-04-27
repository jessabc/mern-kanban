import React, { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const { loading, error, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700 w-2/3 md:w-1/2 lg:w-1/3">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>
          </div>

          <div class="mt-5">
            {/* <!-- Form --> */}
            <form onSubmit={handleSubmit}>
              <div class="grid gap-y-4">
                {/* <!-- Form Group --> */}
                <div>
                  <label for="email" class="block text-sm mb-2 dark:text-white">
                    Email address
                  </label>
                  <div class="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      class="py-3 px-4 block w-full text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 border-2 border-solid border-gray-300 rounded-sm  my-1 text-gray-900 pl-2 outline-none focus:border-indigo-500 mb-2"
                      required
                      aria-describedby="email-error"
                    />

                    <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        class="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="email-error">
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <div class="flex justify-between items-center">
                    <label
                      for="password"
                      class="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      name="password"
                      class="py-3 px-4 block w-full text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 border-2 border-solid border-gray-300 rounded-sm  my-1 text-gray-900 pl-2 outline-none focus:border-indigo-500 mb-2"
                      required
                      aria-describedby="password-error"
                    />
                    <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        class="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    class="hidden text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                <button
                  disabled={loading}
                  type="submit"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-indigo-500  text-gray-50 hover:bg-indigo-400 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Sign in
                </button>
              </div>
              {error && <p className="text-zinc-500">{error}</p>}
            </form>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </div>
    </div>
    // <div className="flex mt-10 justify-center  ">
    //   <form action="" onSubmit={handleSubmit} className="flex flex-col gap-1">
    //     <h3 className="text-center font-bold text-lg">Signup</h3>
    //     <label htmlFor="" className="">
    //       Email
    //     </label>
    //     <input
    //       type="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       className="bg-zinc-100 rounded-sm outline-1 outline-zinc-500 p-2"
    //     />

    //     <label htmlFor="">Password</label>
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       className="bg-zinc-100 rounded-sm outline-1 outline-zinc-500 p-2"
    //     />

    //     <button
    //       disabled={loading}
    //       className="font-bold bg-zinc-800 text-zinc-100 rounded-lg p-3 hover:bg-zinc-700 my-2"
    //     >
    //       Signup
    //     </button>

    //     {error && <p className="text-zinc-500">{error}</p>}
    //   </form>
    // </div>
  );
};

export default Signup;
