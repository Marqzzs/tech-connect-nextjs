"use client";

import { useSession } from "@/app/(main)/sessionProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import UserAvatar from "./userAvatar";
import Link from "next/link";
import { Check, LogOutIcon, Monitor, Moon, Sun, UserIcon } from "lucide-react";
import { logout } from "@/app/(auth)/actions";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface UserButtonProps {
  className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
  const { user } = useSession();

  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("flex-none rounded-full", className)}>
        <UserAvatar avatarUrl={user.avatarUrl} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="font-sans">
          Usuario logado é @{user.username}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`/users/${user.username}`}>
          <DropdownMenuItem className="font-sans">
            <UserIcon className="mr-2 size-4" />
            Perfil
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="font-sans">
            <Monitor className="mr-2 size-4" />
            Tema
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className="font-sans"
              >
                <Sun className="mr-2 size-4" />
                Light
                {theme === "light" && <Check className="ms-2 size-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className="font-sans"
              >
                <Moon className="mr-2 size-4" />
                Dark
                {theme === "dark" && <Check className="ms-2 size-4" />}
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            logout();
          }}
          className="font-sans"
        >
          <LogOutIcon className="mr-2 size-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
