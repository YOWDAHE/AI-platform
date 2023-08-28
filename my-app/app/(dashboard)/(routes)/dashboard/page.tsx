import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const routes = [
    {
      label: "Conversation",
      icon: MessageSquare,
      href: "/conversation",
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: "Image Genteration",
      icon: ImageIcon,
      href: "/image",
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      href: "/video",
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
    },
    {
      label: "Music Generation",
      icon: Music,
      href: "/music",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: "Code Generation",
      icon: Code,
      href: "/code",
      color: "text-green-700",
      bgColor: "bg-green-700/10",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-2xl">
          Explore the power of AI
        </h1>
        <p className="text-center opacity-60 mt-4">
          Chat with the smartest AI!
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-7 lg:p-5 lg:mt-10 p-10 ">
        {routes.map((el) => {
          return (
            <Link href={el.href}>
              <Card
                className={cn(
                  "flex gap-3 items-center justify-center p-6" ,el.bgColor
                )}
              >
                <el.icon className={cn("min-w-8 min-h-8", el.color)} />
                {el.label}
                <ArrowRight />
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
