import React from 'react'
import IPill from "./types";
const Pill: React.FC <IPill> = ({
    title,
    color
    }) => {
    return (
        <div className="my-2 flex h-auto justify-center rounded-xl" style={{backgroundColor: color}}>
            {title}
        </div>
    )
}
export default Pill;