import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

function Heading({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) {
    
  return (
    <div className="mb-8">
      <div
        className={cn(
          "p-2 w-full rounded-md flex px-4 lg:px-8 items-center gap-x-5",
          bgColor
        )}
      >
        <Icon className={cn("w-10 h-10", iconColor)} />
        <div>
          <h2 className=" text-xl">{title}</h2>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
