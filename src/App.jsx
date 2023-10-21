import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [haku, setHaku] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");

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
      <Filter handleHaeChange={handleHaeChange} />
      <h3>add a new</h3>
      <PersonForm
        lisaaHenkilo={lisaaHenkilo}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons haettuPersons={haettuPersons} />
    </div>
  );
};

export default App;
