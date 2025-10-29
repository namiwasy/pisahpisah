import React from 'react'
import Header from './header'
import Banner from './banner'
import Maincontent from './maincontent'
import Left from './left'
import Right from './right'
import Lowcontent from './lowcontent'
import Footer from './footer'
export default function page() {
  return (
    <div>
      <div className="bg-gray-100">

      <Header />
      <div className="flex">
        <Left />

        <div>
          <Banner />
          <Maincontent />
          <Lowcontent />
        </div>

        <Right />
      </div>
      <Footer />

      </div>
    </div>
  );
}

