import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {

  return (
  <main>Front page</main>
  );
}
