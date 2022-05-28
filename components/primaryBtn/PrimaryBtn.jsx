import React from 'react'
import style from './PrimaryBtn.module.scss'
import clsx from 'clsx'

export default function PrimaryBtn({ children, hoverBgColor }) {
    return (
        <button
            className={clsx(style.btn, {
                [`${style.btnBlack}`]: hoverBgColor === 'black',
                [`${style.btnWhite}`]: hoverBgColor === 'white',
            })}
        >
            {children}
        </button>
    )
}
