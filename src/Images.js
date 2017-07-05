import React from 'react';

function Images(props){
  console.log(props.images)
  var imageArray = []
  props.images.map((image, index)=>imageArray.push(
      <div key={index}>
        <img width="500px" src={props.images[index]} />
      </div>
      ))
	return(
    <div>
     {imageArray}
    </div>
	)
}

export default Images;