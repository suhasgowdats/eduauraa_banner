import './App.css';
import Banner from './Components/Banner';
import ImgSlider from './Components/ImgSlider';
import Nav from './Components/Nav';

function App() {
  return (
    <div className='App' >
      <Nav/>
      <Banner/>
      <ImgSlider/>
    </div>
  );
}

export default App;
