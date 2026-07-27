import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto px-8 py-4 flex justify-between items-center gap-3">
        <div className="font-logo text-4xl">
          <p>vana</p>
        </div>
        <nav className="flex items-center gap-5">
          <ul className="text-sm font-medium flex items-center gap-4">
            <li>
              <Link href="/archetypes">Archetypes</Link>
            </li>
            <li>
              <Link href="/results">Results</Link>
            </li>
          </ul>
          <Link href="/quiz">
            <Button variant={"outline"}>Take Quiz</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
