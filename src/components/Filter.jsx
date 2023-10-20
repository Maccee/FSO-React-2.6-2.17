const Filter = ({ handleHaeChange }) => (
  <form>
    <div>
      hae: <input onChange={handleHaeChange} />
    </div>
  </form>
);

export default Filter;
