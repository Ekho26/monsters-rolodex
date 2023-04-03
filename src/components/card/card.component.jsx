import './card.component.styles.css';

const Card = (props) => {
  const { name, id, email } = props;
  return (
    <>
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  );
}

export default Card;