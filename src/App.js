import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import TransactionHistory from './components/TransactionHistory';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Balance/>
        <AddTransaction/>
        <TransactionHistory/>
      </div>
    </GlobalProvider>
  );
}

export default App;
