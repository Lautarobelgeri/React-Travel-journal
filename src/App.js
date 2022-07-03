import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import data from "./data"
import index from "./index.css"
import Footer from "./Components/Footer"

export default function App() {
  const cards = data.map(item =>{
    return(
      <Hero
        key ={item.id}
        item ={item}
      />
    )
  })
  return (
      <div>
          <Navbar />
          <section>
            {cards}
          </section>
          <Footer />
      </div>
  )
}