import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({monsters}) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { name, id, email } = monster;
      return <Card key={id} name={name} id={id} email={email} />;
    })}
  </div>
);

export default CardList;