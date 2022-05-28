import React from 'react'
import TopHeader from './topHeader/TopHeader'
import BottomHeader from './bottomHeader/BottomHeader'
import StickyHeader from './stickyHeader/StickyHeader'

export default function Navbar() {
    return (
        <>
            <TopHeader />
            <BottomHeader />
            <StickyHeader />
        </>
    )
}
