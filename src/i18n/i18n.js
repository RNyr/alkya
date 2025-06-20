import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import frCommon from "./locales/fr/common.json";
import enCommon from "./locales/en/common.json";
import frHeader from "./locales/fr/header.json";
import enHeader from "./locales/en/header.json";
import frFooter from "./locales/fr/footer.json";
import enFooter from "./locales/en/footer.json";
import frHomecard from "./locales/fr/homecard.json";
import enHomecard from "./locales/en/homecard.json";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      common: frCommon,
      header: frHeader,
      footer: frFooter,
      homecard: frHomecard,
    },
    en: {
      common: enCommon,
      header: enHeader,
      footer: enFooter,
      homecard: enHomecard,
    },
  },
  lng: "fr",
  fallbackLng: "en",
  ns: ["common", "header", "footer", "homecard"], // liste des namespaces
  defaultNS: "common", // namespace par défaut dans 't()'
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
