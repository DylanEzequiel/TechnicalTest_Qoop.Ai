import React from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

function ParallaxBackground(): React.ReactElement {
    const { scrollYProgress } = useViewportScroll()

    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]) 

    return (
        <div className="z-40 fixed w-full h-screen overflow-hidden">
            <motion.svg
                id="visual"
                viewBox="0 0 900 2000"
                className="top-0 left-0 absolute w-full h-full"
                style={{ y: parallaxY }}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <rect x="0" y="0"  className='fill-transparent w-full h-full'></rect>
                <g fill="#4dad658b">
                    <circle r="189" cx="100" cy="500"></circle>
                    <circle r="71" cx="200" cy="1435"></circle>
                    <circle r="81" cx="300" cy="1182"></circle>
                    <circle r="101" cx="400" cy="1955"></circle>
                    <circle r="86" cx="500" cy="1949"></circle>
                    <circle r="124" cx="600" cy="799"></circle>
                    <circle r="95" cx="700" cy="152"></circle>
                    <circle r="143" cx="800" cy="916"></circle>
                    <circle r="92" cx="900" cy="89"></circle>
                    <circle r="75" cx="1000" cy="1606"></circle>
                    <circle r="130" cx="1100" cy="1361"></circle>
                    <circle r="110" cx="1200" cy="450"></circle>
                    <circle r="130" cx="1300" cy="1300"></circle>
                    <circle r="90" cx="1400" cy="1000"></circle>
                    <circle r="80" cx="1500" cy="800"></circle>
                    <circle r="115" cx="1600" cy="600"></circle>
                    <circle r="100" cx="1700" cy="1200"></circle>
                    <circle r="85" cx="1800" cy="1100"></circle>
                    <circle r="120" cx="1900" cy="500"></circle>
                </g>
            </motion.svg>

          
        </div>
    )
}

export default ParallaxBackground
