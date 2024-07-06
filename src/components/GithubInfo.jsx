import { useGlobalContext } from "../../context/useGlobalContext";
import useProjectInfo from "../../hooks/useProjectInfo";
import { convertDate } from "../../utils/helpers";

export function GithubInfo({ githubRepoName }) {
  const { reposData, loading } = useGlobalContext();
  const projectInfo = useProjectInfo(reposData, githubRepoName);

  if (loading || !projectInfo || !reposData) return null;

  const baseStyle =
    "mt-4 flex flex-col items-center rounded  px-3 py-1 text-xs font-semibold text-neutral-200";

  return (
    <div className="mb-4 flex justify-center gap-4">
      <div className={`${baseStyle} bg-slate-500`}>
        <span className="font-bold">Last commit</span>
        <span>{convertDate(projectInfo?.updated_at)}</span>
      </div>

      <div className={`${baseStyle} bg-slate-600`}>
        <span className="font-bold">Language</span>
        <span>{projectInfo?.language}</span>
      </div>

      <div className={`${baseStyle} bg-slate-700`}>
        <span className="font-bold">Licence</span>
        <span>{projectInfo?.license?.key ?? "N/A"}</span>
      </div>
    </div>
  );
}

export default GithubInfo;
