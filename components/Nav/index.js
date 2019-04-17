import React from "./node_modules/react";
import Link from "./node_modules/next/link";

const links = [
  { href: "https://github.com/segmentio/create-next-app", label: "Github" },
  { href: "https://github.com/segmentio/create-next-app", label: "Google" },
  { href: "https://github.com/segmentio/create-next-app", label: "Yarn" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>
  </nav>
);

export default Nav;
