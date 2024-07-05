import { createContext, useState, useEffect } from "react";
import { fetchReposData } from "../utils/helpers";
import { ORGNAME } from "../config/globals";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [reposData, setReposData] = useState(null);

  useEffect(() => {
    // Pour éviter de multiples refetch pendant le dev (github api rate limit)
    if (!reposData) {
      fetchReposData(ORGNAME)
        .then((res) => {
          if (res) {
            setReposData(res);
            console.log("Repo data fetched");
          } else {
            setReposData(null);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        reposData,
        setReposData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
