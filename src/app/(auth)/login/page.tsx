import { Metadata } from "next";
import Image from "next/image";
import loginImage from "@/assets/register_image.jpg";
import Link from "next/link";
import LoginForm from "./loginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-hidden p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Entre no Tech Connect</h1>
            <p className="text-muted-foreground">
              Um lugar para <span className="italic">você</span> se conectar com
              o mundo Tech
            </p>
          </div>
          <div className="space-y-5">
            <LoginForm />
            <Link
              href={"/signup"}
              className="block text-center hover:underline"
            >
              Ainda não tem uma conta? Cadastre-se
            </Link>
          </div>
        </div>
        <Image
          src={loginImage}
          alt="image do form de login"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
