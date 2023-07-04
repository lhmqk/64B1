import { IconType } from "react-icons/lib/esm/iconBase";
interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-zinc-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={24}></Icon>
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-zinc-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={24}></Icon>
        <p className="hidden lg:block text-xl">{label}</p>
      </div>
    </div>
  );
};
export default SidebarItem;
