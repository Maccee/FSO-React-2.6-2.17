const Persons = ({ haettuPersons }) => (
  <div>
    {haettuPersons.map((person) => (
      <p key={person.name}>
        {person.name} {person.number}
      </p>
    ))}
  </div>
);

export default Persons;
