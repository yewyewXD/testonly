import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PrimaryBtn from '../primaryBtn/PrimaryBtn'
import styles from './LowerHeader.module.scss'

export default function LowerHeader({ onClickHamburger }) {
    const router = useRouter()

    return (
        <div className={clsx(styles.headerLower, 'z-50 ')}>
            <div className={clsx(styles.outerBox)}>
                <div className={styles.logoBox}>
                    <figure className="logo">
                        <Link href="/">
                            <a>
                                <img src="/images/logo.png" alt="" />
                            </a>
                        </Link>
                    </figure>
                </div>

                <div className="hidden lg:block">
                    <ul className="flex gap-2 text-white">
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
                            className={clsx(
                                styles.listItem,
                                styles.dropdownBtn,
                                {
                                    [`${styles.active}`]:
                                        router.pathname === '/service',
                                }
                            )}
                        >
                            <Link href="/service">
                                <a className={styles.anchor}>Our Solutions</a>
                            </Link>
                            <ul className={styles.dropdown}>
                                <li className={styles.dropdownItem}>
                                    <Link href="/service">
                                        <a className={styles.dropdownAnchor}>
                                            Our Solutions
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.dropdownItem}>
                                    <Link href="/hr-consulting">
                                        <a className={styles.dropdownAnchor}>
                                            HR Consulting
                                        </a>
                                    </Link>
                                </li>
                            </ul>
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

                <div
                    className="cursor-pointer text-lg text-white lg:hidden"
                    onClick={onClickHamburger}
                >
                    <i className="fa fa-bars"></i>
                </div>

                <div className="hidden sm:block">
                    <Link href="/contact">
                        <a>
                            <PrimaryBtn hoverBgColor="black">
                                BOOK APPOINTMENT
                            </PrimaryBtn>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
