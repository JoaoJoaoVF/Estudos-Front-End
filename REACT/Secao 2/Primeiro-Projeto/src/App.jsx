import React from "react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from "../data"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/


export default function App() {
  // <Hero />
  const dataElements = Data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />)
  })
  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {dataElements}
      </section>
    </div>
  )
}
