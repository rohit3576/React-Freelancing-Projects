import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/auth-slice";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    const { userName, email, password, confirmPassword } = formData;

    // 1. Check if all fields are filled
    if (!userName || !email || !password || !confirmPassword) {
      toast({
        title: "All fields are required",
        variant: "destructive",
      });
      return;
    }

    // 2. Check if passwords match
    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please re-enter the same password.",
        variant: "destructive",
      });
      return;
    }

    // 3. Proceed to dispatch if validation passed
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data.payload.message || "Registered successfully",
        });
        setFormData(initialState);
        setTimeout(() => navigate("/auth/login"), 1000);
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-green-100 shadow-xl rounded-2xl px-8 py-10 animate-fade-up transition-all duration-700">
        {/* Heading */}
        <div className="text-center transition-opacity duration-700 delay-150 opacity-0 animate-fade-in">
          <h1 className="text-4xl font-bold text-green-900 tracking-tight">
            Create Your DIY Account
          </h1>
          <p className="mt-2 text-sm text-green-700">
            Already a member?{" "}
            <Link
              className="font-semibold text-emerald-600 hover:text-emerald-800 hover:underline"
              to="/auth/login"
            >
              Login here
            </Link>
          </p>
        </div>

        {/* Form */}
        <div className="mt-6 transition-opacity duration-700 delay-300 opacity-0 animate-fade-in">
          <CommonForm
            formControls={registerFormControls}
            buttonText="Sign Up"
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />
        </div>

        {/* Terms */}
        <p className="text-center text-xs text-green-600 mt-6 transition-opacity duration-700 delay-500 opacity-0 animate-fade-in">
          By joining, you agree to our{" "}
          <a
            href="#"
            className="text-emerald-500 hover:underline hover:text-emerald-700"
          >
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
  );
}

export default AuthRegister;
