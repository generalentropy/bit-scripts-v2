import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const add = () => {
  i18n.addResourceBundle(
    "es",
    "translation",
    {
      info: "Nuestros proyectos",
      baseline: "Desarrollo de software y scripts",
      discord: "Únete a nuestro Discord",
      marv: "Un bot de Discord en NodeJS que usa ChatGPT y un sistema de síntesis y reconocimiento de voz, lo que permite interactuar con el bot a través de comandos de voz.",
      devby: "Desarrollado por",
    },
    false,
    true,
  );
};
add();

function Header() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center border-b border-accent bg-neutral-900">
      <div className="flex w-full max-w-[1280px] items-center justify-between px-6 py-8">
        <div>
          <div className="flex items-center">
            <div>
              <img className="mr-2 w-10" src="logo.svg" alt="logo" />
            </div>

            <div className="text-xl font-bold text-neutral-100 sm:text-4xl">
              <span className="bg-gradient-to-r from-cyan-400 to-accent bg-clip-text text-transparent">
                Bit-Scripts
              </span>
            </div>
          </div>
          <div className="text-xs text-neutral-300 sm:text-base">
            {t("baseline")}
          </div>
        </div>

        <div className="flex gap-4 text-white">
          <a href="https://github.com/Bit-Scripts">
            <FaGithub
              size={26}
              className="cursor-pointer transition-transform hover:scale-105"
            />
          </a>
          <a href="https://discord.com/invite/uAtm6aMnHR" title={t("discord")}>
            <BsDiscord size={28} className="cursor-pointer hover:scale-105" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
