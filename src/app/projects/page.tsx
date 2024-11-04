'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

const projectsData = [
  {
    id: 1,
    name: 'ECO-DESIGN AND LIFE CYCLE ASSESSMENT ON THE MANUFACTURE OF AN AUTOMOTIVE PART',
    description: `This project focuses on implementing eco-design principles and conducting a life cycle assessment (LCA) for the manufacturing process of a crucial automotive component: the car hood, made from both aluminum and steel. By integrating eco-design principles, the aim is to optimize the manufacturing process to minimize environmental impacts while maintaining product quality and performance standards. The LCA will provide a comprehensive evaluation of the environmental footprint associated with the production, use, and end-of-life stages of the car hood, offering valuable insights for sustainable decision-making in automotive manufacturing.`,
    stack: 'LCA, OpenLCA ...',
    link: 'https://drive.google.com/file/d/1rCYKX-cKLM8-TavXbf0KQ1gNOue-U8jd/view?usp=sharing',
    img: './projects/automotive.jpg'
  },
  {
    id: 2,
    name: 'Designing a CO2 Chemical Conversion Facility: Sizing and Implementation',
    description: `Explore the intricacies of designing and implementing a cutting-edge CO2 chemical conversion facility in this project. Dive into the methodologies and considerations involved in sizing such an installation, from conceptualization to execution. This project delves into the technical, environmental, and economic aspects crucial for creating a sustainable solution to CO2 management.`,
    stack: 'prosimplus,  ...',
    link: '',
    img: './projects/co2.jpg'
  },
  {
    id: 3,
    name: 'Sales dashboard',
    description: `This project entails the comprehensive design and construction of a solar water heater system. From initial conceptualization to final implementation, the focus is on creating an efficient and sustainable solution for heating water using solar energy. The project involves selecting appropriate materials, designing the system layout, integrating solar panels and heating elements, and ensuring safety and functionality. Through meticulous planning and execution, the goal is to develop a reliable and cost-effective solar water heating system capable of harnessing renewable energy to meet domestic or industrial hot water needs while reducing carbon footprint.`,
    stack: '  ...',
    link: 'https://drive.google.com/file/d/1aaiar8lEE1kCNPwLyzMAVuWJszRXsxlm/view?usp=sharing',
    img: './projects/bi.jpg'
  },
  {
    id: 4,
    name: 'Data-Driven Fare Estimation: Empowering New York City Taxi Services',
    description: `Background:
    Automatidata specializes in leveraging client data to craft tailored solutions, ranging from performance dashboards to strategic business insights. Collaborating closely with clients, they transform dormant data into actionable tools that drive efficiency and innovation.
    
    Project Overview:
    In collaboration with the New York City Taxi and Limousine Commission (TLC), Automatidata is tasked with developing a regression model to predict taxi fares prior to rides. The TLC, responsible for licensing and regulating NYC's taxi cabs and for-hire vehicles, aims to enhance fare estimation accuracy using data from over 200,000 licensees and approximately one million daily trips.
    
    Tasks at This Stage:
    As the TLC project nears completion, Automatidata focuses on the following tasks:
    
    Determining the optimal modeling approach.
    Constructing a regression model tailored to the project's objectives.
    Finalizing checks on model assumptions to ensure validity.
    Evaluating the model's performance against established metrics.
    Interpreting model outcomes and presenting key findings to TLC stakeholders.
    Note: The dataset utilized in this project is for instructional purposes and may not accurately reflect real-world behavior of NYC taxi riders.`,
    stack: '  ...',
    link: 'https://github.com/ayoubbbbboussairi/automatida_project/blob/main/automatidaproject.ipynb',
    img: './projects/automatida.png'
  },
  {
    id: 5,
    name: ' Exploring Correlations in Movie Data',
    description: `analyzing vast datasets to uncover hidden correlations and patterns. From box office success to critical acclaim, this project explores how various factors such as genre, budget, cast, and release date impact a movie's performance. By employing advanced statistical techniques, the project aims to provide valuable insights for filmmakers, producers, and movie enthusiasts alike. Join us as we unravel the mysteries behind what makes a blockbuster and decode the secrets of cinematic success`,
    stack: '  ...',
    link: 'https://github.com/ayoubbbbboussairi/Linear-Regression-Analyzing-Ecommerce-Client-Preferences',
    img: './projects/corr.jpg'
  },
  {
    id: 6,
    name: 'Deciphering Customer Trends: Exploring E-commerce Client Preferences through Linear Regression',
    description: `In this project, we delve into the realm of e-commerce by employing linear regression analysis to dissect customer preferences. By scrutinizing various factors such as browsing habits, device usage, and membership duration, we aim to uncover insights that can inform strategic decisions for e-commerce businesses. Join us as we navigate through data-driven exploration to understand what drives customer behavior in the digital marketplace.`,
    stack: '  ...',
    link: 'https://github.com/ayoubbbbboussairi/Linear-Regression-Analyzing-Ecommerce-Client-Preferences',
    img: './projects/ecom.jpg'
  },
  {
    id: 6,
    name: 'Design and implementation of a solar water heater',
    description: `This project entails the comprehensive design and construction of a solar water heater system. From initial conceptualization to final implementation, the focus is on creating an efficient and sustainable solution for heating water using solar energy. The project involves selecting appropriate materials, designing the system layout, integrating solar panels and heating elements, and ensuring safety and functionality. Through meticulous planning and execution, the goal is to develop a reliable and cost-effective solar water heating system capable of harnessing renewable energy to meet domestic or industrial hot water needs while reducing carbon footprint.`,
    stack: '  ...',
    link: '',
    img: './projects/eau.jpg'
  },
  // {
  //   id: 2,
  //   name: 'IMPLEMENTATION OF ECO-DESIGN AND LIFE CYCLE ASSESSMENT ON THE MANUFACTURE OF AN AUTOMOTIVE PART',
  //   description: `This project focuses on implementing eco-design principles and conducting a life cycle assessment (LCA) for the manufacturing process of a crucial automotive component: the car hood, made from both aluminum and steel. By integrating eco-design principles, the aim is to optimize the manufacturing process to minimize environmental impacts while maintaining product quality and performance standards. The LCA will provide a comprehensive evaluation of the environmental footprint associated with the production, use, and end-of-life stages of the car hood, offering valuable insights for sustainable decision-making in automotive manufacturing.`,
  //   stack: 'LCA, OpenLCA ...',
  //   link: 'https://drive.google.com/file/d/1rCYKX-cKLM8-TavXbf0KQ1gNOue-U8jd/view?usp=sharing',
  // },
  // {
  //   id: 3,
  //   name: 'Project Tile goes here',
  //   description: `This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content`,
  //   stack: 'js, ts, nest ...',
  //   link: '',
  // },
  // {
  //   id: 4,
  //   name: 'Project Tile goes here',
  //   description: `This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content`,
  //   stack: 'js, ts, nest ...',
  //   link: '',
  // },
  // {
  //   id: 5,
  //   name: 'Project Tile goes here',
  //   description: `This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content`,
  //   stack: 'js, ts, nest ...',
  //   link: '',
  // },
]

export default function Projects() {

  const [selectPj, setSelectPj] = useState(0);

  return (
    <div className='mt-32 w-full flex flex-col justify-center items-center'>
      <div className='w-[70%]  bg-slate-100x'>
        <div className="flex-col flex gap-10 ">
          <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center">Projects</h1>
          <h2 className='text-[#666666] justify-center text-xl flex'>{`Things I’ve built so far`}</h2>
        </div>
        {
          !selectPj ? <div className="mt-14 bg-slafte-500 flex-wrap flex w-full h-auto gap-14 justify-center">
            {
              projectsData.map((item: any) => (
                <motion.div key={item.id} className='h-[500px] w-80 bg-white shadow-lg shadow-gray-200 rounded-xl flex-col'

                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 20,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                >
                  <div className="h-full w-full">
                    <div className="h-[45%] rounded-t-xl"><img className='w-full h-full rounded-t-xl' src={item.img} /></div>
                    <div className="h-auto flex flex-col items-center overflow-hidden  p-2">
                      <h1 className=' font-medium text-2xl bg-slafte-400 mt-2'>{item.name}</h1>
                      <p className=' text-lg flexf line-clamp-5 text-center  text-[#666666] font-light'>{item.description}</p>
                      <div className='flex gap-4 bg-slate-400'>
                        <button onClick={() => setSelectPj(item.id)}>more info</button>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-between p-4 bg-slate-400 w-full h-[5%] items-center'>
                    <div className='flex space-x-2'>
                      <img className='' src="./projects/view.svg" />
                      <a href={''} className=' font-semibold underline'>Live Preview</a>
                    </div>
                    <div className='flex space-x-2'>
                      <img className='' src="./projects/git.svg" />
                      <a href={item.link} className=' font-semibold underline'>View Code</a>
                    </div>
                  </div>
                </motion.div>
              ))
            }
          </div> : <div className="w-full mt-10 h-[400px] bg-[#F8F3F3] shafdow-lg roundedf-xl sfhadow-sky-400">
            <div className="w-full h-12 flex justify-between items-center  bg-slfate-400">
              <h1 className='ml-4 text-xl'>Name project</h1>
              <button className='mr-4' onClick={() => setSelectPj(0)}><img src='./projects/cancel.svg' /></button>
            </div>
            <div className="w-full h-full flex bg-shlate-600">
              <div className=" p-4 w-[40%] bgj-slate-200 flex-col flex justify-center items-center">
                <img className='w-[300px] h-[300px] rounded-t-xl' src={'./projects/inception.jpg'} />
              </div>
              <div className="w-[60%] bjg-slate-300"> info ...</div>
            </div>
          </div>
        }
      </div>
    </div>)
}
