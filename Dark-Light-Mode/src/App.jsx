import DarkAndLightMode from "./Components/DarkAndLightMode";
import { ThemeProvider } from "./Components/Usecontext";

function App() {
  return (
    <>
      <ThemeProvider>
        <DarkAndLightMode />
      </ThemeProvider>
    </>
  );
}

export default App;
