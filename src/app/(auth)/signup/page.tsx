import { Metadata } from "next";
import Image from "next/image";
import signupImage from "@/assets/signup_image.jpg"
import Link from "next/link";
import SignUpForm from "./signupForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="md:w-1/2 w-full space-y-10 overflow-y-hidden p-10">
            <div className="space-y-1 text-center">
                <h1 className="text-3xl font-sans">Registre-se no Tech Connect</h1>
                <p className="text-muted-foreground font-sans text-sm">
                    Um lugar para <span className="text-primary font-semibold">você</span> se conectar com o mundo Tech
                </p>
            </div>
            <div className="space-y-5">
                <SignUpForm />
                <Link href={"/login"} className="block font-sans text-center hover:underline">Ja possui uma conta? Faca o log in</Link>
            </div>
        </div>
        <Image src={signupImage} alt="image do form de login" className="w-1/2 hidden md:block object-cover"/>
      </div>
    </main>
  );
}
