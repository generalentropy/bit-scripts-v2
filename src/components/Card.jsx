import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function Card() {
  const { t } = useTranslation();
  return (
    <div className="h-[520px] w-[320px] overflow-hidden rounded-2xl bg-neutral-900 shadow-lg">
      <div className="h-[200px] border-b border-accent bg-[url('/images/marv.jpg')] bg-cover"></div>
      <div className="flex h-[calc(100%-200px)] flex-col px-4 py-4">
        <div className="text-center text-2xl font-bold text-neutral-200">
          Marv
        </div>

        <div className="h-full max-h-[180px] overflow-hidden overflow-y-auto text-ellipsis py-4 text-sm text-neutral-200">
          {t("marv")}
        </div>

        <div className="py-4 text-center italic text-neutral-300">
          {t("devby")} <span className="font-bold">Paul</span>
        </div>

        <div className="flex justify-center gap-x-4 py-2">
          <button className="bg-accentDarker flex min-w-[120px] items-center justify-center rounded-full py-2 text-white">
            <FaGithub size={"24"} className="mr-2" />
            Github
          </button>

          <button className="bg-accentDarker flex min-w-[120px] items-center justify-center rounded-full py-2 text-white">
            <MdOutlineRemoveRedEye size={"24"} className="mr-2" /> Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
