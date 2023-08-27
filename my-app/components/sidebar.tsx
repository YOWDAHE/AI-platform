import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="text-white">
      <div>
        <Link href={"/dashboard"} className="flex items-center pl-3 mt-3 mb-14 gap-3">
            <Image width={30} height={30} alt="logo" src={"/logo.png"} />
          <h1 className="font-bold">Talk</h1>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
