import { createContext, useState, useEffect } from "react";
import { fetchReposData } from "../utils/helpers";
import { ORGNAME } from "../config/globals";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [reposData, setReposData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!reposData) {
      fetchReposData(ORGNAME)
        .then((res) => {
          if (res) {
            setReposData(res);
          } else {
            setReposData(null);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        reposData,
        loading,
        setLoading,
        setReposData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
