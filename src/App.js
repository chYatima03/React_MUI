// import logo from './logo.svg';
import './App.css';
// import MiniDrawer from './components/Sidenav';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import Home from './pages/home';
// import About from './pages/About';
import Dashboad from './pages/Dashboad';
import SettingPage from './pages/SettingPage';
import Analytics from './pages/Analytics';
import Products from './pages/Products';
import DefaultSettingsPage from './pages/DefaultSettingsPage';
import ProjectData from './pages/ProjectData';
import ProjectInformation from './pages/ProjectInformation';
import testAlign from './pages/TabProjectData/testAlign';
import ProjectInfo from './pages/ProjectInformation/ProjectInfo';
import ProjectContract from './pages/ProjectInformation/ProjectContract';
import ProjectOperational from './pages/ProjectInformation/ProjectOperational';
// import ProductList from './pages/Products/ProductList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Dashboad />}></Route>
          <Route path='/products' exact element={<Products />}></Route>
          <Route path='/analytics' exact element={<Analytics />}></Route>
          <Route path='/setting' exact element={<SettingPage />}></Route>
          <Route path='/defaultsettings' exact element={<DefaultSettingsPage />}></Route>
          <Route path='/projectdata' exact element={<ProjectData />}></Route>
          {/* <Route path='/projectinformation' exact element={<ProjectInformation />}></Route> */}
          <Route path='/test' exact element={<testAlign />}></Route>
          <Route path="/project-info"  element={<ProjectInformation />}>
            <Route
              // path="project-info"
              index  element={<ProjectInfo />}
            />
            <Route path="project-contract" element={<ProjectContract />} />
            <Route path="project-operational" element={<ProjectOperational />} />
          </Route>
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



