export type Locale = "en" | "tr";

export const locales: Locale[] = ["en", "tr"];

type TranslationKeys = {
  homeTitle: string;
  homeDescription: string;
  adminTitle: string;
  adminDescription: string;
  userTitle: string;
  userDescription: string;
  loginTitle: string;
  loginInstructions: string;
  takeRole: string;
  roleAdmin: string;
  roleUser: string;
};

const dictionary: Record<Locale, TranslationKeys> = {
  en: {
    homeTitle: "Products, In-Mould Labelling Robots, Vision Systems",
    homeDescription: "Browse product categories: IML robots, vision quality control, automation, conveyors.",
    adminTitle: "Admin Dashboard",
    adminDescription: "Welcome, Admin. Manage your platform with this dashboard.",
    userTitle: "User Dashboard",
    userDescription: "Welcome, User. View your data and settings.",
    loginTitle: "Login",
    loginInstructions: "Select a role and enter either Admin or User panel.",
    takeRole: "Choose your role",
    roleAdmin: "Admin",
    roleUser: "User",
  },
  tr: {
    homeTitle: "Ürünler, Kalıplı Etiketleme Robotları, Görsel Sistemler",
    homeDescription: "Ürün kategorilerini inceleyin: IML robotları, kalite kontrol, otomasyon, konveyörler.",
    adminTitle: "Yönetici Paneli",
    adminDescription: "Hoş geldiniz, Yönetici. Bu panel üzerinden yönetim yapabilirsiniz.",
    userTitle: "Kullanıcı Paneli",
    userDescription: "Hoş geldiniz, Kullanıcı. Verilerinizi ve ayarlarınızı görüntüleyin.",
    loginTitle: "Giriş",
    loginInstructions: "Bir rol seçin ve Yönetici veya Kullanıcı paneline geçin.",
    takeRole: "Rolünüzü seçin",
    roleAdmin: "Yönetici",
    roleUser: "Kullanıcı",
  },
};

export function getTranslations(locale: string): TranslationKeys {
  if (locale !== "en" && locale !== "tr") {
    return dictionary.en;
  }
  return dictionary[locale];
}
