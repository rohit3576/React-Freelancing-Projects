import {
  BadgeCheck,
  ChartNoAxesCombined,
  LayoutDashboard,
  ShoppingBasket,
} from "lucide-react";
import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingBasket className="w-5 h-5" />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <BadgeCheck className="w-5 h-5" />,
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem, index) => {
        const active = location.pathname === menuItem.path;

        return (
          <div
            key={menuItem.id}
            onClick={() => {
              navigate(menuItem.path);
              setOpen && setOpen(false);
            }}
            className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-green-900 
              transition-all duration-300 ease-in-out transform hover:translate-x-1
              ${active ? "bg-emerald-200/60 font-semibold shadow-inner" : "hover:bg-emerald-100/50"}
              animate-fade-up`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {menuItem.icon}
            <span>{menuItem.label}</span>
          </div>
        );
      })}
    </nav>
  );
}

function AdminSideBar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* Mobile Sidebar (Sheet) */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          className="w-64 bg-gradient-to-b from-lime-100 via-emerald-100 to-green-50 
                     backdrop-blur-md border-r border-green-200 shadow-xl 
                     animate-fade-in"
        >
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b border-green-200 animate-fade-down">
              <SheetTitle className="flex gap-2 mt-5 mb-5 items-center text-green-900 animate-zoom-in">
                <ChartNoAxesCombined size={30} className="text-emerald-600" />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside
        className="hidden w-64 flex-col border-r border-green-200 
                   bg-gradient-to-b from-lime-100 via-emerald-100 to-green-50 
                   backdrop-blur-md shadow-lg p-6 lg:flex animate-slide-up"
      >
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2 mb-6 transition-transform duration-200 hover:scale-105 animate-zoom-in"
        >
          <ChartNoAxesCombined size={30} className="text-emerald-600" />
          <h1 className="text-2xl font-extrabold text-green-900">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
}

export default AdminSideBar;
