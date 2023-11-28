import { times } from 'lodash'
import React from 'react'

export const Stars: React.FC = () => {
    return (
        <div className="origin">
            <div className="control">
                <div className="galaxy">
                    {times(200, (i) => (
                        <div key={i} className="star" />
                    ))}
                </div>
            </div>
        </div>
    )
}
