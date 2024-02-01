import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Card from "@/components/Card";

const Custom404Image = styled(Image)`
  width: 100%;
  height: auto;
`;

const StyledLink = styled(Link)`
  border: none;
  padding: 10px;
  background-color: ${(props) =>
    props.color === "primary" ? "#F9C858" : "#d5d5d5"};
  border-radius: 20px;
  text-decoration: none;
  color: black;
  padding: 15px;
`;

const Frame = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

export default function Custom404({ projects }) {
  const randomIndex = Math.floor(Math.random() * projects.length);
  const randomProject = projects[randomIndex];
  console.log(randomProject);

  return (
    <Frame>
      <Custom404Image
        src="/custom404.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="404 image"
      />
      <p>
        Sorry! It seems like we can&apos;t find the project you&apos;re looking
        for.
      </p>
      <StyledLink color="primary" href="/">
        Browse all projects instead
      </StyledLink>
      <h3>Our suggestion</h3>
      <Card project={randomProject}></Card>
    </Frame>
  );
}
