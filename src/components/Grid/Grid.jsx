export const Grid = ({ gridType, children }) => {
  return (
    <>
      <div className={gridType}>
        {children}
      </div>
    </>
  );
};
