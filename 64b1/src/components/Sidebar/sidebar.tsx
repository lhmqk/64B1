import { GoHomeFill, GoBellFill, GoPersonFill } from "react-icons/go";
import SidebarLogo from "../SidebarLogo/sidebarLogo";
import SidebarItem from "../SidebarItem/sidebarItem";
export default function Sidebar() {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: GoHomeFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: GoBellFill,
    },
    {
      label: "Profile",
      href: "/user/123",
      icon: GoPersonFill,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo></SidebarLogo>
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            ></SidebarItem>
          ))}
        </div>
      </div>
    </div>
  );
}
