import Navbar from "./navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header>
        <div>
            <div>
                <h1 id="h1">Reactive Task Tracker</h1>
                <h2>The <span>worst</span> <span class="best">best</span> task tracker on the <span>internet</span> <span className="bold">interwebs!</span></h2>
            </div>

            <Navbar />
        </div>
    </header>
  )
}

export default Header