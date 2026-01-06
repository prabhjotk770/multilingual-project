import { useTranslation } from "react-i18next";
import appleLogo from "../assets/applelogo.png"

export default function Header() {
  const { i18n } = useTranslation();

  return (
    <nav className="navbar px-4 d-flex justify-content-between align-items-center">
      <img className="navbar-brand" src={appleLogo} alt= "Apple Store"></img>

      <div className="d-flex align-items-center gap-3">
        

        <select
          className="form-select w-auto"
          value={i18n.language}
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
            localStorage.setItem("lang", e.target.value);
          }}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </nav>
  );
}
