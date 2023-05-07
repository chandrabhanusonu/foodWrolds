const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVme-Z080jLF3kA-Li7iIdGMj09sKFQit0FtoSXT0xfQ&usqp=CAU&ec=48600112"
      alt="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nva-items">
        <ul className="nva-items">
          <li>Home</li>
          <li>About</li>
          <li>Contect</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
