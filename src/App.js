import './reset.css';
import './App.css';
import Header from "./components/header/Header.js";
import Main from './components/main/Main';
import AddTask from './components/main/AddTask/AddTask';

const App = () => {
  return (
    <body>
        <Header />
        <Main />
        <AddTask />
    </body>
  )
}

export default App