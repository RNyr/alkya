import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import frCommon from "./locales/fr/common.json";
import enCommon from "./locales/en/common.json";
import frHeader from "./locales/fr/header.json";
import enHeader from "./locales/en/header.json";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      common: frCommon,
      header: frHeader,
    },
    en: {
      common: enCommon,
      header: enHeader,
    },
  },
  lng: "fr",
  fallbackLng: "en",
  ns: ["common", "header"], // liste des namespaces
  defaultNS: "common", // namespace par défaut dans 't()'
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
