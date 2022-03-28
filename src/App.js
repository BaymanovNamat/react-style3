import NavBar from "./components/NavBar/NavBar";
import User from "./components/User/User";


function App() {
  return (
    <div className="App">
      
        <nav>
          <NavBar/>
        </nav>

        <div>
          <User/>
        </div>
    </div>
  );
}

export default App;
