import React from "react";

const DisplayInfo = (props: any) => {
  const baseUrlPoster = "https://image.tmdb.org/t/p/w185/";
  return (
    <div>
      <img src={`${baseUrlPoster}${props.image}`} alt={props.name} />
      <h6>{props.name}</h6>
      <h6>{props.description}</h6>
      <h6>{props.id}</h6>
      <h6>{props.genere}</h6>
      <h6>{props.release}</h6>
    </div>
  );
};

export default DisplayInfo;
