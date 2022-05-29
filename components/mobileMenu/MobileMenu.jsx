/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react'
import styles from './MobileMenu.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function MobileMenu({ onClose }) {
    const [openDropdown, setOpenDropdown] = useState(false)
    const router = useRouter()

    return (
        <div className={clsx(styles.mobileMenu, styles.mobileMenuVisible)}>
            <div
                className={clsx(styles.backdrop, styles.backdropVisible)}
                onClick={onClose}
            ></div>
            <div
                className={clsx(styles.closeBtn, styles.closeBtnVisible)}
                onClick={onClose}
            >
                <i className="fas fa-times"></i>
            </div>

            <nav className={clsx(styles.menuBox, styles.menuBoxVisible)}>
                <div className={styles.navLogo}>
                    <a href="index.html">
                        <img src="/images/logo-2.png" alt="brand icon" />
                    </a>
                </div>
                <div className={styles.nav}>
                    <ul className={styles.list}>
                        <li
                            className={clsx(styles.listItem, {
                                [`${styles.active}`]: router.pathname === '/',
                            })}
                        >
                            <Link href="/">
                                <a className={clsx(styles.anchor)}>Home</a>
                            </Link>
                        </li>

                        <li
                            className={clsx(styles.listItem, {
                                [`${styles.active}`]:
                                    router.pathname === '/service',
                            })}
                        >
                            <Link href="/service">
                                <a className={styles.anchor}>Our Solutions</a>
                            </Link>
                            <div
                                className={clsx(styles.dropdownBtn, {
                                    [`${styles.dropdownBtnOpen}`]: openDropdown,
                                })}
                                onClick={() => setOpenDropdown((b) => !b)}
                            >
                                <span className="fas fa-angle-down"></span>
                            </div>
                            {openDropdown && (
                                <ul className={styles.dropdown}>
                                    <li className={styles.dropdownItem}>
                                        <Link href="/service">
                                            <a
                                                className={
                                                    styles.dropdownAnchor
                                                }
                                            >
                                                Our Solutions
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={styles.dropdownItem}>
                                        <Link href="/hr-consulting">
                                            <a
                                                className={
                                                    styles.dropdownAnchor
                                                }
                                            >
                                                HR Consulting
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li
                            className={clsx(styles.listItem, {
                                [`${styles.active}`]:
                                    router.pathname === '/contact',
                            })}
                        >
                            <Link href="/contact">
                                <a className={styles.anchor}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.contactInfo}>
                    <h4 className={styles.contactTitle}>Contact Info</h4>
                    <ul>
                        <li className={styles.contactItem}>
                            Chicago 12, Melborne City, USA
                        </li>
                        <li className={styles.contactItem}>
                            <a
                                className={styles.anchor}
                                href="tel:+8801682648101"
                            >
                                +88 01682648101
                            </a>
                        </li>
                        <li className={styles.contactItem}>
                            <a
                                className={styles.anchor}
                                href="mailto:info@example.com"
                            >
                                info@example.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.socialLinks}>
                    <ul className="flex gap-1">
                        <li className={styles.linkItem}>
                            <a href="/">
                                <span className="fab fa-twitter"></span>
                            </a>
                        </li>
                        <li className={styles.linkItem}>
                            <a href="/">
                                <span className="fab fa-facebook-square"></span>
                            </a>
                        </li>
                        <li className={styles.linkItem}>
                            <a href="/">
                                <span className="fab fa-pinterest-p"></span>
                            </a>
                        </li>
                        <li className={styles.linkItem}>
                            <a href="/">
                                <span className="fab fa-instagram"></span>
                            </a>
                        </li>
                        <li className={styles.linkItem}>
                            <a href="/">
                                <span className="fab fa-youtube"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
