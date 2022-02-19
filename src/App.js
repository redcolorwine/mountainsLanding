import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Main from './pages/main';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
