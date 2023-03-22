const Paginate = ({ perrosPorPagina, allDogs, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / perrosPorPagina); i++) {
    //cantidad de elementos totales, dividido limite de elementos por pagina
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li onClick={() => paginado(number)} key={number}>
              <button>{number}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginate;
