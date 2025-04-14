import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    // 获取当前路径，去掉语言前缀
    const pathWithoutLocale = location.pathname.split("/").slice(2).join("/");
    // 构建新的URL路径
    const newPath = `/${lng}${
      pathWithoutLocale ? `/${pathWithoutLocale}` : ""
    }`;
    navigate(newPath);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded ${
          i18n.language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className={`px-3 py-1 rounded ${
          i18n.language === "es" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Español
      </button>
    </div>
  );
}
