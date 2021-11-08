import { Fragment } from "react";
import NavBar from "./NavBar";
import styles from "../../styles/Home.module.css";

export default function Layout(props) {
  return (
    <Fragment>
      <NavBar />
      <main>{props.children}</main>
    </Fragment>
  );
}
