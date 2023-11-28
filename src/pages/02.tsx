import React from 'react'
import { Smile } from 'react-feather'
import { useTypewriter } from 'react-simple-typewriter'
import { Container, LinkButton, Page } from '../components'

const MESSAGES = ['Today is an extra special day', "It is the founder's birthday"]

export const Congratulations: React.FC = () => {
    const [text, { isDone }] = useTypewriter({
        words: MESSAGES,
        loop: 1,
        typeSpeed: 50,
        deleteSpeed: 50,
        delaySpeed: 1000,
    })

    return (
        <Page id="02">
            <div className="bg-[#8484f4] p-20 w-full h-full flex items-center justify-center space-y-16 flex-col absolute left-0 top-0">
                <Container className="bg-[#fafafa]">
                    <div className="mb-10 flex flex-col items-center">
                        {isDone && (
                            <img src="/images/esinam.jpg" alt="Esinam" className="h-60 mb-6" />
                        )}
                        <span className="text-[#1b1b1b] text-8xl">{text}</span>
                    </div>
                    <div>
                        {isDone && (
                            <LinkButton to="/03">
                                <span>Let's wish her a happy birthday then!</span>
                                <Smile />
                            </LinkButton>
                        )}
                    </div>
                </Container>
            </div>
        </Page>
    )
}
