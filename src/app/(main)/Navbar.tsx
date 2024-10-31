import UserButton from "@/components/userButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
        <Link href={"/"} className="font-sans text-2xl font-bold text-primary">
          Tech Connect
        </Link>
        <UserButton />
      </div>
    </header>
  );
}
