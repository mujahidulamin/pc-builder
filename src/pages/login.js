import RootLayout from "@/components/Layout/RootLayout";
import { signIn } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";

const Login = () => {


  const router = useRouter()

  const {callbackUrl} = router.query
  
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-md w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <div className="space-y-4">
            <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: callbackUrl || "http://localhost:3000"
                })
              }
              className="flex items-center justify-center bg-red-600 text-white rounded-md p-2 w-full"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Google Icon SVG */}
              </svg>
              Sign in with Google
            </button>

            <button
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/",
                })
              }
              className="flex items-center justify-center bg-gray-800 text-white rounded-md p-2 w-full"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* GitHub Icon SVG */}
              </svg>
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
