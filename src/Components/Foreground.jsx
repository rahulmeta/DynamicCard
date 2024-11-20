import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = () => {
const ref = useRef(null)
    const [data, setData] = useState([
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            size: ".5mb",
            isDownload: true,
            isDownloadText: "Download Now",
            isDownloadBgColor: "#22C55E",
            isClose: false
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            size: ".9mb",
            isDownload: false,
            isDownloadText: "Download Now",
            isDownloadBgColor: "#22C55E",
            isClose: true
        },

    ])

    return (
        <div ref={ref} className='z-[3] flex gap-[2vw] p-[2vw] fixed h-screen w-full top-0 left-0'>
            {
                data.map((item, index) => {
                    return <Card key={index} data={item} refe={ref}/>
                })
            }
        </div>
    )
}

export default Foreground
