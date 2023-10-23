import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { UserButton } from "@clerk/nextjs";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      <div className="flex h-full">
        <div className="w-72 bg-gray-900 hidden md:block">
          <Sidebar/>
        </div>
        <div className="w-full">
          <Navbar />
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
