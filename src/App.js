import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Homescreen />
    </div>
  );
}

export default App;
