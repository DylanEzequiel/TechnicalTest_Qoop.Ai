import React from 'react'
import ProductsComponent from '../../components/Product/ProductsComponent'
import { GiMonsteraLeaf } from 'react-icons/gi'
import { MdSolarPower, MdWifiTethering } from 'react-icons/md'
import { BsBackpack2Fill } from 'react-icons/bs'

function Products():React.ReactElement {
  return (
    <main className='flex md:flex-row flex-col flex-wrap justify-between items-center gap-4 md:gap-2 px-6 md:px-4 py-40 h-max'>
      <ProductsComponent title="Eco-Friendly energy" description="Our solar panels use renewable energy to power your devices sustainably.">
        <GiMonsteraLeaf
          size={40}
          className="group-hover:text-green-400 group-active:text-green-400 text-center group-hover:scale-125 group-active:scale-125 transition-all duration-200"
        />
      </ProductsComponent>

      <ProductsComponent title="Mobile Connectivity" description="Stay connected with WiFi and charging capabilities wherever you are.">
        <MdWifiTethering
          size={40}
          className="group-hover:text-green-400 group-active:text-green-400 text-center group-hover:scale-125 group-active:scale-125 transition-all duration-200"
        />
      </ProductsComponent>

      <ProductsComponent title="Portable Power" description="Compact and easy-to-carry, EcoCharge fits your adventurous lifestyle.">
        <BsBackpack2Fill
          size={40}
          className="group-hover:text-green-400 group-active:text-green-400 text-center group-hover:scale-125 group-active:scale-125 transition-all duration-200"
        />
      </ProductsComponent>

      <ProductsComponent title="Solar Efficiency" description="High-efficiency panels that maximize energy output even in low light conditions.">
        <MdSolarPower
          size={40}
          className="group-hover:text-green-400 group-active:text-green-400 text-center group-hover:scale-125 group-active:scale-125 transition-all duration-200"
        />
      </ProductsComponent>
    </main>
  )
}

export default Products