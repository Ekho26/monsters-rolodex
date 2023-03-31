import { Component } from "react";

import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component{
    render(){
        const {monsters} = this.props;
        return (
          <div className='card-list'>
            {monsters.map((monster) => {
              const { name, id, email } = monster;
                return (
                  <Card key={id} name={name} id={id} email={email}/>
                );
            })}
          </div>
        ); 
    }
}

export default CardList;