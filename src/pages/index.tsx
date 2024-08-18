import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'

// @ts-ignore
import projectimage from '../assets/project-image.png'





const IndexPage: React.FC<PageProps> = () => {

  if (typeof window !== 'undefined') {
    console.log('we are running on the client')
  } else {
      console.log('we are running on the server');
  }

  return (
    <div className="flex flex-col">
      <Header />
      <main className="pt-20">
        <img src={projectimage} className="border-2 border-slate-300 dark:border-slate-600 mt-12 rounded-lg"></img>
        <h1 className="text-center mt-8 text-2xl">Consulting for Business and Small Business</h1>
        <div className="flex flex-col mx-auto w-fit mt-8">
          <a className='Button2 rounded-md py-2 px-5 text-white dark:text-black bg-slate-500 dark:bg-[#7d87bc] hover:bg-slate-400 dark:hover:bg-[#6f79a9] hover:cursor-pointer'>Get in Touch Now!</a>
          <a href="https://habit-tracker-indol-ten.vercel.app/" className="Link2 mt-4 underline text-blue-400 mx-auto">Alternate Action</a>
        </div>
        <h1 className="text-center text-xl mt-8">Services Offered:</h1>
        <ul className="mx-auto w-fit mt-3">
          <li>- Website Creation and Renovation</li>
          <li>- Calendar, Email and Data Management</li>
          <li>- Advertising and Marketing</li>
        </ul>
        <h1>Current and Previous Clients:</h1>
        <ul className="w-fit mx-auto flex flex-col">
          <a href="https://forwardstep.org" className="Link3" target="_blank">Forward Step Tutoring</a>
          <a href="https://www.theexcelexperts.com" className="Link3" target="_blank">The Excel Experts</a>
        </ul>
      </main>
      <Footer />

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Landing Page</title>
