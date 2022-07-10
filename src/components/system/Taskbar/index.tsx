import React from 'react'
import { tw } from 'twind'

const Taskbar: React.FC = () => {
    return (
        <div
            className={tw`w-screen h-[45px] bg-[#2a2a2a] bg-opacity-75 flex 
                flex-row items-center justify-between relative`}
        >
            <div
                className={tw`w-full h-full absolute flex flex-row items-center
                    justify-center py-1.5`}
            >
                <div className={tw`h-full w-[33px]`}></div>
            </div>

            <div className={tw`w-auto h-full absolute top-0 right-0`}></div>
        </div>
    )
}

export default Taskbar
