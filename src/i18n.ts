import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "src/assets/langs/en.json";
import uz from "src/assets/langs/uz.json";

i18n.use(initReactI18next).init({
    resources: { en, uz },
    lng: "en",
    fallbackLng: "en",
});

export default i18n;
