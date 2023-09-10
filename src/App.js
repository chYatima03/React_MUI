// import logo from './logo.svg';
import './App.css';
// import MiniDrawer from './components/Sidenav';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
// import About from './pages/About';
import SettingPage from './pages/SettingPage';
import Analytics from './pages/Analytics';
import Products from './pages/Products';
// import ProductList from './pages/Products/ProductList';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/products' exact element={<Products />}></Route>
      <Route path='/analytics' exact element={<Analytics />}></Route>
      <Route path='/setting' exact element={<SettingPage />}></Route>
    </Routes>
    </BrowserRouter>
    {/* <MiniDrawer /> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;



