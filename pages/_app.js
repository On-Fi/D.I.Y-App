import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/Layout";
import Wrapper from "@/components/Wrapper";

export default function App({ Component, pageProps }) {
  const URL = "/api/projects";

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
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} projects={projects} />
        </Layout>
      </SWRConfig>
    </>
  );
}
