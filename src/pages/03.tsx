import React from 'react'
import Confetti from 'react-confetti'
import { useTypewriter } from 'react-simple-typewriter'
import { useWindowSize } from 'react-use'
import { Container, LinkButton, Page } from '../components'
import { motion } from 'framer-motion'

const MESSAGES = [
    'Happy birthday, Esinam! 🎉',
    'God bless you in your new age',
    'I pray that you receive all the blessings from life',
    'I appreciate you for being a great friend and a wonderful person',
    "There's a little more...",
]

export const Three: React.FC = () => {
    const { width, height } = useWindowSize()
    const [text, { isDone }] = useTypewriter({
        words: MESSAGES,
        loop: 1,
        typeSpeed: 50,
        deleteSpeed: 50,
        delaySpeed: 1000,
    })

    return (
        <Page id="03">
            <div className="bg-[#c5fe6e] p-20 w-full h-full flex items-center justify-center space-y-16 flex-col absolute left-0 top-0">
                <Container className="bg-[#fafafa]">
                    <div className="mb-10 flex items-center flex-col text-center">
                        <Confetti width={width} height={height} />
                        {isDone && (
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                src="/images/whale-eyes.png"
                                alt="Esinam"
                                className="h-60 mb-6"
                            />
                        )}
                        <span className="text-[#1b1b1b] text-8xl">{text}</span>
                    </div>
                    <div>
                        {isDone && (
                            <LinkButton to="/04">
                                <img
                                    src="https://em-content.zobj.net/source/apple/354/see-no-evil-monkey_1f648.png"
                                    alt="see-no-evil-monkey"
                                    width="20"
                                    height="20"
                                />
                            </LinkButton>
                        )}
                    </div>
                </Container>
            </div>
        </Page>
    )
}
