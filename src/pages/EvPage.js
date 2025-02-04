import React from 'react'
import Header from '../components/common/Header'
import ProductsServices from '../components/page2'

function EvPage() {
  return (
    <div>
     <Header/>
     <div className="automations-div">
        <ProductsServices />
        <h2>EV</h2>
      </div>
    </div>
  )
}

export default EvPage