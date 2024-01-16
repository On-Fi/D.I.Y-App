import NavigationBar from "../NavigationBar";
import Header from "../Header";
import Wrapper from "../Wrapper";

export default function Layout({children}) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <NavigationBar/ >
    </>
  );
}
