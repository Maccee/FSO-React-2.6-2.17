import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [haku, setHaku] = useState("");

  const lisaaHenkilo = (event) => {
    event.preventDefault();

    if (newName && newNumber) {
      if (persons.some((person) => person.name === newName)) {
        alert(`${newName} is already added to phonebook`);
      } else {
        const henkilo = { name: newName, number: newNumber };
        setPersons(persons.concat(henkilo));
        setNewName("");
        setNewNumber("");
      }
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const handleHaeChange = (event) => {
    console.log(event.target.value);
    setHaku(event.target.value);
  };

  const haettuPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(haku.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          hae: <input onChange={handleHaeChange} />
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={lisaaHenkilo}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {haettuPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
