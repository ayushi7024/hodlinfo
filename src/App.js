import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Belowheader from './Components/Belowheader';
import CryptoList from './Components/cryptolist';


function App() {
  return (
    <div className="App">
      <Header />
      <Belowheader/>
      <main>
        <CryptoList/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
