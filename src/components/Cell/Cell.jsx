import "./Cell.scss";
export const Cell = ({ value, ...props }) => {
  return (
    <button tabIndex={-1} {...props}>
      {value}
    </button>
  );
};
