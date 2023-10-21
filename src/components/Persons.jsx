const Persons = ({ haettuPersons, poistaHenkilo }) => (
  <div>
    {haettuPersons.map((person) => (
      <p key={person.name}>
        {person.name} {person.number}{" "}
        <button onClick={() => poistaHenkilo(person.id)}>delete</button>
      </p>
    ))}
  </div>
);

export default Persons;
