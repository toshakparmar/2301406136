import React from 'react'
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdHeight, MdOutlineFileDownload, MdWidthFull } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, refer}) {
  return (
    <>
      <motion.div drag dragConstraints={refer} whileDrag={{scale: 1.1}} dragElastic={.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10}} 
        className='relative w-[220px] h-[250px] rounded-[50px] bg-zinc-900/90 text-white p-10 overflow-hidden'>
          <div className='absolute top-2 w-full left-0'>
            <div className='flex items-center justify-between px-5 py-3'>
                <HiOutlineClipboardDocumentList />
              <span  className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
                <IoIosClose size=".8em" color='#fff'/>
              </span>
            </div>
          </div>
            <p className='text-sm leading-tight mt-1 font-semibold'>
                Name: {data.productName}
            </p>
            <p className='text-sm leading-tight mt-1 font-semibold'>
                Price: {data.price}
            </p>
            <p className='text-sm leading-tight mt-1 font-semibold'>
                Rating: {data.rating}
            </p>
            <p className='text-sm leading-tight mt-1 font-semibold'>
                Discount: {data.discount}
            </p>
            <p className='text-sm leading-tight mt-1 font-semibold'>
                Available: {data.availability}
            </p>
            <div className='absolute footer bottom-0 w-full left-0'>
              <div className='flex items-center justify-between px-5 py-3 ml-2'>
                <span  className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                  <FaRegEdit size=".7em" color='#fff' />
                </span>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                  <MdOutlineFileDownload size=".7em" color='#fff' />
                </span>
              </div>
              <div className='tag w-full py-3 bg-blue-600 flex items-center justify-center'>
                  <h3 className='text-sm font-semibold'>Category: <span className='text-[10px]'></span>{data.productName}</h3>
              </div>
            </div>
        </motion.div>
    </>
  )
}

export default Card