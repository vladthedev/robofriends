import React from 'react';

const Card =({name, email, id}) =>{
    return(
<div className= "tc bg-light-green dib br3 pa3 mr2 mb5 grow bw2 shadow-5">
    <img alt="robots" src={`https://www.robohash.org/${id} 200x200}`} />
    <h2>{name}</h2>
<p>{email}</p>
</div>

    );
}

export default Card;