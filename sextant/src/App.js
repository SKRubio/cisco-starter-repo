import './index.css';
import DataPoint from './DataPoint';
import Banner from './Banner';

function App() {
  return (
    <div>
      <Banner text = "SEXTANT DASHBOARD" />
      <div className="card">
        <DataPoint title = "IP Adress: " data = "192.168.1.1" />
        <DataPoint title = "Latency:" data = "1200ms"/>
      </div>
    </div>
  );
}

export default App;
