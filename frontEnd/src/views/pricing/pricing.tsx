import React from 'react'
import PriceComp from '../../components/PriceComp/PriceComp'

function Pricing():React.ReactElement {
  return (
    <article className='py-10' id='Pricing'>
      <main><h2 className='pt-10 font-semibold text-4xl text-center'>Flexible Solar Plans for Every Lifestyle</h2></main>
      <aside className='flex flex-row flex-wrap justify-center gap-6 p-4 py-20'>
        <PriceComp title="Basic" price='$19.99' desc='Access to solar energy for small devices, limited battery storage.' characteristics={["Solar-Powered Charging", "Limited Battery Storage", "Entry-Level Plan","Eco-Friendly Solution"]} bestseller={false}/>


        <PriceComp title="Standard" price='$39.99' desc='Upgraded storage, power for mid-sized devices, portable charger included.' characteristics={["Enhanced Battery Storage", "Mid-Sized Device Support", "Portable Charger Included","Balanced Performance & Price"]} bestseller={true}/>

        <PriceComp title="Premium" price='$59.99' desc='Unlimited power, fast charging, portable solar panel, premium support.' characteristics={["Unlimited Power ", "Fast Charging  ", "Portable Solar Panel ", "Premium Support ","Best for High Energy Demands"]} bestseller={false}/>

      </aside>
    
    </article>
  )
}

export default Pricing