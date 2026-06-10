import React from 'react'
import CountUp from './Counter'

const DataSection = () => {
  return (
    <div className='w-screen flex overflow-visible justify-center items-center text-white relative -top-36'>
        <img
                src="/images/Gradients/EyeSection/top-left.png"
                className=" overflow-hidden absolute -left-18 top-16 w-[30vw] h-[50vw] z-10 pointer-events-none"
            />


        <div className='p-12 rounded-2xl w-[80vw] h-full flex flex-col md:flex-row justify-center items-center gap-14
                bg-cyan-900/30
                border border-cyan-300/20
          
                transition-all
                duration-300
                
                shadow-[inset_0_8px_12px_rgba(0,0,0,0.6),inset_0_-8px_12px_rgba(0,255,255,0.4)]

        '>
            <div className=' gap-2 h-full flex flex-col justify-center items-center'>
                <h1 className='font-heading text-4xl md:text-5xl'><CountUp from={0} to={5} duration={1}/> sec</h1>
                <p className='font-body font-'>Average Verdict Time</p>
            </div>
            <div className=' gap-2 h-full flex flex-col justify-center items-center'>
                <h1 className='font-heading text-4xl md:text-5xl'><CountUp from={0} to={3} duration={1}/> AI-Models</h1>
                <p className='font-body font-'>On Verification System</p>
            </div>
            <div className=' gap-2 h-full flex flex-col justify-center items-center'>
                <h1 className='font-heading text-4xl md:text-5xl'><CountUp from={0} to={5} duration={1}/> Sources</h1>
                <p className='font-body font-'>Per Claim with Explaination</p>
            </div>
            <div className=' gap-2 h-full flex flex-col justify-center items-center'>
                <h1 className='font-heading text-4xl md:text-5xl'><CountUp from={0} to={1} duration={1}/> HotKey</h1>
                <p className='font-body font-'>Instant Run : Ctrl+Shift+L</p>
            </div>
        </div>
    </div>
  )
}

export default DataSection