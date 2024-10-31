import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface UserAvatarProps {
  avatarUrl: string | null | undefined;
  size?: number;
  className?: string;
}

const avatarPlaceholder = "https://avatar.iran.liara.run/public/17";

export default function UserAvatar({
  avatarUrl,
  size,
  className,
}: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage
        src={avatarUrl || avatarPlaceholder}
        alt="Avatar do usuario"
        width={size ?? 48}
        height={size ?? 48}
        className={`${className}`}
      />
    </Avatar>
  );
}
