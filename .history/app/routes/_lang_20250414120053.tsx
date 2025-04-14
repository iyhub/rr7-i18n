import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "~/components/LanguageSwitcher";

export default function LangLayout() {
  const { i18n } = useTranslation();

  return (
    <div>
      <header className="p-4 bg-gray-100">
        <LanguageSwitcher />
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
