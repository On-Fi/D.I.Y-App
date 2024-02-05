import Image from "next/image";
import { useSession } from "next-auth/react";
import styled from "styled-components";
import Link from "next/link";
import LoginButton from "@/components/Login-Button";
import themes from "@/components/Themes";

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
  background-color: ${(props) => themes[props.theme].primaryButtonColor};;
  border-radius: 20px;
  text-decoration: none;
  color: ${(props) => props.color === "primary" ? themes[props.theme].primaryButtonTextColor : themes[props.theme].secondaryButtonTextColor};
  text-align: center;
  font-size: 0.85rem;
`;

const LoginText = styled.p`
  text-align: center;
  margin-top: 40px;
`;

const ThemeContainer = styled.div`
  margin: auto;
  margin-top: 60px;
  text-align: center;
`;

const ThemeButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  width: 90%;
  margin: auto;
`;

const ThemeButton = styled.button`
  background-image: url(${(props) => props.image});
  background-size: cover;
  padding: 40px;
  border-radius: 50%;
  border: none;
  filter: ${(props) => (props.isClicked ? 'none' : 'grayscale(80%)')};
  transform: ${(props) => (props.isClicked ? 'scale(1.07)' : 'none')};
  transition: transform 0.3s ease-in-out;
  position: relative;
  box-shadow: ${(props) => (props.isClicked ? '0 0 20px 10px rgba(0, 0, 0, 0.2)' : 'none')};
`;

export default function Profile({theme, clickedButton, handleThemeChange}) {
  const { data: session } = useSession();

  const handleButtonClick = (newTheme) => {
    handleThemeChange(newTheme);
  };

  if (!session) {
    return (
      <>
        <LoginText>
          Hey there, if you want to use all features of woodworm please login
          using your GitHub Account:
        </LoginText>
        <ProfileNavigation>
          <LoginButton theme={theme} color = "primary" />
          <StyledLink theme={theme} color = "primary" href="../favorites">Show my Favorites</StyledLink>
        </ProfileNavigation>
      </>
    );
  }
  return (
    <>
      <ProfileData theme={theme}>
        <ProfileImage
          width="100"
          height="100"
          src={session.user.image}
          alt="profile picture"
        />
        <PersonalData theme={theme}>
          <p>You are logged in as:</p>
          <p>{session.user.name}</p>
        </PersonalData>
      </ProfileData>
      <ProfileNavigation>
        <StyledLink theme={theme} color = "primary" href="profile/my-projects">Show my Projects</StyledLink>
        <StyledLink theme={theme} color = "primary" href="../favorites">Show my Favorites</StyledLink>
        <LoginButton theme={theme} color = "secondary"/>
      </ProfileNavigation>
      <ThemeContainer>
      <p>These are the four creators of this app: </p>
      <ThemeButtonContainer>
      <ThemeButton 
        image="/andreas.png"         
        isClicked={clickedButton === 'Theme 02'}
        onClick={() => handleButtonClick('Theme 02')}
      />
      <ThemeButton 
        image="/bjoern.png"         
        isClicked={clickedButton === 'Theme 03'}
        onClick={() => handleButtonClick('Theme 03')}
      />
      <ThemeButton 
        image="/kristin.png"        
        isClicked={clickedButton === 'Theme 04'}
        onClick={() => handleButtonClick('Theme 04')}
      />
      <ThemeButton 
        image="/onua.jpeg"         
        isClicked={clickedButton === 'Theme 05'}
        onClick={() => handleButtonClick('Theme 05')}
      />
   </ThemeButtonContainer>
   <p>Click on our faces and see the magic happen</p>
   </ThemeContainer>
   </>
  );
}
