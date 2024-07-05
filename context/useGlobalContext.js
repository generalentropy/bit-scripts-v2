import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

export const useGlobalContext = () => useContext(GlobalContext);
