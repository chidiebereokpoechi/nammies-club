import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Congratulations, Four, Three, Welcome } from './pages'
import { useWindowSize } from 'react-use'

export const App: React.FC = () => {
    const { width } = useWindowSize()
    const isMobile = width < 768

    if (isMobile) {
        return (
            <div className="w-screen h-screen flex justify-center items-center text-center">
                <span className="text-4xl font-extrabold">Not designed for mobile soz</span>
            </div>
        )
    }

    return (
        <AnimatePresence>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Welcome />} />
                    <Route index path="01" element={<Welcome />} />
                    <Route path="02" element={<Congratulations />} />
                    <Route path="03" element={<Three />} />
                    <Route path="04" element={<Four />} />
                </Routes>
            </BrowserRouter>
        </AnimatePresence>
    )
}
