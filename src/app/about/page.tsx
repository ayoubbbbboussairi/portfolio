'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'


const Experience = [
    {
        id: 1,
        post: 'Data analytics',
        company: 'Alx Africa',
        date: 'Mar 2024 - today',
        local: 'Casablanca'
    }
]

const EducationData = [
    {
        id: 1,
        filier: 'Data analytics',
        school: 'Alx Africa',
        date: 'Mar 2024 - today',
        local: 'Casablanca'
    },
    {
        id: 2,
        filier: 'Computer Programming',
        school: '1337 coding school (42 Network)',
        local: 'Khouribga',
        date: 'Juin 2022 - Oct 2023'
    },
    {
        id: 3,
        filier: 'Engineer Degree in Process Engineering, Energy, and Environment',
        school: 'National School of Applied Sciences (Ensa)',
        date: 'Sep 2018 - Sep 2023',
        local: 'Khouribga'
    },
    {
        id: 4,
        filier: 'High School Diploma in Physical Sciences',
        school: 'Hassan II',
        local: 'Oued zem',
        date: 'Sep 2017 - juin 2018'
    }
]

const certificationsData = [
    {
        id: 1,
        name: 'Six Sigma Yellow Belt',
        link: 'https://coursera.org/share/b327b00d6b1e8b55750ef7dad589affb',
        img: './about/sixsigma.png'
    },
    {
        id: 2,
        name: 'Google Data Analytics',
        link: 'https://coursera.org/share/63f984957a87425372dc3fc42d964582',
        img: './about/google.png'

    },
    {
        id: 3,
        name: 'Microsoft Power BI Data Analyst',
        link: 'https://coursera.org/share/3476d2a3864ae01bbc9193235a0dc279',
        img: './about/powerbi.png'

    },
    {
        id: 4,
        name: 'Google Advanced Data Analytics',
        link: 'https://coursera.org/share/43a642e56dcc89fc81fa79eabef14ae8',
        img: './about/google2.png'

    },
    {
        id: 5,
        name: 'Getting Started with Python',
        link: 'https://www.coursera.org/account/accomplishments/records/TD4SSS4WS7G6',
        img: './about/python.png'

    },
    {
        id: 6,
        name: 'SQL For Data Science',
        link: 'https://www.coursera.org/account/accomplishments/records/TD4SSS4WS7G6',
        img: './about/sqlcert.png'

    },
    {
        id: 7,
        name: 'Life Cycle Assesment',
        link: 'https://www.coursera.org/account/accomplishments/verify/PVD9M2JSJVK3',
        img: './about/life.png'

    },
]

export default function About() {
    return (
        <div className=' w-full flex flex-col justify-center items-center gap-16 mt-32 '>
            <motion.div className='w-[70%]  bg-slate-100x'

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
                <div className="flex-col flex gap-10">
                    <h1 className="  text-[#42446E]  text-5xl font-bold flex justify-center"> About Me</h1>
                    <p className='text-[#666666] text-xl'>{'Engineer, with a strong sense of detail and organization, passionate about the industrial processes, energy, and environment sector. Experienced in optimizing systems and processes to enhance efficiency and sustainability. Skilled in project management, data analysis, and problem-solving. Committed to driving innovation and making a positive impact on both industry and the environment.'}</p>
                </div>
            </motion.div>
            <motion.div className='w-[70%]  bg-sflate-100 gap-14 flex flex-col'

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
                <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center">Education</h1>
                {
                    EducationData.map((item: any) => (
                        <div key={item.id} className="flex-col flex gap-14 ">
                            <div className='flex justify-between '>
                                <div className="flex flex-col gap-4 ">
                                    <h1 className='text-[#666666] text-3xl'>{item.filier}</h1>
                                    <div className="flex space-x-24 text-[#A7A7A7] font-medium text-xl">
                                        <div className='flex space-x-4'>
                                            <img src='./about/education.svg' />
                                            <h2 className=''>{item.school}</h2>
                                        </div>
                                        <div className='flex space-x-4'>
                                            <img src='./about/local.svg' />
                                            <h2 className=''>{item.local}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col h-full items-center bg-slfate-400 gap-4">
                                    <div className='bg-[#D7FFE0] p-1 w-36 rounded-full text-[#018C0F] flex justify-center items-center font-semibold'>Full Time</div>
                                    <div className="flex  h-full space-x-4">
                                        <img src='./about/date.svg' />
                                        <h2 className='text-[#A7A7A7] font-medium text-xl'>{item.date}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-1 bg-[#EBEAED]' />
                        </div>
                    ))
                }
            </motion.div>


            <motion.div className='w-[70%]  bg-sflate-100 gap-14 flex flex-col'

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
                <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center">Experience</h1>
                {
                    Experience.map((item: any) => (
                        <div key={item.id} className="flex-col flex gap-14 ">
                            <div className='flex justify-between '>
                                <div className="flex flex-col gap-4 ">
                                    <h1 className='text-[#666666] text-3xl'>{item.post}</h1>
                                    <div className="flex space-x-24 text-[#A7A7A7] font-medium text-xl">
                                        <div className='flex space-x-4'>
                                            <img src='./about/education.svg' />
                                            <h2 className=''>{item.company}</h2>
                                        </div>
                                        <div className='flex space-x-4'>
                                            <img src='./about/local.svg' />
                                            <h2 className=''>{item.local}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col h-full items-center bg-slfate-400 gap-4">
                                    <div className='bg-[#D7FFE0] p-1 w-36 rounded-full text-[#018C0F] flex justify-center items-center font-semibold'>Full Time</div>
                                    <div className="flex  h-full space-x-4">
                                        <img src='./about/date.svg' />
                                        <h2 className='text-[#A7A7A7] font-medium text-xl'>{item.date}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-1 bg-[#EBEAED]' />
                        </div>
                    ))
                }
            </motion.div>


            <motion.div className='w-[70%]  bg-sflate-100 gap-14 flex flex-col p-6'

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
                <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center">Certifications</h1>
                <div className="flex-wrap flex w-full h-auto gap-14 justify-center ">
                    {
                        certificationsData.map((item: any) => (
                            <Link href={item.link} key={item.id} className='h-80 w-80 bg-white shadow-xl shadow-gray-200 rounded-xl flex-col hover:scale-110 duration-300'>
                                <div className="h-[90%]  rounded-t-xl"><img className='w-full h-full' src={item.img} /></div>
                                <div className="h-[10%]  items-center ">
                                    <h1 className=' font-medium text-gray-600 text-xl flex justify-center'>{item.name}</h1>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    )
}
