import { useTranslation } from "react-i18next";

export default function ProductList({ products }) {
  const { t, i18n } = useTranslation();

  if (!products.length) return null;

  return (
   <div className="row g-4">
      {products.map((p) => (
        <div key={p.id} className="col-md-4 col-sm-6">
          <div className="apple-card">
            <img src={p.image} alt={t(p.titleKey)}/>
            <h5>{t(p.titleKey)}</h5>
            <p>{t("price")} · {p.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
