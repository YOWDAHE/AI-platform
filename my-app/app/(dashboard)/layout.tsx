import Navbar from "@/components/navbar";
import { UserButton } from "@clerk/nextjs";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      <div className="flex h-full">
        <div className="w-72 bg-gray-900 hidden md:block"></div>
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
