import { useLocation } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
  ];

  const handleLanguageChange = (langCode: string) => {
    // Remove the current language prefix if it exists
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}\//, "/");
    // Add the new language prefix
    const newPath = `/${langCode}${pathWithoutLang}`;
    window.location.href = newPath;
  };

  return (
    <div className="relative inline-block">
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
