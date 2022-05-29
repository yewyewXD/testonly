import React, { useState } from 'react'
import TopHeader from './topHeader/TopHeader'
import LowerHeader from './lowerHeader/LowerHeader'
import StickyHeader from './stickyHeader/StickyHeader'
import MobileMenu from './mobileMenu/MobileMenu'

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <div>
            <TopHeader />
            <LowerHeader onClickHamburger={() => setShowMobileMenu(true)} />
            <StickyHeader />
            {showMobileMenu && (
                <MobileMenu onClose={() => setShowMobileMenu(false)} />
            )}
        </div>
    )
}
