import { useTranslation } from "react-i18next";

function Info() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center">
      <div className="flex max-w-[1280px] flex-wrap items-end justify-center py-10">
        <span className="to-accent bg-gradient-to-r from-cyan-400 bg-clip-text py-2 text-5xl font-bold text-transparent">
          {t("info")}
        </span>
      </div>
    </div>
  );
}

export default Info;
