const Card = ({ image, name, temperaments }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div>
        {temperaments.map((t) => (
          <h3 key={t + Math.random}>{t}</h3>
        ))} 
      </div>
    </div>
  );
};

export default Card;
