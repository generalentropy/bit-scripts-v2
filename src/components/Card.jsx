import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BASE_IMG_PATH, DEFAULT_IMG_COVER } from "../../config/globals";
import GithubInfo from "./GithubInfo";

function Card({
  imgName = DEFAULT_IMG_COVER,
  title = "No name",
  translationKey,
  demoUrl,
  author,
  githubProjectUrl,
  githubRepoName,
}) {
  const { t } = useTranslation();

  const buttonStyle =
    "bg-accentDarker flex min-w-[120px] cursor-pointer items-center justify-center rounded-full py-2 text-white transition-opacity hover:opacity-80";

  return (
    <div className="h-[580px] w-[330px] overflow-hidden rounded-2xl bg-neutral-900 shadow-lg">
      <div
        className={`h-[200px] border-b border-accent bg-cover`}
        style={{ backgroundImage: `url(${BASE_IMG_PATH}${imgName})` }}
      ></div>
      <div className="flex h-[calc(100%-200px)] flex-col px-4 py-4">
        <div className="text-center text-2xl font-bold text-neutral-200">
          {title}
        </div>

        <div className="max-h-[250px] overflow-hidden pt-2 text-sm text-neutral-200">
          {t(`app.card:${translationKey}.description`)}
        </div>
        <GithubInfo githubRepoName={githubRepoName} />

        <div className="flex grow flex-col justify-end">
          <div className="text-center italic text-neutral-300">
            {t("devby")} <span className="font-bold">{author}</span>
          </div>
          <div className="flex justify-center gap-x-4 py-2">
            {githubProjectUrl && (
              <a className={`${buttonStyle}`} href={githubProjectUrl}>
                <FaGithub size={"20"} className="mr-2" />
                GitHub
              </a>
            )}

            {demoUrl && (
              <a className={`${buttonStyle}`} href={demoUrl}>
                <MdOutlineRemoveRedEye size={"24"} className="mr-2" /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
