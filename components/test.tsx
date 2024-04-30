'use client'

import React from 'react'
import Image from 'next/image' // Import the Image component from next/image

function Test() {
    return (
        <div className="relative h-60 w-full">
            <div
                className="absolute left-1/2 top-1/2 h-60 w-60 origin-top -translate-x-1/2 
        -translate-y-1/2 rotate-90 transform transition-all hover:rotate-0"
            >
                <Image
                    className=""
                    src="image.png"
                    width={200}
                    height={120}
                    alt="logo"
                />
                <Image
                    className="rotate-90"
                    src="image.png"
                    width={200}
                    height={120}
                    alt="logo"
                />
            </div>
        </div>
    )
}

export default Test
