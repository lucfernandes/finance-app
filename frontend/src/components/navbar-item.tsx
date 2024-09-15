import Link from "next/link";
import { ReactElement } from "react";

interface NavbarItemProps {
  icon: ReactElement;
  label: string;
  href?: string;
  currentPage?: string;
}

export default function NavbarItem({
  icon,
  label,
  href,
  currentPage,
}: NavbarItemProps) {
  const active = currentPage === href;

  return (
    <li>
      <div className="flex justify-center items-center">
        <Link
          href={href ?? ""}
          className={
            "inline-flex flex-col justify-center items-center font-medium hover:opacity-90 transition " +
            (active ? "pointer-events-none opacity-75" : "")
          }
        >
          {icon}
          {label}
        </Link>
      </div>
    </li>
  );
}
