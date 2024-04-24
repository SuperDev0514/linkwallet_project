import logo from './logo.svg';
import './App.css';
import Transfer from './Transfer';
import LinkWallet from './linkedwallet';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<LinkWallet />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </Router>
  );
}

export default App;
