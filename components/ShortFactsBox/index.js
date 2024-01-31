import styled from "styled-components";

const FactBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px;
  border-radius: 20px;
  justify-content: center;
`;
const ShortFact = styled.span`
  background-color: ${props => props.color };
  border-radius: 20px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export default function ShortFactsBox({ project, color="#FFFF" }) {
  return (
    <FactBox>
      <ShortFact color= {color}>{project.time} hours</ShortFact>
      <ShortFact color= {color}>{project.priceCategory}</ShortFact>
      <ShortFact color= {color}>{project.category}</ShortFact>
      <ShortFact color= {color}>{project.difficulty}</ShortFact>
    </FactBox>
  );
}
