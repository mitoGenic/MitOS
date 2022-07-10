import React from 'react'
import { tw } from 'twind'

type Props = {
    src: string
    blur: string
    alt: string
}

const Image: React.FC<Props> = ({ src, blur, alt }) => {
    return (
        <figure className={tw`object(contain center) relative`}>
            <img
                className={tw`w-screen h-auto pointer-events-none`}
                src={src}
                alt={alt}
            />
            <img
                className={tw`w-screen h-auto pointer-events-none absolute 
                    top-0 left-0 -z-[2]`}
                src={blur}
                alt={alt}
            />
        </figure>
    )
}

export default Image
