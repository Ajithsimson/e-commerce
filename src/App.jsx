import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Products from './Components/Products'
import AOS from 'aos'
import "aos/dist/aos.css"
import TopProducts from './Components/TopProducts'
import Banner from './Components/Banner'
import Subscribe from './Components/Subscribe'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Popup from './Components/Popup'
import Product1 from './Components/Product1'

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
     <Navbar handleOrderPopup={handleOrderPopup}/>
     <Hero handleOrderPopup={handleOrderPopup}/>
     <Products/>
     <TopProducts handleOrderPopup={handleOrderPopup}/>
     <Banner/>
     <Subscribe/>
     <Product1/>
     <Testimonials/>
     <Footer/>
     <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App
