import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSec from './components/FirstSec';
import CardsSec from './components/CardsSec';
import AlertSec from './components/AlertSec';
function App() {
  return (
    <div className="App">
      <FirstSec/>
      <div className='cards'>
        <CardsSec/>
        <CardsSec/>
        <CardsSec/>
      </div>
      <AlertSec/>
    </div>
  );
}

export default App;
