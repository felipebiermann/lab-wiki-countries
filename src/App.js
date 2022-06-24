import './App.css';
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      Salve
      <Navbar />
      <CountriesList />
      <CountryDetails />
    </div>
  );
}

export default App;
