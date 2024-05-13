import "./Cell.scss";
const Cell = ({ value, ...props }) => {
  return (
    <button tabIndex={-1} {...props}>
      {value}
    </button>
  );
};
export default Cell;
