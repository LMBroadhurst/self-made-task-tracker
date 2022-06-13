import './reset.css';
import './App.css';
import Header from "./components/header/Header.js";
import Main from './components/main/Main';
import Footer from "./components/footer/Footer.js"

const App = () => {
  return (
    <body>
        <Header />
        <Main />
        <Footer />
    </body>
  )
}

export default App