"use client";

import {usePathname} from "next/navigation";
import {useMemo} from "react";
import variables from "../../styles/variables.module.scss";
import styles from "../../app/styles/page.module.css";
interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    []
  );
  return <div>{children}hihi</div>;
};

export default Sidebar;
