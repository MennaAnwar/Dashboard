import Context from "./Context";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {

const IP = process.env.REACT_APP_IP;


  return (
  <Context.Provider value={{IP}}>
        <main className="main-container">
      <Header />
      <Dashboard />
      <Footer />
    </main>
      </Context.Provider>
  );
}

export default App;
