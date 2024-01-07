import './App.css';
import Startbar from './Componentes/Startbar';
import Galeria from './Componentes/Galeria';
import Media from './Componentes/Media';
import Redes from './Componentes/Redes';
import Contacto from './Componentes/Contacto';
import { Route, Routes } from 'react-router-dom';
<link href='https://cdnjs.cloudflare.com/ajax/libs/font-awsome/5.13.0/css/all.min.css' rel='stylesheet0'></link>



function App() {
  return (
    
      <div>
       
        <Routes>
          <Route path='/' element={<Startbar/>}>
            <Route path='/' element={<Galeria/>}/>
            <Route path='media'element={<Media/>}/>
            <Route path='redes'element={<Redes/>}/>
            <Route path='contacto'element={<Contacto/>}/>
          </Route>
        </Routes>

      </div>
  );
}

export default App;
