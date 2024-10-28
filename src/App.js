import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting= "Bienvenido a La Cueva" />
    </>
  );
}

export default App;
