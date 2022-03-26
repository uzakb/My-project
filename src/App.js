import './App.css';
import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"


function App() {
  const carsArray = [
    {
      title: "продаю Audi",
      price: 5000,
      description:"exdtcrfyvtgubhyniujmk",
      img: "https://cdn.motor1.com/images/mgl/v11Lb/s1/4x3/audi-a3-limousine-2020.webp"
    },
    {
      title: "продаю bmw",
      price: 500,
      description:"exdtcrfyvtgubhyniujmk",
      img: "https://www.bmw.kg/content/dam/bmw/common/all-models/i-series/i4/navigation/bmw-i4-mini-landingpage-modelfinder.png"
    },
    
    {
      title: "продаю Honda",
      price: 8000,
      description:"exdtcrfyvtgubhyniujmk",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/2018_Honda_CR-V_%28RW_MY18%29_%2BSport_2WD_wagon_%282018-10-22%29_01.jpg"
    },
  ]
  return (
    <div className="App">
      <Header />
      <div className='container mt-5'>
        <div className='row justify-content-between'>
          {
          carsArray.map((item) =><Card 
           title={item.title}
           price={item.price}
           img={item.img}
           description={item.description}
           />)
          }
        </div>

      </div>
      <Footer/>

    </div>
  );
}

export default App;
