import React from 'react'
import moduleStyle from './PrimaryBtn.module.scss'
import clsx from 'clsx'

export default function PrimaryBtn({ children, hoverBgColor, style }) {
    return (
        <button
            className={clsx(moduleStyle.btn, {
                [`${moduleStyle.btnBlack}`]: hoverBgColor === 'black',
                [`${moduleStyle.btnWhite}`]: hoverBgColor === 'white',
            })}
            style={style}
        >
            {children}
        </button>
    )
}
