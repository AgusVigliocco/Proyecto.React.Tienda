import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'



const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
};

export default App;
