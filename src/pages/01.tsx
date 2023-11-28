import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { Container, LinkButton, Page } from '../components'

const MESSAGES = ['Howdy!', 'Welcome to The Nammies Club', 'Are you excited?']

export const Welcome: React.FC = () => {
    const [text, { isDone }] = useTypewriter({
        words: MESSAGES,
        loop: 1,
        typeSpeed: 50,
        deleteSpeed: 50,
        delaySpeed: 1000,
    })

    return (
        <Page id="01">
            <div className="bg-[#31cd7f] p-20 w-full h-full flex items-center justify-center space-y-16 flex-col absolute left-0 top-0">
                <Container className="bg-[#fafafa]">
                    <div className="mb-10">
                        <span
                            className="text-[#1b1b1b] text-8xl"
                            dangerouslySetInnerHTML={{ __html: text }}
                        ></span>
                    </div>
                    <div>
                        {isDone && (
                            <LinkButton to="/02">
                                <span>Yeah!</span>
                                <img
                                    src="https://em-content.zobj.net/source/apple/354/flushed-face_1f633.png"
                                    alt="flushed-face"
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
