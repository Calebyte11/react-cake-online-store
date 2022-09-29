import Homepage from "./Components/Pages/Homepage";
import { Provider } from "react-redux";
import Store from "./Components/Redux/Store";


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
