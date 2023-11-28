import React from 'react'

interface Link {
    title: string
    description: string
    url: string
    imageUrl: string
}

type Props = Link

export const LinkBox: React.FC<Props> = ({ title, description, url, imageUrl }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex text-slate-800 bg-blue-100 hover:text-white hover:bg-slate-800 rounded-lg overflow-hidden"
        >
            <div className="grid grid-cols-[8rem_1fr]">
                <div
                    className="h-32 w-32 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />
                <div className="flex flex-col p-6">
                    <span className="font-black text-3xl">{title}</span>
                    <span>{description}</span>
                </div>
            </div>
        </a>
    )
}
