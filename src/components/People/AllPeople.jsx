import React, { useEffect, useState } from "react";
import CardPeople from "./CardPeople";

const AllPeople = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch("https://swapi.tech/api/people/");
        const data = await response.json();
        setPeople(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div className="all-people-scroll">
      {people.map((person, index) => (
        <CardPeople
          key={index}
          name={person.name}
          id={person.uid}
        />
      ))}
    </div>
  );
  
};

export default AllPeople;
