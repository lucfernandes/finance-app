"use client";

import {
  BuildingLibraryIcon,
  ChartPieIcon,
  CogIcon,
  HomeIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavbarItem from "./navbar-item";
import NavbarItemCenter from "./navbar-item-center";

export default function Navbar() {
  const currentPage = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-sky-700 text-white text-xs border-t p-4">
      <ul className="grid grid-cols-5">
        <NavbarItem
          href="/"
          icon={<HomeIcon className="w-6 h-6" />}
          label="Home"
          currentPage={currentPage}
        />
        <NavbarItem
          icon={<ChartPieIcon className="w-6 h-6" />}
          label="Relatórios"
          currentPage={currentPage}
        />
        <NavbarItemCenter
          icon={<PlusIcon className="w-6 h-6" />}
          label="Adicionar transação"
          href="/add-transaction"
          currentPage={currentPage}
        />
        <NavbarItem
          icon={<BuildingLibraryIcon className="w-6 h-6" />}
          label="Bancos"
          currentPage={currentPage}
        />
        <NavbarItem
          icon={<CogIcon className="w-6 h-6" />}
          label="Ajustes"
          currentPage={currentPage}
        />
      </ul>
    </nav>
  );
}
