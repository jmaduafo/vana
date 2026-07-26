import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <header className="px-[8vw] py-4 flex justify-between items-center gap-3">
      <div className="font-logo text-4xl">
        <p>vana</p>
      </div>
      <nav className="flex items-center gap-5">
        <ul className="text-sm font-medium">
          <li><Link href="/archetypes">Archetypes</Link></li>
        </ul>
        <Link href="/quiz">
          <Button variant={"outline"}>Take Quiz</Button>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
