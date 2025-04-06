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
    <div className="grid grid-cols-2 gap-4">
      {people.map((people, index) => (
        <CardPeople
          key={index}
          name={people.name}
          id={people.uid}
        />
      ))}
    </div>
  );
};

export default AllPeople;
