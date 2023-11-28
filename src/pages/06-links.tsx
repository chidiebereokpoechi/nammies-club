import React from 'react'
import { Button, LinkBox, LinkButton, Page } from '../components'
import { Tab } from '@headlessui/react'
import { classNames } from '../util'
import { useTypewriter } from 'react-simple-typewriter'

interface Link {
    title: string
    description: string
    url: string
    imageUrl: string
}

export const WATCH_LINKS: Link[] = [
    {
        title: 'Castlevania',
        description: 'Comfort show',
        url: 'https://www.netflix.com/title/80095241',
        imageUrl:
            'https://cdn7.bigcommerce.com/s-a8lg2/images/stencil/600x1200/products/21496/28014/Castlevania-vinyl-cover_600-opt__18788.1505381451.jpg?c=2&f=1&nofb=1&ipt=78553ca55327fc8fe9d38dc296a854adbf4612615419c245aa2feda7668c8e2c&ipo=images',
    },
    {
        title: 'Arcane',
        description: 'Realllly good',
        url: 'https://www.netflix.com/title/81435684',
        imageUrl: 'https://www.thegrid.gr/wp-content/uploads/2021/11/riotgames-arcane-share.jpg',
    },
    {
        title: 'Kubo and the Two Strings',
        description: 'Beautiful story and animation',
        url: 'https://www.itv.com/watch/kubo-and-the-two-strings/10a3201',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81A0UZnzb+L._RI_.jpg',
    },
    {
        title: 'Life of Pi',
        description: 'Great story',
        url: 'https://www.disneyplus.com/en-gb/movies/life-of-pi/2gUgb0BX9Glj',
        imageUrl: 'http://movieposters.ie/wp-content/uploads/2012/10/image001-920x697.jpg',
    },
    {
        title: 'Coco',
        description: 'Tears',
        url: 'https://www.disneyplus.com/en-gb/movies/coco/db9orsI5O4gC',
        imageUrl:
            'https://4.bp.blogspot.com/-VMjpvuAIDGE/WhjBXZEjbyI/AAAAAAABD-0/SiXtiMWOSf47bEPY5ZjHybM5Grd6-2HtwCLcBGAs/s1600/CocoPoster7.jpeg',
    },
    {
        title: 'Love, Death + Robots (Bad Travelling)',
        description: 'You liked this episode (I think)',
        url: 'https://www.netflix.com/watch/81424938?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7Cdc2624c6-d027-4fed-b5ba-9026fa9a9e1a-12917499_titles%2F1%2F%2Flove%20death%20robots%2F0%2F0%2CNAPA%40%40%7Cdc2624c6-d027-4fed-b5ba-9026fa9a9e1a-12917499_titles%2F1%2F%2Flove%20death%20robots%2F0%2F0%2Cunknown%2C%2Cdc2624c6-d027-4fed-b5ba-9026fa9a9e1a-12917499%7C1%2CtitlesResults%2C80174608%2CVideo%3A80174608',
        imageUrl:
            'https://cdna.artstation.com/p/assets/covers/images/052/013/254/large/jin-xiaodi-jin-xiaodi-6db6321aec7b43dc633a3a309384e9ceter.jpg?1658751161',
    },
]

const MESSAGES = ['Some links for you']

export const Links: React.FC = () => {
    const [text, { isDone }] = useTypewriter({
        words: MESSAGES,
        loop: 1,
        typeSpeed: 80,
        deleteSpeed: 60,
        delaySpeed: 1000,
    })

    return (
        <Page id="links">
            <div className="p-20 w-full h-full bg-blue-200 flex items-center justify-start space-y-8 flex-col overflow-auto">
                <div className="flex flex-col">
                    <span className="text-slate-800 text-8xl font-black">
                        {text} {isDone && <small className="text-xl">(I'll add more)</small>}
                    </span>
                </div>
                <div>
                    {isDone && (
                        <LinkButton to="/06">
                            <span>No thanks, credits</span>
                            <img
                                src="https://em-content.zobj.net/thumbs/120/apple/325/smiling-face-with-hearts_1f970.png"
                                className="h-5 w-5"
                                alt="smiling face with hearts"
                            />
                        </LinkButton>
                    )}
                </div>
                <div className="w-full">
                    <Tab.Group>
                        <Tab.List className="space-x-8">
                            <Tab>
                                <span className={classNames('text-red-600 text-4xl font-black')}>
                                    Watch
                                </span>
                            </Tab>
                            <Tab>
                                <span className={classNames('text-green-500 text-4xl font-black')}>
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
                                        <span>Open Spotify</span>
                                    </Button>
                                </a>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </Page>
    )
}
