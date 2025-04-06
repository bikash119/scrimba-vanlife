import aboutPageHero from '/about-page-hero.png'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'

export default function About() {
    return (
      <>
        <main className="about-page">
          <section className="about-page-hero-image" style={{backgroundImage: `url(${aboutPageHero})`}}>
          </section>
  
          <section className="about-page-content">
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)</p>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          </section>
          <section className="about-page-cta">
            <h1>Your destination is waiting. Your van is ready.</h1>
            <Button className="about-page-cta-button">Explore our vans</Button>
          </section>
        </main>
        <Footer />
      </>
    )
  }