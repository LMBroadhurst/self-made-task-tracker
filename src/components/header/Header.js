import Navbar from "./navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header>
        <div>
            <div>
                <h1>Task Tracker</h1>
                <h2>The best task tracker on the interwebs!</h2>
            </div>

            <Navbar />
        </div>
    </header>
  )
}

export default Header