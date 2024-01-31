import Image from "next/image";
import { useSession } from "next-auth/react";
import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import LoginButton from "@/components/Login-Button";

const ProfileData = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 30px;
  align-items: center;
`;

const ProfileImage = styled(Image)`
  border-radius: 100%;
`;

const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;

  p {
    margin: 5px;
  }
`;

const ProfileNavigation = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  gap: 20px;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  border: none;
  padding: 10px;
  background-color: #f9c858;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  text-align: center;
  font-size: 0.85rem;
`;

const LoginText = styled.p`
  text-align: center;
  margin-top: 40px;
`;

export default function Profile() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <LoginText>
          Hey there, if you want to use all features of woodworm please login
          using your GitHub Account:
        </LoginText>
        <ProfileNavigation>
          <LoginButton />{" "}
          <StyledLink href="../favorites">Show my Favorites</StyledLink>
        </ProfileNavigation>
      </>
    );
  }
  return (
    <>
      <ProfileData>
        <ProfileImage
          width="100"
          height="100"
          src={session.user.image}
          alt="profile picture"
        />
        <PersonalData>
          <p>You are logged in as:</p>
          <p>{session.user.name}</p>
        </PersonalData>
      </ProfileData>
      <ProfileNavigation>
        <StyledLink href="profile/my-projects">Show my Projects</StyledLink>
        <StyledLink href="../favorites">Show my Favorites</StyledLink>
        <LoginButton />{" "}
      </ProfileNavigation>
    </>
  );
}
