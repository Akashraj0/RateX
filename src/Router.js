import React from 'react'
import Exhistory from './Exhistory';
// import CurrencyTable from './CurrencyTable';
import Footer from './Footer';
import Calculator from './Calculator';
const Router = () => {
  return (
    <div>
      <Calculator/>
      {/* <CurrencyTable/> */}
      <Exhistory/>
      <Footer/>
    </div>
  )
}

export default Router