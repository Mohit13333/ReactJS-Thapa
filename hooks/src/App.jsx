import About from "./Components/ContextAPI/About";
import Home from "./Components/ContextAPI/Home";
import { BioProvider } from "./Components/ContextAPI/Index";
import ForwardRef from "./Components/ForwardRef";
import ParentComponent from "./Components/PropDrilling";
import UseId from "./Components/UseId";
import UseRef from "./Components/UseRef";

function App() {
  return (
    <>
      {/* <UseId/> */}
      {/* <ParentComponent/> */}
      <BioProvider>
        <Home />
        <About/>
      </BioProvider>

      {/* <ChildComponent/> */}
      {/* <UseRef/>
      <ForwardRef/> */}
    </>
  );
}

export default App;
