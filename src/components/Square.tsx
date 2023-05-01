interface Props {
  style: object;
  shade: string;
  onClick?: () => void;
}

const Square = ({ style, shade, onClick }: Props) => {
  return (
    <button
      className={`square ${shade}`}
      onClick={onClick}
      style={style}
    ></button>
  );
};

export default Square;
