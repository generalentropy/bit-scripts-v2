import i18n from "i18next";

export const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

export const fetchReposData = async (orgName) => {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/${orgName}/repos`,
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const repos = await response.json();
    console.log(repos);
    return repos;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const getDiscordGuildInfo = async (guildId) => {
  if (!guildId) {
    console.error("Un ID de guilde est nécessaire");
    return null;
  }
  try {
    const response = await fetch(
      `https://discord.com/api/v10/guilds/${guildId}/widget.json`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const channelInfo = await response.json();
    console.log(channelInfo);
    return channelInfo;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export const getDicordInviteInfo = async (inviteCode) => {
  if (!inviteCode) {
    console.error("Un code d'invitation est nécessaire");
    return null;
  }
  try {
    const response = await fetch(
      `https://discord.com/api/v10/invites/${inviteCode}`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const channelInfo = await response.json();
    console.log(channelInfo);
    return channelInfo;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export const normalizeLang = (lang) => {
  if (typeof lang === "string" && lang.includes("-")) {
    return lang.split("-")[0];
  }
  return lang;
};

export function convertDate(dateStr) {
  if (!dateStr) return null;
  const dateObj = new Date(dateStr);
  const formattedDate = `${String(dateObj.getDate()).padStart(2, "0")}/${String(dateObj.getMonth() + 1).padStart(2, "0")}/${dateObj.getFullYear()}`;
  return formattedDate;
}
