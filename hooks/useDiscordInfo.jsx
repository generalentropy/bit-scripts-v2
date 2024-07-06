import { useState, useEffect } from "react";

function useDiscordInfo(guildId) {
  const [infos, setInfos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!guildId) {
      console.error("Vous devez fournir un id de guild");
      setError("Vous devez fournir un id de guild");
      setLoading(false);
      return;
    }

    const getDiscordData = async () => {
      try {
        const response = await fetch(
          `https://discord.com/api/v10/guilds/${guildId}/widget.json`,
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setInfos(data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getDiscordData();
  }, [guildId]);

  return { infos, loading, error };
}

export default useDiscordInfo;
