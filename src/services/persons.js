import axios from "axios";

const getAll = (setPersons) => {
  const request = axios.get("http://localhost:3001/persons");
  return request.then((response) => response.data);
};

const addPerson = (henkilo) => {
  const request = axios.post("http://localhost:3001/persons", henkilo);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`http://localhost:3001/persons/${id}`);
  return request.then((response) => response.data);
};

export default { addPerson, getAll, deletePerson };
