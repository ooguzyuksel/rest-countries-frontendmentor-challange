import "./App.scss";
import ThemeContainer from "./Components/ThemeContainer/ThemeContainer";

import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ThemeContainer />
    </ThemeProvider>
  );
}

export default App;
