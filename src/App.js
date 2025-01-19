import './App.css';
import Navbar from './components/Navbar';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
