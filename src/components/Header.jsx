const Header = ({ title }) => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="text">
            This project ilustrate the character of the famous Rick and Morty
            serie
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
