import Search from "../searchbar/searchbar";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <Search onSearch={onSearch} />
    </div>
  );
};

export default Nav;
