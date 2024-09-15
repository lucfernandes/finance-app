import Link from "next/link";
import { ReactElement } from "react";

interface NavbarItemProps {
  icon: ReactElement;
  label: string;
  href?: string;
  currentPage?: string;
}

export default function NavbarItemCenter({
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
            "absolute inline-flex flex-col justify-center items-center text-center font-medium bg-sky-500 hover:bg-sky-600 w-24 h-24 rounded-full " +
            (active
              ? "pointer-events-none bg-zinc-50 text-sky-600 border-4 border-sky-700"
              : "")
          }
        >
          {icon}
          {label}
        </Link>
      </div>
    </li>
  );
}
