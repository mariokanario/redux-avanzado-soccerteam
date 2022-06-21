import { Provider } from 'react-redux';
import store from './reducers';
import './App.css';
import Jugadores from './components/Jugadores';
import Titulares from './components/Titulares';
import Suplentes from './components/Suplentes';


function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Jugadores />
        <Titulares />
        <Suplentes />
      </div>
    </Provider>
  );
}

export default App;
