const Links = [
  {
    id: 0,
    text: "Inicio",
    href: "/",
  },
  {
    id: 1,
    text: "Proyectos",
    href: "/proyects",
  },
  {
    id: 3,
    text: "Stacks",
    href: "#stacks",
  },
  {
    id: 4,
    text: "Acerca de",
    href: "#about",
  },
];

export function NavLinks() {
  return (
    <ul className="flex flex-col lg:flex-row gap-5">
      {Links.map((link) => (
        <li key={link.id}>
          <a className="hover:text-dribble-night/50 ease-in-out duration-200" 
          href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
}
