import React from 'react';

const Card = ({name , phone , id})=>
{
    //const {name , phone , id}=props;
    return(
        <div className="tc grow bg-light-blue dib br3 pa3 ma2 bw2 shadow-5">
            <img alt='Jamal' src={`https://robohash.org/${id}?200x200`}/>
        
        <div>
                <h2>{name}</h2>
                <p>{phone}</p>
        </div>
        </div>
    );
}
/*
function onmouseOver(e) {
    if(e.target.innerHTML=="select")
    {
        e.target.parentNode.children[0].style.color="red";
        e.target.innerHTML="unselect";
    }
    else
    {
        e.target.parentNode.children[0].style.color="black";
        e.target.innerHTML="select";
    }
}
*/
export default Card;