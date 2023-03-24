import { useContext } from "react";
import ContextStore from "../tools/ContextStore";

export const useContextStore = () => useContext(ContextStore);
