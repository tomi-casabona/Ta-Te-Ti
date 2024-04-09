export const Square = ({ children, isSelected, handleSquareClick, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    handleSquareClick(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
