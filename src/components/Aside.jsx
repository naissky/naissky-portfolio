import { NavLinks } from "./NavLinks";

export function Aside({ isOpen }) {
  return (
    <div id="mobile" className={`${isOpen} z-50 absolute top-20 left-0 w-full`}>
      <aside className="mx-2 bg-slate-50 rounded-2xl w-full flex-col min-h-[50vh] px-5 py-5 transform duration-100 shadow-sm">
        <nav className="lg:hidden">
          <NavLinks/>
        </nav>
      </aside>
    </div>
  );
}
