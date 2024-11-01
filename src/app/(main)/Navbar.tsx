import SearchField from "@/components/searchField";
import UserButton from "@/components/userButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="m-auto flex max-w-7xl items-center justify-center gap-5 px-5 py-3">
        <Link href={"/"} className="font-sans text-2xl font-bold text-primary">
          Tech Connect
        </Link>
        <SearchField />
        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
}
