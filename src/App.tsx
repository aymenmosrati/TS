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
import { UserContextProvider } from "./components/context/UserContext";
import { Users } from "./components/context/User";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { CounterClass } from "./class/CounterClass";
import { Private } from "./auth/Private";
import { Profile } from "./auth/Profile";
import { List } from "./generics/List";
import { RandomNumber } from "./restriction/RandomNumber";
import { Toast } from "./templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { CustomComponent } from "./components/html/CustomComponent";
import { Text } from "./components/polymorphic/Text";

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

      <UserContextProvider>
        <Users />
      </UserContextProvider>

      <DomRef />
      <MutableRef />
      <CounterClass message="The counter value is " />

      <Private isLoggedIn={true} component={Profile} />

      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

      <List
        items={[
          { id: 1, first: "aym444", last: "aze11" },
          { id: 2, first: "aym555", last: "aze222" },
          { id: 3, first: "aym666", last: "aze333" },
        ]}
        onClick={(item) => console.log(item)}
      />

      <RandomNumber value={10} isPositive />

      <Toast position="left-center" />

      <CustomButton
        variant="primary"
        disabled
        onClick={() => console.log("Clicked")}
      >
        {/* <div> Primary button</div> */}
        Primary button
      </CustomButton>
      <CustomComponent
        name="test type other component "
        messageCount={12}
        isLoggedIn={true}
      />
      <Text size="lg">Heading</Text>
      <Text size="lg">Paragraph</Text>
      <Text size="lg" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
