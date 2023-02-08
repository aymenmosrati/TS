import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet1, Greet2, Greet3 } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Status } from "./components/Status";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";

function App() {
  const personName = {
    first: "firstName",
    last: "lastName",
  };
  const nameList = [
    {
      first: "first name1",
      last: "last name 1",
    },
    {
      first: "first name2",
      last: "last name 2",
    },
    {
      first: "first name3",
      last: "last name 3",
    },
  ];
  return (
    <div className="App">
      {/*<Greet2 />
      <Greet3 />
      <Person name={personName} />
    <PersonList names={nameList} /> */}
      <Status status="error" />
      <Oscar>
        <Heading>Oscar goes to leonardo dicpario!</Heading>
      </Oscar>
      <Greet1 name="Vishwas" isLoggedIn={false} />

      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />

      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
      <User />
      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
