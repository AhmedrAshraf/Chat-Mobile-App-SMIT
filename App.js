import { PaperProvider } from 'react-native-paper';
import Home from "./Home"

function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

export default App