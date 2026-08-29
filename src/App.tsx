import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Table from "./components/ui/Table";
import "./App.css";

interface User {
  [key: string]: string | number;
  Name: string;
  Age: number;
  City: string;
}

function App() {
  const handleWelcome = (): void => {
    alert("Welcome to our React application!");
  };

  const handleContact = (): void => {
    alert("Thank you for contacting us!");
  };

  const columns: string[] = ["Name", "Age", "City"];

  const users: User[] = [
    {
      Name: "Ahmed Ali",
      Age: 25,
      City: "Cairo",
    },
    {
      Name: "Mona Hassan",
      Age: 22,
      City: "Giza",
    },
    {
      Name: "Omar Mohamed",
      Age: 30,
      City: "Alexandria",
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Reusable Components</h1>
        <p>React Components Demonstration</p>
      </header>

      <main>
        <section>
          <h2>Buttons</h2>

          <div className="buttons-container">
            <Button text="Welcome" onClick={handleWelcome} variant="primary" />

            <Button
              text="Contact Us"
              onClick={handleContact}
              variant="secondary"
            />

            <Button
              text="Delete"
              onClick={() => alert("Delete button clicked")}
              variant="danger"
            />

            <Button text="Disabled Button" onClick={() => {}} disabled />
          </div>
        </section>

        <section>
          <h2>Cards</h2>

          <div className="cards-container">
            <Card
              title="React"
              description="React is a JavaScript library for building user interfaces."
              image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            />

            <Card
              title="Reusable Components"
              description="Reusable components help us write clean and maintainable code."
            >
              <Button
                text="Learn More"
                onClick={() => alert("More information")}
                variant="primary"
              />
            </Card>
          </div>
        </section>

        <section>
          <h2>Users Table</h2>

          <Table columns={columns} data={users} striped />
        </section>
      </main>
    </div>
  );
}

export default App;
