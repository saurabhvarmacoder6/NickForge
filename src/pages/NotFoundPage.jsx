import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
      <h1 className="text-6xl font-extrabold text-amber-400">404</h1>
      <p className="text-xl text-slate-300">Page not found.</p>
      <Link to="/" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 font-bold">{t("generate")}</Link>
    </div>
  );
}
