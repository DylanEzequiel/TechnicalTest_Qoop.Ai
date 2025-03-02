import React from 'react'

function Pricing():React.ReactElement {
  return (
    <article>
      <main><h2 className='pt-10 font-semibold text-4xl text-center'>Flexible Solar Plans for Every Lifestyle</h2></main>
      <aside className='flex flex-row'>
        <div className='group flex flex-col items-center gap-4 bg-orange-700/40 shadow-gray-600 shadow-md focus:shadow-lg hover:shadow-lg dark:shadow-gray-300 p-4 rounded-b-sm hover:scale-105 active:scale-110 duration-200'> 
          <h3 className='font-semibold text-xl' >"EcoCharge Basic"</h3>  
          <b> Precio: $19.99/mes </b>
          <p>Características: "Access to solar energy for small devices, limited battery storage."</p>
          </div>
        <div> 
          <h3> EcoCharge Standard</h3>
          <b>Precio: $39.99/mes</b>
          <p>Características: "Upgraded storage, power for mid-sized devices, portable charger included."</p>

          </div>

        <div> 
          <h3>"EcoCharge Premium"</h3> 
          <b>Precio: $59.99/mes</b>
          <p>Características: "Unlimited power, fast charging, portable solar panel, premium support."     </p>
          </div>
      </aside>
    
    </article>
  )
}

export default Pricing