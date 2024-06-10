import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        {/** logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Nicholas <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
}
