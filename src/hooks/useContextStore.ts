import { useContext } from "react";
import { ContextStore } from "../utils";

export const useContextStore = () => useContext(ContextStore);
