import { useTranslation } from "react-i18next";

function Info() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center">
      <div className="flex max-w-[1280px] flex-wrap items-end justify-center py-2 sm:py-10">
        <span className="bg-gradient-to-r from-cyan-400 to-accent bg-clip-text text-3xl font-bold text-transparent sm:py-2 sm:text-5xl">
          {t("info")}
        </span>
      </div>
    </div>
  );
}

export default Info;
