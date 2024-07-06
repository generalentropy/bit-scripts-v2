import { MdOnlinePrediction } from "react-icons/md";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";
import useDiscordInfo from "../../hooks/useDiscordInfo";
import { GUILDID } from "../../config/globals";
import { useTranslation } from "react-i18next";

function DiscordWidget() {
  const { t } = useTranslation();
  const { infos } = useDiscordInfo(GUILDID);
  const membersOnline = infos?.members ?? [];
  const presenceCount = infos?.presence_count ?? "🙈";

  if (!infos) return null;

  return (
    <div className="flex justify-center pt-2 sm:pt-10">
      <div className="mx-4 flex w-full max-w-[800px] flex-wrap items-center justify-center gap-4 rounded-lg border border-accentDarker bg-neutral-900 px-6 py-2 text-neutral-300 sm:gap-6 sm:py-4">
        <div className="flex items-center">
          <FaDiscord size={20} className="mr-2" />
          <span className="font-bold">Discord Bit-Scripts</span>
        </div>

        <div className="flex items-center">
          <MdOnlinePrediction size={22} className="mr-2 align-baseline" />
          <span className="font-bold">
            {t("online")} : {presenceCount}
          </span>
        </div>

        <AvatarGroup size="sm" max={7} textColor="black">
          {membersOnline.map((member, i) => (
            <Avatar name={member.username} src={member.avatar_url} key={i} />
          ))}
        </AvatarGroup>
      </div>
    </div>
  );
}

export default DiscordWidget;
