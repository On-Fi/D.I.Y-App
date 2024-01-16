import styled from "styled-components";

const FactBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px;
  // margin: 10px;
  border-radius: 20px;
`;
const ShortFact = styled.span`
  background-color: #858f87;
  border-radius: 20px;
  padding: 5px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`;

export default function ShortFactsBox({ project }) {
  return (
    <FactBox>
      <ShortFact>{project.time} hours</ShortFact>
      <ShortFact>{project.priceCategory}</ShortFact>
      <ShortFact>{project.category}</ShortFact>
      <ShortFact>{project.difficulty}</ShortFact>
    </FactBox>
  );
}
