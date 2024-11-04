'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const skilsData = [
    {
        id: 1,
        link: 'https://en.wikipedia.org/wiki/Nuclear_physics',
        icone: '/skils/nuc.png',

    },
    {
        id: 2,
        link: 'https://en.wikipedia.org/wiki/Thermal_engineering',
        icone: '/skils/thermal.png',

    },
    {
        id: 3,
        link: 'https://fr.wikipedia.org/wiki/Radioprotection',
        icone: '/skils/rad.jpg',

    },
    {
        id: 4,
        link: 'https://en.wikipedia.org/wiki/Nuclear_power_plant',
        icone: '/skils/nuc.png',

    },
    {
        id: 5,
        link: 'https://www.aspentech.com/en/products/engineering/aspen-plus',
        icone: '/skils/Aspen.png',

    },
    {
        id: 6,
        link: 'https://fr.wikipedia.org/wiki/CATIA',
        icone: '/skils/catia.png',

    },
    {
        id: 7,
        link: 'https://fr.wikipedia.org/wiki/ANSYS',
        icone: '/skils/ansys.png',

    },
    {
        id: 8,
        link: 'https://fr.wikipedia.org/wiki/Microsoft_Project',
        icone: '/skils/ms.png',

    },
    {
        id: 9,
        link: 'https://www.openlca.org/',
        icone: '/skils/openlca.png',

    },
    {
        id: 10,
        link: 'https://simapro.com/',
        icone: '/skils/simapro.png',

    },
    {
        id: 11,
        link: 'https://www.microsoft.com/en-us/power-platform/products/power-bi',
        icone: '/skils/power.png',

    },
    {
        id: 12,
        link: 'https://fr.wikipedia.org/wiki/Microsoft_Excel',
        icone: '/skils/excel.png',

    },
    {
        id: 13,
        link: 'https://www.python.org',
        icone: '/skils/python.png',
    },
    {
        id: 14,
        link: 'https://www.mathworks.com/products/matlab.html',
        icone: '/skils/matlap.png',
    },
    {
        id: 15,
        link: 'https://www.w3schools.com/sql/',
        icone: '/skils/sql1.png',
    },
    {
        id: 16,
        link: 'https://fr.wikipedia.org/wiki/C_(langage)',
        icone: '/skils/c.png',
    },
    {
        id: 17,
        link: 'https://www.w3schools.com/html/',
        icone: '/skils/html.png',

    },
    {
        id: 18,
        link: 'https://www.w3schools.com/css/',
        icone: '/skils/css.png',
    },
    {
        id: 19,
        link: 'https://www.linux.org/',
        icone: '/skils/linux.png',
    },
    {
        id: 20,
        link: 'https://git-scm.com/',
        icone: '/skils/git.png',
    },
    {
        id: 21,
        link: 'https://github.com/',
        icone: '/skils/github.png',
    },
]

export default function TechStack() {
    return (
        <div className='mt-32 w-full flex flex-col justify-center items-center'>
            <div className='w-[70%] '>
                <div className="flex-col flex gap-10 w-full ">
                    <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center">My Skils</h1>
                    <h2 className='text-[#666666] flex justify-center text-xl'>{`Technologies I’ve been working with recently`}</h2>
                </div>
                <div className=" flex-wrap flex w-full h-auto gap-10 justify-center mt-24 ">
                    {
                        skilsData.map((item: any) => (
                            <motion.div key={item.id}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}
                            >
                                <Link href={item.link} className="flex items-center justify-center duration-300 hover:scale-110 ">
                                    <Image loading='lazy' width={100} height={100} alt='dd' className='' src={item.icone} />
                                </Link>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
