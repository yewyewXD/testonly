/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styles from "./BannerCarousel.module.scss";
import clsx from "clsx";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";

function CarouselItem() {
  return (
    <div className={styles.slideItem}>
      <div
        className={clsx(styles.backgroundImage, {
          [`${styles.backgroundImageActive}`]: true,
        })}
      ></div>
      <div className={styles.autoContainer}>
        <div className={styles.contentBox}>
          <h1
            className={clsx(styles.heading, {
              [`${styles.headingActive}`]: true,
            })}
          >
            The Right Candidate for your Business
          </h1>
          <p
            className={clsx(styles.paragraph, {
              [`${styles.paragraphActive}`]: true,
            })}
          >
            There are many of passages of lorem Ipsum, but the majori have
            suffered alteration in some form.
          </p>
          <div
            className={clsx("flex", styles.btn, {
              [`${styles.btnActive}`]: true,
            })}
          >
            <a href="/">
              <PrimaryBtn hoverBgColor="black" style={{ padding: "22px 69px" }}>
                Discover More
              </PrimaryBtn>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BannerCarousel() {
  return <CarouselItem />;
}
