import { NavLinks } from "./NavLinks";
import { MenuIcon } from "../assets/Icons";
import { Aside } from "./Aside";
import { useState } from "react";


export function Header() {
    const [isOpen, setIsOpen] = useState('hidden')

  const handleAside = () => {
    if (isOpen === 'hidden') {
        setIsOpen('flex')
        return
    }

    if (isOpen === 'flex') {
        setIsOpen('hidden')
        return
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full flex flex-col gap-2">
      <div className="mx-2 my-2 bg-slate-50 rounded-2xl flex flex-row justify-between px-5 items-center min-h-14 shadow-sm">
        <div>
          <a
            className="relative hover:scale-105 transform duration-150 flex items-center gap-2.5"
            href="/"
          >
            <div className="shape size-10 bg-dribble-yellow border-dribble-night border-[1px] -rotate-6 rounded-2xl solid"></div>
            <h1 className="font-unbounded">Portfolio</h1>
          </a>
        </div>
        <nav className="hidden lg:flex">
          <NavLinks />
        </nav>
        <div className="flex flex-row gap-2">
          <button className="hidden md:block bg-dribble-yellow px-4 py-2 rounded-2xl hover:bg-dribble-yellow/60">
            Youtube
          </button>
          <button
            className="bg-dribble-purple hover:bg-dribble-purple/50 ease-in-out duration-300 px-2 py-4 rounded-3xl lg:hidden"
            id="toggle"
            onClick={handleAside}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
      <div>
        <Aside isOpen={isOpen}/>
      </div>
    </header>
  );
}
