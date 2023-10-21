const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }

  const className = type === "error" ? "error" : "success";
  return (
    <div>
      <p className={className}>{message}</p>
    </div>
  );
};
export default Notification;
