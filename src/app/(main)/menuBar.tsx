import { Button } from "@/components/ui/button";
import { Bell, Bookmark, Home, MessageCircleMore } from "lucide-react";
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

export default function MenuBar({ className }: MenuBarProps) {
  return (
    <div className={className}>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Home"
        asChild
      >
        <Link href={"/"}>
          <Home />
          <span className="hidden font-sans lg:inline">Home</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Notificações"
        asChild
      >
        <Link href={"/notifications"}>
          <Bell />
          <span className="hidden font-sans lg:inline">Notificações</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Messages"
        asChild
      >
        <Link href={"/messages"}>
          <MessageCircleMore />
          <span className="hidden font-sans lg:inline">Mensagens</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Bookmarks"
        asChild
      >
        <Link href={"/bookmarks"}>
          <Bookmark />
          <span className="hidden font-sans lg:inline">Salvos</span>
        </Link>
      </Button>
    </div>
  );
}
