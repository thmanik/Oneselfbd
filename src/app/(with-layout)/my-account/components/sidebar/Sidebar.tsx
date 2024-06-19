"use client";
import NavLink from "@/components/navLink/NavLink";
import { toast } from "@/components/ui/use-toast";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { logOut } from "@/redux/features/auth/authSlice";
import TGenericResponse, { TGenericErrorResponse } from "@/types/response";
import { useDispatch } from "react-redux";

const Sidebar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  const handleLogOut = async () => {
    try {
      const result = (await logout({}).unwrap()) as TGenericResponse;
      if (result?.success) {
        dispatch(logOut());
        window?.localStorage?.removeItem("persist:auth");
        toast({
          title: "Success",
          description: "Logout successfully",
        });
      }
    } catch (error) {
      const err = error as TGenericErrorResponse;
      toast({
        title: "Error",
        description: err.message,
      });
    }
  };

  return (
    <div className="md:col-span-4">
      <div className="py-4">
        <ul className="select-none">
          {isLoggedIn ? (
            <>
              <li className="cursor-pointer border-b-[1px] border-gray-200">
                <NavLink
                  href="/my-account"
                  className="block py-2 pl-2"
                  activeClassName="font-bold"
                >
                  My account
                </NavLink>
              </li>
              <li className="cursor-pointer border-b-[1px] border-gray-200">
                <NavLink
                  href="/my-account/my-orders"
                  className="block py-2 pl-2"
                  activeClassName="font-bold"
                >
                  My orders
                </NavLink>
              </li>
              <li
                className="cursor-pointer border-b-[1px] border-gray-200"
                onClick={handleLogOut}
              >
                <p className="py-2 pl-2">Log out</p>
              </li>
            </>
          ) : (
            <li className="cursor-pointer border-b-[1px] border-gray-200">
              <NavLink
                href="/auth/login?redirect_url=/my-account"
                className="block py-2 pl-2"
                activeClassName="font-bold"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
