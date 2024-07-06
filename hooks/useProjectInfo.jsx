import { useMemo } from "react";

function useProjectInfo(reposData, githubRepoName) {
  const findProjectObjectByName = (array, name) => {
    if (!array) {
      console.log("Vous devez fournir un tableau");
      return null;
    }

    if (!name) {
      console.log("Vous devez fournir un élément à rechercher");
      return null;
    }
    return array.find((item) => item.name === name);
  };

  const projectInfo = useMemo(() => {
    return findProjectObjectByName(reposData, githubRepoName);
  }, [reposData, githubRepoName]);

  return projectInfo;
}

export default useProjectInfo;
