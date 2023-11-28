import React from 'react'
import { Container, LinkButton, Page } from '../components'

export const Four: React.FC = () => {
    return (
        <Page id="04">
            <div className="bg-[#8484f4] p-20 w-full h-full flex items-center justify-center space-y-16 flex-col absolute left-0 top-0">
                <Container className="bg-[#fafafa]">
                    <span className="text-[#1b1b1b] text-4xl font-bold">
                        Made with love by chids
                    </span>
                    <span className="text-[#1b1b1b] text-2xl mb-5">
                        (these are like the only pictures we have together lol)
                    </span>
                    <div className="flex flex-row space-x-4">
                        <img src="/images/together.png" alt="Esinam" className="h-80 mb-6" />
                        <img src="/images/together-2.jpg" alt="Esinam" className="h-80 mb-6" />
                        <img src="/images/together-3.png" alt="Esinam" className="h-80 mb-6" />
                        <img src="/images/together-4.png" alt="Esinam" className="h-80 mb-6" />
                    </div>
                    <div>
                        <LinkButton
                            to="https://open.spotify.com/playlist/37i9dQZF1EJB86maOHpQt1?si=053b445207fa4911"
                            external
                        >
                            <span>Surprise link ;)</span>
                        </LinkButton>
                    </div>
                </Container>
            </div>
        </Page>
    )
}
