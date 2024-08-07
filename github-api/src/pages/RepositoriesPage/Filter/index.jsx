import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Container, Selector, Cleaner } from "./styles";

function Filter() {
  const langs = [
    { name: "JavaScript", count: 5, color: "#FCC419" },
    { name: "Java", count: 3, color: "#FE8C00" },
    { name: "Python", count: 2, color: "#23DB42" },
    { name: "Typescript", count: 7, color: "#4263Eb" },
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>
        <RiDeleteBin2Fill size={20} />
      </Cleaner>
    </Container>
  );
}

export default Filter;
