import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";
import { SessionProvider } from "next-auth/react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

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

  if (error)
    return (
      <div>
        {error.info} - {error.status}
      </div>
    );
  if (isLoading) return <LoadingSpinner />;

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
          <Layout>
            <Component
              {...pageProps}
              projects={projects}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          </Layout>
        </SWRConfig>
      </SessionProvider>
      ;
    </>
  );
}
