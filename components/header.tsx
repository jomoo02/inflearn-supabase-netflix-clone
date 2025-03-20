"use client";

import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 px-4 py-2 bg-gray-900 flex items-center justify-between z-10">
      <nav className="flex gap-2">
        <Logo />
        <ul className="flex gap-2 text-white">
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>
      <div className="flex w-full max-w-72 gap-2 items-center border border-white bg-transparent text-white rounded-md p-2">
        <i className="fas fa-search" />
        <input className="bg-transparent" placeholder="Search Movies" />
      </div>
    </header>
  );
}
