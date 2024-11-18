import DarkAndLightMode, { ThemeProvider } from "./Components/DarkAndLightMode";

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
