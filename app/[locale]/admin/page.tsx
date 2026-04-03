import Link from "next/link";
import { getTranslations } from "@/lib/i18n";

interface AdminPageProps {
  params: { locale: string };
}

export default function AdminPage({ params }: AdminPageProps) {
  const t = getTranslations(params.locale);

  return (
    <section>
      <h2 className="text-3xl font-semibold">{t.adminTitle}</h2>
      <p className="mt-2 text-slate-700">{t.adminDescription}</p>
      <div className="mt-4">
        <Link href={`/${params.locale}/user`} className="text-blue-600 hover:underline">
          switch to {params.locale === "tr" ? "Kullanıcı" : "User"}
        </Link>
      </div>
    </section>
  );
}
