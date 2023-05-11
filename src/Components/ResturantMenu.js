import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const { resid } = useParams();
  return (
    <>
      <h1>Resturant Id:{resid}</h1>
      <h2>Namesta</h2>
    </>
  );
};

export default ResturantMenu;
