import variables from "../../app/styles/variables.module.scss";
import styles from "../app/styles/page.module.css";
import Image from "next/image";
import Header from "./(beforeLogin)/(components)/header";
import Sidebar from "./(beforeLogin)/(components)/Sidebar";
import MainCircle from "./(beforeLogin)/(components)/mainCircle";
import Template from "./(beforeLogin)/(components)/Template";
import {Children} from "react";
export default function Main() {
  return (
    <>
      <Header />
      <Sidebar />
      <MainCircle />
    </>
  );
}
