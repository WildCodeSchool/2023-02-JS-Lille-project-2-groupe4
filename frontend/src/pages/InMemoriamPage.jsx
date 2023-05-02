import React from "react";
import InMemorial from "../components/InMemoriam";
import styles from "./InMemoriamPage.module.css";

export default function InMemoriamPage() {
  return (
    <div className={styles.memoriamPage}>
      <InMemorial />
    </div>
  );
}
