import React from 'react'
import { Button, Container, LinkBox, Page } from '../components'
import { Tab } from '@headlessui/react'
import { classNames } from '../util'
import { WATCH_LINKS } from './06-links'

export const Five: React.FC = () => {
    return (
        <Page id="04">
            <div className="bg-[#8484f4] p-20 w-full h-full flex items-center justify-center space-y-16 flex-col absolute left-0 top-0">
                <Container className="bg-[#fafafa]">
                    <span className="text-[#1b1b1b] text-4xl font-bold mb-10">Some links</span>
                    <div className="w-full">
                        <Tab.Group>
                            <Tab.List className="space-x-8">
                                <Tab>
                                    <span
                                        className={classNames('text-red-600 text-4xl font-black')}
                                    >
                                        Watch
                                    </span>
                                </Tab>
                                <Tab>
                                    <span
                                        className={classNames('text-green-500 text-4xl font-black')}
                                    >
                                        Listen
                                    </span>
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className="mt-8 overflow-auto flex-1">
                                <Tab.Panel className="grid grid-cols-1 gap-4">
                                    {WATCH_LINKS.map((link, i) => (
                                        <LinkBox {...link} key={i} />
                                    ))}
                                </Tab.Panel>
                                <Tab.Panel>
                                    <a
                                        href="https://open.spotify.com/playlist/3sQeB7wLAuilu1Zq8ZtOna?si=d9485345f80e4c1d"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Button>
                                            <span>S</span>
                                        </Button>
                                    </a>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </Container>
            </div>
        </Page>
    )
}
