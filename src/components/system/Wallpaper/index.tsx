import React from 'react'
import { createPortal } from 'react-dom'
import { tw } from 'twind'
import Image from '@components/shared/Image'

const Wallpaper: React.FC = () => {
    const body = document.querySelector('body') as HTMLElement
    const element = (
        <div className={tw`w-screen h-screen absolute top-0 left-0 -z-[1]`}>
            <Image
                src='/wallpapers/demo.webp'
                blur='/wallpapers/demo-min.webp'
                alt='Wallpaper'
            />
        </div>
    )

    return createPortal(element, body)
}

export default Wallpaper
