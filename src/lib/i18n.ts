'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    common: {
      "navigation": {
        "home": "Home",
        "about": "About",
        "services": "Services",
        "contact": "Contact"
      },
      "common": {
        "loading": "Loading...",
        "error": "An error occurred",
        "welcome": "Welcome",
        "language": "Language"
      },
      "buttons": {
        "submit": "Submit",
        "cancel": "Cancel",
        "save": "Save",
        "edit": "Edit",
        "delete": "Delete"
      }
    }
  },
  de: {
    common: {
      "navigation": {
        "home": "Startseite",
        "about": "Über uns",
        "services": "Dienstleistungen",
        "contact": "Kontakt"
      },
      "common": {
        "loading": "Lädt...",
        "error": "Ein Fehler ist aufgetreten",
        "welcome": "Willkommen",
        "language": "Sprache"
      },
      "buttons": {
        "submit": "Senden",
        "cancel": "Abbrechen",
        "save": "Speichern",
        "edit": "Bearbeiten",
        "delete": "Löschen"
      }
    }
  },
  fr: {
    common: {
      "navigation": {
        "home": "Accueil",
        "about": "À propos",
        "services": "Services",
        "contact": "Contact"
      },
      "common": {
        "loading": "Chargement...",
        "error": "Une erreur s'est produite",
        "welcome": "Bienvenue",
        "language": "Langue"
      },
      "buttons": {
        "submit": "Soumettre",
        "cancel": "Annuler",
        "save": "Enregistrer",
        "edit": "Modifier",
        "delete": "Supprimer"
      }
    }
  },
  tr: {
    common: {
      "navigation": {
        "home": "Ana Sayfa",
        "about": "Hakkımızda",
        "services": "Hizmetler",
        "contact": "İletişim"
      },
      "common": {
        "loading": "Yükleniyor...",
        "error": "Bir hata oluştu",
        "welcome": "Hoş geldiniz",
        "language": "Dil"
      },
      "buttons": {
        "submit": "Gönder",
        "cancel": "İptal",
        "save": "Kaydet",
        "edit": "Düzenle",
        "delete": "Sil"
      }
    }
  }
};

if (typeof window !== 'undefined') {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      defaultNS: 'common',
      
      interpolation: {
        escapeValue: false,
      },
      
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
      },
    });
}

export default i18n;
