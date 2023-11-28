import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Congratulations, Four, Three, Welcome } from './pages'

export const App: React.FC = () => {
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
