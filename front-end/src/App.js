import './App.css';
import { PullData } from './components/fetch.js';
import {SearchBar} from './componenets/searchBar';




  

function App() {
  return (
    <div>
    <SearchBar/>
    <PullData/>
    </div>
  );
}

export default App;
