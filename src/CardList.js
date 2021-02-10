import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>
{
    const cardCompenent = robots.map((user, i) =>{
        return       <Card key={i} id={robots[i].id} name={robots[i].name} username={robots[i].username} phone={robots[i].phone}/>
    }
        );
    return(
        <div>
            {cardCompenent}
    </div>
    );
}

export default CardList;