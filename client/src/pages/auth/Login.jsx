import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    const { email, password } = formData;

    // ✅ Validation
    if (!email || !password) {
      toast({
        title: "All fields are required",
        variant: "destructive",
      });
      return;
    }

    dispatch(loginUser(formData)).then((data) => {
      const { success, message, user } = data?.payload || {};

      if (success) {
        toast({
          title: message || "Login successful",
        });

        // ✅ Role-based redirect
        setTimeout(() => {
          if (user?.role === "admin") {
            navigate("/admin/dashboard", { replace: true });
          } else {
            navigate("/shopping/home", { replace: true });
          }
        }, 800);
      } else {
        toast({
          title: message || "Invalid credentials",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-yellow-50 via-lime-50 to-stone-100 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl border border-yellow-100 shadow-xl rounded-2xl px-8 py-10 animate-fade-up transition-all duration-700">
        {/* Heading */}
        <div className="text-center transition-opacity duration-700 delay-150 opacity-0 animate-fade-in">
          <h1 className="text-4xl font-extrabold text-stone-800 tracking-tight">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/auth/register"
              className="font-semibold text-lime-600 hover:text-lime-800 hover:underline transition-colors"
            >
              Register
            </Link>
          </p>
        </div>

        {/* Form */}
        <div className="mt-6 transition-opacity duration-700 delay-300 opacity-0 animate-fade-in">
          <CommonForm
            formControls={loginFormControls}
            buttonText="Sign In"
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />
        </div>

        {/* Terms */}
        <p className="text-center text-xs text-stone-500 mt-6 transition-opacity duration-700 delay-500 opacity-0 animate-fade-in">
          By signing in, you agree to our{" "}
          <a
            href="#"
            className="text-lime-600 hover:underline hover:text-lime-800"
          >
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
  );
}

export default AuthLogin;
