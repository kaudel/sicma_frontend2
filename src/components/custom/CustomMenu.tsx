import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

const CustomMenu = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname == path;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/*Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive("/") && "bg-slate-200 ", "rounded-md p-2")}
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/*Stats */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              isActive("/stats") && "bg-slate-200 ",
              "rounded-md p-2"
            )}
          >
            <Link to="/stats">Stats</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CustomMenu;
