import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-green-50 font-sans">
      {/* Left Panel – Welcome / Branding */}
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-green-100 px-10">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-3xl font-semibold text-green-800">
            Welcome to <span className="text-green-600">ECommerce</span>
          </h1>
          <p className="text-green-700 text-base">
            Simple finds. Handmade feels. Shop your way.
          </p>
        </div>
      </div>

      {/* Right Panel – Form Area */}
      <div className="flex flex-1 items-center justify-center bg-white px-6 py-10 sm:px-8">
        <div className="w-full max-w-md space-y-6 border border-green-100 bg-green-50 p-8 rounded-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
