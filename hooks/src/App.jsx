import About from "./Components/ContextAPI/About";
import Home from "./Components/ContextAPI/Home";
import { BioProvider } from "./Components/ContextAPI/Index";
import Services from "./Components/ContextAPI/Services";
import ForwardRef from "./Components/ForwardRef";
import ReactMemo from "./Components/Memo/ReactMemo";
import ReatMemo from "./Components/Memo/ReactMemo";
import UseCallback from "./Components/Memo/UseCallback";
import UseMemo from "./Components/Memo/UseMemo";
import ParentComponent from "./Components/PropDrilling";
import UseId from "./Components/UseId";
import Reducer from "./Components/useReducerHook/Reducer";
import UseRef from "./Components/UseRef";

function App() {
  return (
    <>
      {/* <UseId/> */}
      {/* <ParentComponent/> */}
      {/* <BioProvider>
        <Home />
        <About />
        <Services />
      </BioProvider> */}
      {/* <Reducer /> */}
      {/* <ReactMemo/> */}
      <UseCallback/>
      {/* <UseMemo/> */}
      {/* <ChildComponent/> */}
      {/* <UseRef/>
      <ForwardRef/> */}
    </>
  );
}

export default App;
