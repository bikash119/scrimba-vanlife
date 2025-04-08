import homePageBg from '/home-page-bg.png'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'

export default function Home() {
    return (
      <>
        <main className="home-page" style={{backgroundImage: `url(${homePageBg})`}}>
          <section>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </p>
            <Button className="home-page-button">Find your van</Button>
          </section>
        </main>
      </>
    )
  }