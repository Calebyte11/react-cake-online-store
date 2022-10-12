import Homepage from "./Components/Pages/Home/Home-Page/Homepage.jsx";
import { Provider } from "react-redux";
import Store from "./State Management/Redux/Store";


function App() {
  return (
    <Provider store={Store} >
      <div>
        <Homepage/>
      </div>
    </Provider>  
      
  );
}

export default App;
