import React from 'react'
import FeatureComponent from '../../components/Product/FeatureComponent'
import { GiMonsteraLeaf } from 'react-icons/gi'
import { MdSolarPower, MdWifiTethering } from 'react-icons/md'
import { BsBackpack2Fill } from 'react-icons/bs'

function Feats():React.ReactElement {
  return (
    <main className='px-6 md:px-4 py-10 h-max' id='Feats'>
      <h2 className='pt-10 font-semibold text-4xl text-center'>What Makes EcoCharge the Best Choice?</h2>
      <article  className='flex md:flex-row flex-col flex-wrap justify-between items-center gap-4 md:gap-2 py-36'>
        <FeatureComponent title="Eco-Friendly energy" description="Our solar panels use renewable energy to power your devices sustainably.">
          <GiMonsteraLeaf
            size={50}
            className="group-hover:text-green-700 dark:group-hover:text-green-500 group-active:text-green-700 dark:group-active:text-green-500 text-gray-400 text-center group-hover:scale-125 group-active:scale-125 transition-all duration-200"
          />
        </FeatureComponent>

        <FeatureComponent title="Mobile Connectivity" description="Stay connected with WiFi and charging capabilities wherever you are.">
          <MdWifiTethering
            size={50}
            className="group-hover:text-green-700 dark:group-hover:text-green-500 group-active:text-green-700 dark:group-active:text-green-500 text-gray-400 text-center group-hover:scale-125 group-active:scale-125 transition-all duration-200"
          />
        </FeatureComponent>

        <FeatureComponent title="Portable Power" description="Compact and easy-to-carry, EcoCharge fits your adventurous lifestyle.">
          <BsBackpack2Fill
            size={50}
            className="group-hover:text-green-700 dark:group-hover:text-green-500 group-active:text-green-700 dark:group-active:text-green-500 text-gray-400 text-center group-hover:scale-125 group-active:scale-125 transition-all duration-200"
          />
        </FeatureComponent>

        <FeatureComponent title="Solar Efficiency" description="High-efficiency panels that maximize energy output even in low light conditions.">
          <MdSolarPower
            size={50}
            className="group-hover:text-green-700 dark:group-hover:text-green-500 group-active:text-green-700 dark:group-active:text-green-500 text-gray-400 text-center group-hover:scale-125 group-active:scale-125 transition-all duration-200"
          />
        </FeatureComponent>
      </article>
    </main>
  )
}

export default Feats