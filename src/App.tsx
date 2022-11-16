import "./App.css";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Viswas" isLoggedIn={false} />
    </div>
  );
}

export default App;
