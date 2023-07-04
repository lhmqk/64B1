import Link from "next/link";
import { GiWantedReward } from "react-icons/gi";

export default function SidebarLogo() {
  return (
    <Link
      href="/"
      className="rounded-full h-14 w-14 p-2 flex items-center justify-center hover:bg-zinc-300 hover:bg-opacity-10 cursor-pointer transition"
    >
      <GiWantedReward size={24}></GiWantedReward>
    </Link>
  );
}
