import type { GlobalProvider } from "@ladle/react";
import "../src/styles/globals/normalize.css";
import "../src/styles/globals/global.css";

export const Provider: GlobalProvider = ({ children }) => <>{children}</>;
