import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-4 text-center mt-5">
      <a href="#" className="footer-link mx-3">
        {t("about")}
      </a>
      <a href="#" className="footer-link mx-3">
        {t("contact")}
      </a>
      <a href="#" className="footer-link mx-3">
        {t("privacy")}
      </a>
    </footer>
  );
}
