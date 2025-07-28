import { Button } from "@/components/ui/button";
import { AlignJustify, LogOut } from "lucide-react";

function AdminHeader({ setOpen, handleLogout }) {
  return (
    <header
      className="flex items-center justify-between px-6 py-4 
                 bg-gradient-to-r from-lime-100 via-emerald-100 to-green-50 
                 backdrop-blur-md border-b border-green-200 
                 shadow-md rounded-b-2xl animate-fade-down"
    >
      {/* Sidebar Toggle Button */}
      <Button
        onClick={() => setOpen(true)}
        className="lg:hidden sm:block bg-white/80 hover:bg-white 
                   text-green-800 rounded-lg shadow transition-all
                   animate-zoom-in"
      >
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      {/* Logout Button */}
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center bg-emerald-500 
                     hover:bg-emerald-600 text-white rounded-lg 
                     px-4 py-2 text-sm font-medium shadow-lg 
                     transition-all animate-fade-up"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;
