import React from 'react'
import Header from "../components/common/Header";
import ProductsServices from '../components/page2';
function EvTechPage() {
  return (
    <div>
     <Header/>
     <div className="automations-div">
        <ProductsServices/>
        <h2>EV-Tech</h2>
      </div>
    </div>
  )
}

export default EvTechPage