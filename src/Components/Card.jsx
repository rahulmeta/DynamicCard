import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { motion } from "framer-motion"

const Card = ({ data, refe }) => {

    return (
        <motion.div drag dragConstraints={refe} whileDrag={{ scale: 1.1 }} className='h-[36vh] w-[15vw] rounded-[1.5vw] bg-zinc-900 text-white flex flex-col justify-between overflow-hidden'>
            <div className="main px-5 py-7 flex flex-col gap-[1.5vw]">
                <FaRegFileAlt />
                <p className='text-[1vw]'>{data.description}</p>
            </div>
            <div className="footer w-full ">
                <div className="fotterTop flex py-3 px-5 justify-between items-center text-white">
                    <h5 className='text-[1.1vw] font-light'>{data.size}</h5>
                    {
                        data.isClose === true
                            ? <GrFormClose />
                            : <MdDownloadForOffline />
                    }
                </div>
                <div style={{
                    backgroundColor: `${data.isDownload === true
                        ? data.isDownloadBgColor
                        : "royalblue"}`
                }}
                    className="footerBottom py-3 w-full flex items-center justify-center"
                >
                    <h3 className='text-[1.2vw] font-normal'
                    >
                        {data.isDownload === true ? data.isDownloadText : "Pause"}
                    </h3>
                </div>
            </div>
        </motion.div>
    )
}

export default Card
