import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  console.log(career);
  return (
    <div className="career-details">
      <h2>Career detail for {career.title}</h2>
      <p>Starting salary {career.salary}</p>
      <p>Location {career.location}</p>
      <div className="details">
        <p>Loream</p>
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if(!res.ok){
    throw Error('Could Not find the career with this id : ' + id);
  }

  return res.json();
};
