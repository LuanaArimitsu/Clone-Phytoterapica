import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import OleoEssen from './Componentes/OleoEssen'
import OleoVege from './Componentes/OleoVege';
import Sinergia from './Componentes/Sinergia';
import CosmeNatu from './Componentes/CosmeNatu';
import HigiPesso from './Componentes/HigiPesso';
import Aromatizadores from './Componentes/Aromatizadores';
import Acessorios from './Componentes/Acessorios';

function App() {
  return (
    <body>
      <Router>
        <Header />

        <Routes>
          <Route path='/OleoEssen' element={<OleoEssen />} />
          <Route path='/OleoVege' element={<OleoVege />} />
          <Route path='/Sinergia' element={<Sinergia />} />
          <Route path='/CosmeNatu' element={<CosmeNatu />} />
          <Route path='/HigiPesso' element={<HigiPesso />} />
          <Route path='/Aromatizadores' element={<Aromatizadores />} />
          <Route path='/Acessorios' element={<Acessorios />} />
        </Routes>

        <Footer />
      </Router>
    </body>
  );
}

export default App;
