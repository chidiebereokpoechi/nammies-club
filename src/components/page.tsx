import { motion } from 'framer-motion'
import React from 'react'

interface Props {
    id: string
    children: React.ReactNode | React.ReactNode[]
}

export const Page: React.FC<Props> = ({ id, children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full grid place-items-center"
        >
            <motion.div className="w-screen h-screen" layoutId={id}>
                {children}
            </motion.div>
        </motion.div>
    )
}
