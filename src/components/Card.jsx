import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
// h-[calc(100%-200px)]

function Card() {
  const { t } = useTranslation();
  return (
    <div className="h-[500px] w-[300px] overflow-hidden rounded-2xl bg-neutral-900 shadow-lg">
      <div className="h-[200px] border-b border-accent bg-[url('/images/marv.jpg')] bg-cover"></div>
      <div className="flex flex-col px-4 py-4">
        <div className="text-center text-2xl font-bold text-neutral-200">
          Marv
        </div>

        <div className="py-4 text-sm text-neutral-200">{t("marv")}</div>

        <div className="text-center italic text-neutral-300">
          {t("devby")} <span className="font-bold">Paul</span>
        </div>

        <button className="bg-accentDarker flex items-center justify-center rounded-full py-2 text-white">
          <FaGithub size={"24"} className="mr-2" /> Visiter le repo github
        </button>
      </div>
    </div>
  );
}

export default Card;
