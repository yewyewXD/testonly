import React, { useState, useEffect } from 'react'
import styles from './ScrollTopBtn.module.scss'
import clsx from 'clsx'

export default function ScrollTopBtn() {
    const [showScrollBtn, setShowScrollBtn] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 110) {
                setShowScrollBtn(true)
            } else {
                setShowScrollBtn(false)
            }
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <>
            <div
                className={clsx(styles.btn, {
                    [`${styles.btnShown}`]: showScrollBtn,
                })}
                onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
            >
                <span className="fa fa-arrow-up"></span>
            </div>
        </>
    )
}
