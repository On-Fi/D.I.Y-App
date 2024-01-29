import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";
import { SessionProvider } from "next-auth/react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: "",
  });

  function handleToggleFavorite(id, event) {
    event.preventDefault();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else setFavorites([...favorites, id]);
  }

  const fetcher = async (URL) => {
    const res = await fetch(URL);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");

      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data: projects, error, isLoading } = useSWR("/api/projects", fetcher);

  if (error)
    return (
      <div>
        {error.info} - {error.status}
      </div>
    );
  if (isLoading) return <div>loading...</div>;

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
