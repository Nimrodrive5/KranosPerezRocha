
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  const onAdd = (count) =>{
    alert (`Felicidades, has agregado ${count} articulos a tu carrito`);
  }

  return (
    <>
    <NavBar />
    <ItemListContainer />
    <ItemCount initial = {1} max ={5} onAdd = {onAdd}/>
    </>
  );
}

export default App;
