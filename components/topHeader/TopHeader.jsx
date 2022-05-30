/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import clsx from "clsx";
import styles from "./TopHeader.module.scss";

export default function TopHeader() {
  return (
    <div
      className={clsx(
        styles.headerTop,
        "z-50 flex flex-col items-center lg:flex-row"
      )}
    >
      <ul className={styles.infoList}>
        <li className={styles.listItem}>
          <i className={clsx(styles.icon, "flaticon-email")}></i>
          <a className={styles.anchor} href="mailto:needhelp@example.com">
            needhelp@example.com
          </a>
        </li>
        <li className={styles.listItem}>
          <i className={clsx(styles.icon, "flaticon-telephone")}></i>
          <a className={styles.anchor} href="tel:928886660000">
            92 888 666 0000
          </a>
        </li>
        <li className={styles.listItem}>
          <i className={clsx(styles.icon, "flaticon-pin")}></i>
          Suite 20 Golden Street USA
        </li>
      </ul>

      <div className="flex lg:ml-auto">
        <ul className={styles.socialLinks}>
          <li className={styles.listItem}>
            <a className={styles.anchor} href="/">
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.anchor} href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.anchor} href="/">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.anchor} href="/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>

        <div className={styles.languageBox}>
          <img
            className={styles.image}
            src="/images/icons/flag-1.png"
            alt="language-sign"
          />
          <div className={clsx(styles.text, "cursor-default")}>English</div>
          <ul className={styles.languageList}>
            <li className={styles.listItem}>
              <a href="/">English</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">Spanish</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">Turky</a>
            </li>
            <li className={styles.listItem}>
              <a href="/">Chiness</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
