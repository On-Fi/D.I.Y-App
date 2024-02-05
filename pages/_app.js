import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";
import { SessionProvider } from "next-auth/react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  const [theme, setTheme] = useState('Theme 01');
  const [clickedButton, setClickedButton] = useState(null);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const handleThemeChange = (newTheme) => {
    if (clickedButton === newTheme) {
      changeTheme('Theme 01');
      setClickedButton(null);
    } else {
      changeTheme(newTheme);
      setClickedButton(newTheme);
    }
  };
  
  function handleToggleFavorite(id, event) {
    event.preventDefault();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else setFavorites([...favorites, id]);
  }

  const fetcher = async (URL) => {
    let res, data;
    await new Promise((resolve) => setTimeout(resolve, 500));
    res = await fetch(URL);
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    data = await res.json();
    return data;
  };

  const { data: projects, error, isLoading } = useSWR("/api/projects", fetcher);
  const { data: articles } = useSWR("/api/articles", fetcher);

  if (error)
    return (
      <div>
        {error.info} - {error.status}
      </div>
    );
  if (isLoading) return <LoadingSpinner theme={theme} />;

  if (!projects) return <p>no data</p>;

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <GlobalStyle />
          <Layout theme={theme} changeTheme={changeTheme}>
            <Component
              {...pageProps}
              projects={projects}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              articles={articles}
              theme={theme}
              changeTheme={changeTheme}
              clickedButton={clickedButton}
              handleThemeChange={handleThemeChange}
            />
          </Layout>
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
