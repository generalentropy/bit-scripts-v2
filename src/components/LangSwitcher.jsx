import { useState } from "react";
import { changeLanguage, normalizeLang } from "../../utils/helpers";
import i18next from "i18next";

function LangageSwitcher() {
  const currentLanguage = i18next.language;

  const [activeLang, setActiveLang] = useState(normalizeLang(currentLanguage));

  const btnStyleBase =
    "py-2 px-6 pointer rounded-full my-2 text-xs hover:bg-accentDarker transition-colors ";

  return (
    <div className="flex justify-center sm:justify-end">
      <div className="flex justify-center text-white">
        <div className="flex gap-2 sm:gap-4">
          <button
            className={`${btnStyleBase} ${activeLang === "en" ? "bg-accentDarker" : "bg-neutral-700"}`}
            onClick={() => {
              changeLanguage("en");
              setActiveLang("en");
            }}
          >
            English
          </button>
          <button
            className={`${btnStyleBase} ${activeLang === "fr" ? "bg-accentDarker" : "bg-neutral-700"} `}
            onClick={() => {
              changeLanguage("fr");
              setActiveLang("fr");
            }}
          >
            Français
          </button>

          <button
            className={`${btnStyleBase} ${activeLang === "es" ? "bg-accentDarker" : "bg-neutral-700"}`}
            onClick={() => {
              changeLanguage("es");
              setActiveLang("es");
            }}
          >
            Español
          </button>
        </div>
      </div>
    </div>
  );
}

export default LangageSwitcher;
