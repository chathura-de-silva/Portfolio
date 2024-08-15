import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaHandshake } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
          <h1 className='heading lg:max-w-[45vw]'>
          Let&apos;s Connect and  <span className='text-purple'>Create</span> Together!
          </h1>
          <p className='text-white-200 md:mt-10 my-5 text-center'>
            Connect with me on LinkedIn...
          </p>
          <a href='http://linkedin.com/in/chathuradsilva' target="_blank">
            <MagicButton
            title='Connect Now'
            icon={<FaHandshake/>}
            position='right'
            />
          </a>
        </div>
       <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='text-sm font-light'>
        Built in 💙 with NextJS,Aceternity UI, Framer Motion and Tailwind CSS
        </p>
        <div className='flex items-center md:gap-3 gap-6 pt-3' >
        {socialMedia.map((profile) => (
          <a href={profile.link} target='_blank' key={profile.id}><div  className='w-10 h-10 cursor-pointer flex justify-center items-center
          backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
            <img
            src={profile.img}
            alt={"Profile Image"}
            width={20} height={20}
            />
          </div></a>
        ))}
        </div>
       </div>
    </footer>
  )
}

export default Footer