import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import events from "../utils/events"
import Card from "../components/Card"
import Profile from "../components/Profile"
import eventHeads from "../utils/profile"
import Tilt from "react-parallax-tilt"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Technunctus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid sm:grid-cols-[0.6fr,0.25fr] items-center "
        style={{height:"calc(100vh - 92px)"}}
      >
         <div className="sm:p-20 text-center sm:text-left">
           <motion.p className="text-xl sm:text-3xl text-white"> Lorem Ipsum is simply dummy .</motion.p>
           <motion.p className="text-5xl sm:text-9xl gradientText font-bold"> Technunctus</motion.p>
           <button className="gradientButton mt-4">Technunctus</button>
         </div>
         <div className='hidden sm:block relative'>
           <Image
             src="/static/logo.png"
             alt="Technunctus Logo"
             layout='fixed'
             height={"400"}
             width={"400"}
             objectFit='contain'
            />
         </div>
      </div>

      <div className="mb-12 sm:mb-40 grid place-items-center">
        <div className="bg-black mx-8 sm:mx-20 rounded ">
            <div className='grid sm:grid-cols-[0.3fr,0.7fr] justify-center  items-center'>
              <div className="h-80 sm:h-full relative gradientRightBorder">
                <Image 
                  src="https://images.unsplash.com/photo-1518709911915-712d5fd04677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVuZXJneXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
                  alt="About Team "
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 sm:p-12">
                <p className='text-3xl mb-8'>Word From Team</p>
                <p className='text-sm sm:text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <Link
                  href="/a"
                >
                  <a className="gradientButton inline-block mt-4">Read More</a>
                </Link>
              </div>
            </div>
        </div>
      </div>


      <div className="mb-20 grid place-items-center">
        <div className="text-center text-2xl sm:text-3xl">
          <p>Title Sponsors</p>
          <div>
            <Link
              href="/titlesponsorswebsite"
            >
              <a className='flex justify-center text-6xl sm:text-7xl m-4'>
                  <KeyboardCommandKeyIcon className="text-6xl sm:text-7xl text-[#39ff14]"/>
                  <p className="ml-4 font-semibold">Android</p>
              </a>
            </Link>
            <p>Marsh McLennan Global Services India Pvt Ltd</p>
          </div>
        </div>
      </div>


      <div className="sm:h-screen grid place-items-center">
        <div>
          <p className='text-3xl my-8 text-center'>Events</p>
          <div className='grid sm:grid-cols-4 gap-8 mx-8 sm:mx-20'>
            {events.slice(0,4).map((item,index)=>{
              return(
                <Card key={index} {...item}/>
              )
            }) }
          </div>
          <Link href="/e">
            <a className="hover:text-underline text-center block my-4">Click Here to load more</a>
          </Link>
        </div>
      </div>

      <div className="container">
            <p className="glitch">
              <span aria-hidden="true">Let&apos;s do it</span>
              Let&apos;s do it
              <span aria-hidden="true">Let&apos;s do it</span>
            </p>
      </div>

      <motion.div className="sm:h-screen grid place-items-center">
        <div>
          <p className='text-3xl my-8 mr-8 text-center'>Team Members</p>
          <div className='grid sm:grid-cols-3 gap-8 mx-8 sm:mx-20'>
            {eventHeads.slice(0,5).map((item,index)=>{
              return(
                <Tilt key={item.key}>
                  <Profile {...item}/>
                </Tilt>
              )
            }) }
            <Link
              href="/t"
              passHref={true}
            >
              <motion.a 
                whileTap={{scale:0.95}}
                className='m-1 grid place-items-center border border-[#00ffff] rounded'>
                  <p>See More...</p>
              </motion.a>
            </Link>
          </div>
        </div>
      </motion.div>


    </div>
  )
}
