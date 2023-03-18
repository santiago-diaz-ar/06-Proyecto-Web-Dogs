import Search from "../searchbar/searchbar";

const Nav = ({ onSearch, onClose, dogs }) => {
  return (
    <div>
      <Search onSearch={onSearch} onclose={onClose} dogs={dogs} />
    </div>
  );
};

export default Nav;
