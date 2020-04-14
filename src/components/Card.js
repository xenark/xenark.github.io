import React from 'react';

const Card = ({id, name, email})=>{
	return (

		<div className="tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
		<img alt="Robots" src={`https://robohash.org/${id}?200x200`}/>
		<div>
		<h2>{name}</h2>
		<div>
		<p>{email}</p>
		</div>
		</div>
		</div>
		);
}

export default Card;