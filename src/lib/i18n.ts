import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "navbar": {
        "contact": "Get in Touch",
        "menuOpen": "Open Menu",
        "menuClose": "Close Menu"
      },
      "banner": {
        "status": "New projects being launched",
        "title1": "By your side in all your projects",
        "title2": "At the highest level",
        "contact": "Get in Touch",
        "happyClients": "15+ Happy Clients",
        "completedProjects": "20+ Completed Projects",
        "support": "24/7 Support"
      },
      "whyus": {
        "title": "Why Work With Us?",
        "subtitle": "I transform your expectations into reality by offering solutions at the highest standards for every project.",
        "experience": {
          "title": "Experience",
          "description": "I have been active in web and mobile development for years and have signed many successful projects.",
          "value": "2+ Years"
        },
        "projects": {
          "title": "Completed Projects",
          "description": "I have developed projects of various scales for customers from different sectors.",
          "value": "20+"
        },
        "satisfaction": {
          "title": "Customer Satisfaction",
          "description": "98% of my customers are satisfied with their projects and want to work again.",
          "value": "98%"
        },
        "delivery": {
          "title": "On-Time Delivery",
          "description": "I deliver 95% of our projects on time or earlier.",
          "value": "95%"
        },
        "support": {
          "title": "24/7 Support",
          "description": "We are with you after the project as well. I respond quickly to any questions you have.",
          "value": "24/7"
        },
        "technology": {
          "title": "Current Technologies",
          "description": "I keep up with the latest technologies and make your projects ready for the future.",
          "value": "Modern"
        }
      },
      "techstack": {
        "title": "Technology Stack",
        "subtitle": "I build with modern technologies that carry your projects into the future."
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "subtitle": "Find answers to common questions. Click on any question to expand.",
        "searchPlaceholder": "Search FAQs...",
        "searchLabel": "Search FAQs",
        "noResults": "No FAQs found matching your search criteria.",
        "questions": {
          "technologies": {
            "question": "What technologies do you use?",
            "answer": "I use React, Next.js, TypeScript, Tailwind CSS and other current technologies for modern web development. I use React Native for mobile development, Node.js and NestJS for backend. I choose the most suitable technology stack according to the needs of your projects."
          },
          "mobile": {
            "question": "Do you develop mobile applications?",
            "answer": "Yes, I develop performant mobile applications for iOS and Android. I can develop applications for both iOS and Android platforms with a single codebase using React Native."
          },
          "backend": {
            "question": "Do you have backend and API development services?",
            "answer": "Of course! I develop powerful backend systems with Node.js, NestJS, Express.js. I am an expert in RESTful API, GraphQL, microservice architecture, database design (PostgreSQL, MongoDB) and cloud integrations (AWS, Google Cloud)."
          },
          "delivery": {
            "question": "How are project delivery times determined?",
            "answer": "Project delivery times are determined according to the complexity of the project, number of features and customer requirements. Web projects can take 2-8 weeks, mobile applications 4-12 weeks, backend systems 3-10 weeks. I offer a realistic timeline after a detailed analysis."
          },
          "support": {
            "question": "Do you provide support after the project?",
            "answer": "Yes, I provide support after project delivery for all our projects. I also offer long-term maintenance and development services."
          },
          "pricing": {
            "question": "How is pricing done?",
            "answer": "Pricing is determined according to the scope, complexity and development time of the project. There are different price ranges for websites, mobile applications and backend systems. I offer a transparent price offer after a detailed discovery meeting."
          },
          "responsive": {
            "question": "Is responsive design included?",
            "answer": "Yes, responsive design that provides perfect appearance on mobile, tablet and desktop devices is included as standard in all our projects. I can develop your web applications with Progressive Web App (PWA) feature to provide a mobile-like experience."
          }
        }
      },
      "footer": {
        "copyright": "© 2025 Turkish Delight. All rights reserved."
      }
    }
  },
  de: {
    translation: {
      "navbar": {
        "contact": "Kontakt aufnehmen",
        "menuOpen": "Menü öffnen",
        "menuClose": "Menü schließen"
      },
      "banner": {
        "status": "Neue Projekte werden gestartet",
        "title1": "An Ihrer Seite in all Ihren Projekten",
        "title2": "Auf höchstem Niveau",
        "contact": "Kontakt aufnehmen",
        "happyClients": "15+ Zufriedene Kunden",
        "completedProjects": "20+ Abgeschlossene Projekte",
        "support": "24/7 Support"
      },
      "whyus": {
        "title": "Warum mit uns arbeiten?",
        "subtitle": "Ich verwandle Ihre Erwartungen in die Realität, indem ich für jedes Projekt Lösungen auf höchstem Niveau anbiete.",
        "experience": {
          "title": "Erfahrung",
          "description": "Ich bin seit Jahren im Web- und Mobile-Development tätig und habe viele erfolgreiche Projekte umgesetzt.",
          "value": "2+ Jahre"
        },
        "projects": {
          "title": "Abgeschlossene Projekte",
          "description": "Ich habe Projekte verschiedener Größenordnungen für Kunden aus verschiedenen Branchen entwickelt.",
          "value": "20+"
        },
        "satisfaction": {
          "title": "Kundenzufriedenheit",
          "description": "98% meiner Kunden sind mit ihren Projekten zufrieden und möchten wieder zusammenarbeiten.",
          "value": "98%"
        },
        "delivery": {
          "title": "Pünktliche Lieferung",
          "description": "Ich liefere 95% unserer Projekte pünktlich oder früher ab.",
          "value": "95%"
        },
        "support": {
          "title": "24/7 Support",
          "description": "Wir sind auch nach dem Projekt an Ihrer Seite. Ich antworte schnell auf alle Ihre Fragen.",
          "value": "24/7"
        },
        "technology": {
          "title": "Aktuelle Technologien",
          "description": "Ich halte mich über die neuesten Technologien auf dem Laufenden und mache Ihre Projekte zukunftssicher.",
          "value": "Modern"
        }
      },
      "techstack": {
        "title": "Technologie-Stack",
        "subtitle": "Ich baue mit modernen Technologien, die Ihre Projekte in die Zukunft tragen."
      },
      "faq": {
        "title": "Häufig gestellte Fragen",
        "subtitle": "Finden Sie Antworten auf häufige Fragen. Klicken Sie auf eine Frage, um sie zu erweitern.",
        "searchPlaceholder": "FAQs durchsuchen...",
        "searchLabel": "FAQs durchsuchen",
        "noResults": "Keine FAQs gefunden, die Ihren Suchkriterien entsprechen.",
        "questions": {
          "technologies": {
            "question": "Welche Technologien verwenden Sie?",
            "answer": "Ich verwende React, Next.js, TypeScript, Tailwind CSS und andere aktuelle Technologien für moderne Webentwicklung. Für Mobile Development verwende ich React Native, für Backend Node.js und NestJS. Ich wähle den passendsten Technologie-Stack entsprechend den Bedürfnissen Ihrer Projekte."
          },
          "mobile": {
            "question": "Entwickeln Sie mobile Anwendungen?",
            "answer": "Ja, ich entwickle performante mobile Anwendungen für iOS und Android. Mit React Native kann ich Anwendungen für beide Plattformen mit einer einzigen Codebasis entwickeln."
          },
          "backend": {
            "question": "Haben Sie Backend- und API-Entwicklungsdienste?",
            "answer": "Natürlich! Ich entwickle leistungsstarke Backend-Systeme mit Node.js, NestJS, Express.js. Ich bin Experte für RESTful API, GraphQL, Microservice-Architektur, Datenbankdesign (PostgreSQL, MongoDB) und Cloud-Integrationen (AWS, Google Cloud)."
          },
          "delivery": {
            "question": "Wie werden Projektlieferzeiten bestimmt?",
            "answer": "Projektlieferzeiten werden nach Komplexität des Projekts, Anzahl der Features und Kundenanforderungen bestimmt. Webprojekte können 2-8 Wochen dauern, mobile Anwendungen 4-12 Wochen, Backend-Systeme 3-10 Wochen. Nach einer detaillierten Analyse biete ich einen realistischen Zeitplan."
          },
          "support": {
            "question": "Bieten Sie Support nach dem Projekt?",
            "answer": "Ja, ich biete Support nach Projektlieferung für alle unsere Projekte. Ich biete auch langfristige Wartungs- und Entwicklungsdienste."
          },
          "pricing": {
            "question": "Wie erfolgt die Preisgestaltung?",
            "answer": "Die Preisgestaltung erfolgt nach Umfang, Komplexität und Entwicklungszeit des Projekts. Es gibt verschiedene Preisbereiche für Websites, mobile Anwendungen und Backend-Systeme. Nach einem detaillierten Entdeckungsmeeting biete ich ein transparentes Preisangebot."
          },
          "responsive": {
            "question": "Ist responsives Design enthalten?",
            "answer": "Ja, responsives Design, das perfekte Darstellung auf mobilen, Tablet- und Desktop-Geräten bietet, ist Standard in allen unseren Projekten. Ich kann Ihre Webanwendungen mit Progressive Web App (PWA) Feature entwickeln, um eine mobile-ähnliche Erfahrung zu bieten."
          }
        }
      },
      "footer": {
        "copyright": "© 2025 Turkish Delight. Alle Rechte vorbehalten."
      }
    }
  },
  fr: {
    translation: {
      "navbar": {
        "contact": "Entrer en contact",
        "menuOpen": "Ouvrir le menu",
        "menuClose": "Fermer le menu"
      },
      "banner": {
        "status": "Nouveaux projets en cours de lancement",
        "title1": "À vos côtés dans tous vos projets",
        "title2": "Au plus haut niveau",
        "contact": "Entrer en contact",
        "happyClients": "15+ Clients satisfaits",
        "completedProjects": "20+ Projets terminés",
        "support": "Support 24/7"
      },
      "whyus": {
        "title": "Pourquoi travailler avec nous ?",
        "subtitle": "Je transforme vos attentes en réalité en offrant des solutions aux plus hauts standards pour chaque projet.",
        "experience": {
          "title": "Expérience",
          "description": "Je suis actif dans le développement web et mobile depuis des années et j'ai signé de nombreux projets réussis.",
          "value": "2+ Ans"
        },
        "projects": {
          "title": "Projets terminés",
          "description": "J'ai développé des projets de différentes échelles pour des clients de différents secteurs.",
          "value": "20+"
        },
        "satisfaction": {
          "title": "Satisfaction client",
          "description": "98% de mes clients sont satisfaits de leurs projets et souhaitent retravailler ensemble.",
          "value": "98%"
        },
        "delivery": {
          "title": "Livraison à temps",
          "description": "Je livre 95% de nos projets à temps ou plus tôt.",
          "value": "95%"
        },
        "support": {
          "title": "Support 24/7",
          "description": "Nous sommes à vos côtés après le projet également. Je réponds rapidement à toutes vos questions.",
          "value": "24/7"
        },
        "technology": {
          "title": "Technologies actuelles",
          "description": "Je suis à jour avec les dernières technologies et rends vos projets prêts pour l'avenir.",
          "value": "Moderne"
        }
      },
      "techstack": {
        "title": "Stack technologique",
        "subtitle": "Je construis avec des technologies modernes qui portent vos projets vers l'avenir."
      },
      "faq": {
        "title": "Questions fréquemment posées",
        "subtitle": "Trouvez des réponses aux questions courantes. Cliquez sur une question pour l'étendre.",
        "searchPlaceholder": "Rechercher dans les FAQ...",
        "searchLabel": "Rechercher dans les FAQ",
        "noResults": "Aucune FAQ trouvée correspondant à vos critères de recherche.",
        "questions": {
          "technologies": {
            "question": "Quelles technologies utilisez-vous ?",
            "answer": "J'utilise React, Next.js, TypeScript, Tailwind CSS et d'autres technologies actuelles pour le développement web moderne. Pour le développement mobile, j'utilise React Native, pour le backend Node.js et NestJS. Je choisis la stack technologique la plus appropriée selon les besoins de vos projets."
          },
          "mobile": {
            "question": "Développez-vous des applications mobiles ?",
            "answer": "Oui, je développe des applications mobiles performantes pour iOS et Android. Avec React Native, je peux développer des applications pour les deux plateformes avec une seule base de code."
          },
          "backend": {
            "question": "Avez-vous des services de développement backend et API ?",
            "answer": "Bien sûr ! Je développe des systèmes backend puissants avec Node.js, NestJS, Express.js. Je suis expert en RESTful API, GraphQL, architecture microservices, conception de base de données (PostgreSQL, MongoDB) et intégrations cloud (AWS, Google Cloud)."
          },
          "delivery": {
            "question": "Comment sont déterminés les délais de livraison des projets ?",
            "answer": "Les délais de livraison des projets sont déterminés selon la complexité du projet, le nombre de fonctionnalités et les exigences du client. Les projets web peuvent prendre 2-8 semaines, les applications mobiles 4-12 semaines, les systèmes backend 3-10 semaines. J'offre un calendrier réaliste après une analyse détaillée."
          },
          "support": {
            "question": "Fournissez-vous un support après le projet ?",
            "answer": "Oui, je fournis un support après la livraison du projet pour tous nos projets. J'offre également des services de maintenance et de développement à long terme."
          },
          "pricing": {
            "question": "Comment se fait la tarification ?",
            "answer": "La tarification est déterminée selon la portée, la complexité et le temps de développement du projet. Il y a différentes gammes de prix pour les sites web, applications mobiles et systèmes backend. J'offre une offre de prix transparente après une réunion de découverte détaillée."
          },
          "responsive": {
            "question": "Le design responsive est-il inclus ?",
            "answer": "Oui, le design responsive qui offre une apparence parfaite sur mobile, tablette et ordinateur de bureau est inclus en standard dans tous nos projets. Je peux développer vos applications web avec la fonctionnalité Progressive Web App (PWA) pour offrir une expérience similaire au mobile."
          }
        }
      },
      "footer": {
        "copyright": "© 2025 Turkish Delight. Tous droits réservés."
      }
    }
  },
  it: {
    translation: {
      "navbar": {
        "contact": "Mettiti in contatto",
        "menuOpen": "Apri menu",
        "menuClose": "Chiudi menu"
      },
      "banner": {
        "status": "Nuovi progetti in fase di lancio",
        "title1": "Al tuo fianco in tutti i tuoi progetti",
        "title2": "Al massimo livello",
        "contact": "Mettiti in contatto",
        "happyClients": "15+ Clienti soddisfatti",
        "completedProjects": "20+ Progetti completati",
        "support": "Supporto 24/7"
      },
      "whyus": {
        "title": "Perché lavorare con noi?",
        "subtitle": "Trasformo le tue aspettative in realtà offrendo soluzioni ai massimi standard per ogni progetto.",
        "experience": {
          "title": "Esperienza",
          "description": "Sono attivo nello sviluppo web e mobile da anni e ho firmato molti progetti di successo.",
          "value": "2+ Anni"
        },
        "projects": {
          "title": "Progetti completati",
          "description": "Ho sviluppato progetti di varie scale per clienti di diversi settori.",
          "value": "20+"
        },
        "satisfaction": {
          "title": "Soddisfazione del cliente",
          "description": "Il 98% dei miei clienti è soddisfatto dei loro progetti e vuole lavorare di nuovo insieme.",
          "value": "98%"
        },
        "delivery": {
          "title": "Consegna puntuale",
          "description": "Consegno il 95% dei nostri progetti in tempo o prima.",
          "value": "95%"
        },
        "support": {
          "title": "Supporto 24/7",
          "description": "Siamo al tuo fianco anche dopo il progetto. Rispondo rapidamente a tutte le tue domande.",
          "value": "24/7"
        },
        "technology": {
          "title": "Tecnologie attuali",
          "description": "Sono aggiornato con le ultime tecnologie e rendo i tuoi progetti pronti per il futuro.",
          "value": "Moderno"
        }
      },
      "techstack": {
        "title": "Stack tecnologico",
        "subtitle": "Costruisco con tecnologie moderne che portano i tuoi progetti nel futuro."
      },
      "faq": {
        "title": "Domande frequenti",
        "subtitle": "Trova risposte alle domande comuni. Clicca su una domanda per espanderla.",
        "searchPlaceholder": "Cerca nelle FAQ...",
        "searchLabel": "Cerca nelle FAQ",
        "noResults": "Nessuna FAQ trovata che corrisponda ai tuoi criteri di ricerca.",
        "questions": {
          "technologies": {
            "question": "Quali tecnologie usi?",
            "answer": "Uso React, Next.js, TypeScript, Tailwind CSS e altre tecnologie attuali per lo sviluppo web moderno. Per lo sviluppo mobile uso React Native, per il backend Node.js e NestJS. Scelgo lo stack tecnologico più adatto secondo le esigenze dei tuoi progetti."
          },
          "mobile": {
            "question": "Sviluppi applicazioni mobili?",
            "answer": "Sì, sviluppo applicazioni mobili performanti per iOS e Android. Con React Native posso sviluppare applicazioni per entrambe le piattaforme con una singola base di codice."
          },
          "backend": {
            "question": "Hai servizi di sviluppo backend e API?",
            "answer": "Certo! Sviluppo potenti sistemi backend con Node.js, NestJS, Express.js. Sono esperto in RESTful API, GraphQL, architettura microservizi, progettazione database (PostgreSQL, MongoDB) e integrazioni cloud (AWS, Google Cloud)."
          },
          "delivery": {
            "question": "Come vengono determinati i tempi di consegna dei progetti?",
            "answer": "I tempi di consegna dei progetti sono determinati secondo la complessità del progetto, numero di funzionalità e requisiti del cliente. I progetti web possono richiedere 2-8 settimane, le applicazioni mobili 4-12 settimane, i sistemi backend 3-10 settimane. Offro una timeline realistica dopo un'analisi dettagliata."
          },
          "support": {
            "question": "Fornisci supporto dopo il progetto?",
            "answer": "Sì, fornisco supporto dopo la consegna del progetto per tutti i nostri progetti. Offro anche servizi di manutenzione e sviluppo a lungo termine."
          },
          "pricing": {
            "question": "Come viene fatto il pricing?",
            "answer": "Il pricing è determinato secondo la portata, complessità e tempo di sviluppo del progetto. Ci sono diverse fasce di prezzo per siti web, applicazioni mobili e sistemi backend. Offro un'offerta di prezzo trasparente dopo un meeting di scoperta dettagliato."
          },
          "responsive": {
            "question": "Il design responsive è incluso?",
            "answer": "Sì, il design responsive che offre un aspetto perfetto su mobile, tablet e desktop è incluso come standard in tutti i nostri progetti. Posso sviluppare le tue applicazioni web con la funzionalità Progressive Web App (PWA) per offrire un'esperienza simile al mobile."
          }
        }
      },
      "footer": {
        "copyright": "© 2025 Turkish Delight. Tutti i diritti riservati."
      }
    }
  },
  tr: {
    translation: {
      "navbar": {
        "contact": "İletişime Geç",
        "menuOpen": "Menüyü Aç",
        "menuClose": "Menüyü Kapat"
      },
      "banner": {
        "status": "Yeni projeler hayata geçiriliyor",
        "title1": "Tüm projelerinizde yanınızda",
        "title2": "En üst seviyede",
        "contact": "İletişime Geç",
        "happyClients": "15+ Mutlu Müşteri",
        "completedProjects": "20+ Biten Proje",
        "support": "7/24 Destek"
      },
      "whyus": {
        "title": "Neden Çalışmalısın?",
        "subtitle": "Her projeye, en yüksek standartlarda çözümler sunarak beklentilerinizi gerçeğe dönüştürüyorum.",
        "experience": {
          "title": "Deneyim",
          "description": "Yıllardır web ve mobil geliştirme alanında faaliyet göstererek birçok başarılı projeye imza attım.",
          "value": "2+ Yıl"
        },
        "projects": {
          "title": "Tamamlanan Projeler",
          "description": "Farklı sektörlerden müşteriler için çeşitli ölçeklerde projeler geliştirdim.",
          "value": "20+"
        },
        "satisfaction": {
          "title": "Müşteri Memnuniyeti",
          "description": "Müşterilerimin %98'i projelerinden memnun kaldı ve tekrar çalışmak istiyor.",
          "value": "%98"
        },
        "delivery": {
          "title": "Zamanında Teslimat",
          "description": "Projelerimizin %95'ini belirlenen sürede veya daha erken teslim ediyorum.",
          "value": "%95"
        },
        "support": {
          "title": "7/24 Destek",
          "description": "Proje sonrası da yanınızdayız. Herhangi bir sorunuzda hızla yanıt veriyorum.",
          "value": "24/7"
        },
        "technology": {
          "title": "Güncel Teknolojiler",
          "description": "En son teknolojileri takip ederek projelerinizi geleceğe hazır hale getiriyorum.",
          "value": "Modern"
        }
      },
      "techstack": {
        "title": "Teknoloji Yığını",
        "subtitle": "Projelerinizi geleceğe taşıyan modern teknolojilerle inşa ediyorum."
      },
      "faq": {
        "title": "Sıkça Sorulan Sorular",
        "subtitle": "Yaygın soruların yanıtlarını bulun. Herhangi bir soruya tıklayarak genişletin.",
        "searchPlaceholder": "SSS'leri ara...",
        "searchLabel": "SSS'leri Ara",
        "noResults": "Arama kriterlerinize uygun SSS bulunamadı.",
        "questions": {
          "technologies": {
            "question": "Hangi teknolojileri kullanıyorsunuz?",
            "answer": "Modern web geliştirme için React, Next.js, TypeScript, Tailwind CSS ve diğer güncel teknolojileri kullanıyorum. Mobil geliştirme için React Native, backend için Node.js, NestJS kullanıyorum. Projelerinizin ihtiyaçlarına göre en uygun teknoloji yığınını seçiyorum."
          },
          "mobile": {
            "question": "Mobil uygulama geliştiriyor musunuz?",
            "answer": "Evet, iOS ve Android için performanslı mobil uygulamalar geliştiriyorum. React Native kullanarak hem iOS hem de Android platformları için tek kod tabanında uygulama geliştirebiliyorum."
          },
          "backend": {
            "question": "Backend ve API geliştirme hizmetiniz var mı?",
            "answer": "Tabii ki! Node.js, NestJS, Express.js ile güçlü backend sistemleri geliştiriyorum. RESTful API, GraphQL, mikroservis mimarisi, veritabanı tasarımı (PostgreSQL, MongoDB) ve cloud entegrasyonları (AWS, Google Cloud) konularında uzmanım."
          },
          "delivery": {
            "question": "Proje teslim süreleri nasıl belirleniyor?",
            "answer": "Proje teslim süreleri, projenin karmaşıklığına, özellik sayısına ve müşteri gereksinimlerine göre belirlenir. Web projeleri için 2-8 hafta, mobil uygulamalar için 4-12 hafta, backend sistemleri için 3-10 hafta sürebilir. Detaylı bir analiz sonrasında gerçekçi bir zaman çizelgesi sunuyorum."
          },
          "support": {
            "question": "Proje sonrası destek sağlıyor musunuz?",
            "answer": "Evet, tüm projelerimiz için proje teslimi sonrası destek sağlıyorum. Ayrıca uzun vadeli bakım ve geliştirme hizmetleri de sunuyorum."
          },
          "pricing": {
            "question": "Fiyatlandırma nasıl yapılıyor?",
            "answer": "Fiyatlandırma, projenin kapsamına, karmaşıklığına ve geliştirme süresine göre belirlenir. Web siteleri, mobil uygulamalar ve backend sistemleri için farklı fiyat aralıkları bulunmaktadır. Detaylı bir keşif toplantısı sonrasında şeffaf bir fiyat teklifi sunuyorum."
          },
          "responsive": {
            "question": "Responsive tasarım dahil mi?",
            "answer": "Evet, tüm projelerimizde mobil, tablet ve masaüstü cihazlarda mükemmel görünüm sağlayan responsive tasarım standart olarak dahildir. Progressive Web App (PWA) özelliği ile web uygulamalarınızı mobil benzeri deneyim sunacak şekilde geliştirebilirim."
          }
        }
      },
      "footer": {
        "copyright": "© 2025 Turkish Delight. Tüm hakları saklıdır."
      }
    }
  },
  es: {
    translation: {
      "navbar": {
        "contact": "Ponerse en contacto",
        "menuOpen": "Abrir menú",
        "menuClose": "Cerrar menú"
      },
      "banner": {
        "status": "Nuevos proyectos en lanzamiento",
        "title1": "A tu lado en todos tus proyectos",
        "title2": "Al más alto nivel",
        "contact": "Ponerse en contacto",
        "happyClients": "15+ Clientes satisfechos",
        "completedProjects": "20+ Proyectos completados",
        "support": "Soporte 24/7"
      },
      "whyus": {
        "title": "¿Por qué trabajar con nosotros?",
        "subtitle": "Transformo tus expectativas en realidad ofreciendo soluciones de los más altos estándares para cada proyecto.",
        "experience": {
          "title": "Experiencia",
          "description": "He estado activo en desarrollo web y móvil durante años y he firmado muchos proyectos exitosos.",
          "value": "2+ Años"
        },
        "projects": {
          "title": "Proyectos completados",
          "description": "He desarrollado proyectos de varias escalas para clientes de diferentes sectores.",
          "value": "20+"
        },
        "satisfaction": {
          "title": "Satisfacción del cliente",
          "description": "El 98% de mis clientes están satisfechos con sus proyectos y quieren trabajar juntos de nuevo.",
          "value": "98%"
        },
        "delivery": {
          "title": "Entrega puntual",
          "description": "Entregó el 95% de nuestros proyectos a tiempo o antes.",
          "value": "95%"
        },
        "support": {
          "title": "Soporte 24/7",
          "description": "Estamos a tu lado después del proyecto también. Respondo rápidamente a todas tus preguntas.",
          "value": "24/7"
        },
        "technology": {
          "title": "Tecnologías actuales",
          "description": "Me mantengo al día con las últimas tecnologías y hago que tus proyectos estén listos para el futuro.",
          "value": "Moderno"
        }
      },
      "techstack": {
        "title": "Stack tecnológico",
        "subtitle": "Construyo con tecnologías modernas que llevan tus proyectos al futuro."
      },
      "faq": {
        "title": "Preguntas frecuentes",
        "subtitle": "Encuentra respuestas a preguntas comunes. Haz clic en cualquier pregunta para expandirla.",
        "searchPlaceholder": "Buscar en FAQ...",
        "searchLabel": "Buscar en FAQ",
        "noResults": "No se encontraron FAQ que coincidan con tus criterios de búsqueda.",
        "questions": {
          "technologies": {
            "question": "¿Qué tecnologías usas?",
            "answer": "Uso React, Next.js, TypeScript, Tailwind CSS y otras tecnologías actuales para desarrollo web moderno. Para desarrollo móvil uso React Native, para backend Node.js y NestJS. Elijo el stack tecnológico más adecuado según las necesidades de tus proyectos."
          },
          "mobile": {
            "question": "¿Desarrollas aplicaciones móviles?",
            "answer": "Sí, desarrollo aplicaciones móviles performantes para iOS y Android. Con React Native puedo desarrollar aplicaciones para ambas plataformas con una sola base de código."
          },
          "backend": {
            "question": "¿Tienes servicios de desarrollo backend y API?",
            "answer": "¡Por supuesto! Desarrollo sistemas backend potentes con Node.js, NestJS, Express.js. Soy experto en RESTful API, GraphQL, arquitectura de microservicios, diseño de base de datos (PostgreSQL, MongoDB) e integraciones en la nube (AWS, Google Cloud)."
          },
          "delivery": {
            "question": "¿Cómo se determinan los tiempos de entrega de proyectos?",
            "answer": "Los tiempos de entrega de proyectos se determinan según la complejidad del proyecto, número de características y requisitos del cliente. Los proyectos web pueden tomar 2-8 semanas, las aplicaciones móviles 4-12 semanas, los sistemas backend 3-10 semanas. Ofrezco una línea de tiempo realista después de un análisis detallado."
          },
          "support": {
            "question": "¿Proporcionas soporte después del proyecto?",
            "answer": "Sí, proporciono soporte después de la entrega del proyecto para todos nuestros proyectos. También ofrezco servicios de mantenimiento y desarrollo a largo plazo."
          },
          "pricing": {
            "question": "¿Cómo se hace la fijación de precios?",
            "answer": "La fijación de precios se determina según el alcance, complejidad y tiempo de desarrollo del proyecto. Hay diferentes rangos de precios para sitios web, aplicaciones móviles y sistemas backend. Ofrezco una oferta de precio transparente después de una reunión de descubrimiento detallada."
          },
          "responsive": {
            "question": "¿El diseño responsive está incluido?",
            "answer": "Sí, el diseño responsive que proporciona apariencia perfecta en dispositivos móviles, tabletas y de escritorio está incluido como estándar en todos nuestros proyectos. Puedo desarrollar tus aplicaciones web con la funcionalidad Progressive Web App (PWA) para proporcionar una experiencia similar a la móvil."
          }
        }
      },
      "footer": {
        "copyright": "© 2025 Turkish Delight. Todos los derechos reservados."
      }
    }
  },
  ar: {
    translation: {
      "navbar": {
        "contact": "تواصل معنا",
        "menuOpen": "فتح القائمة",
        "menuClose": "إغلاق القائمة"
      },
      "banner": {
        "status": "مشاريع جديدة قيد الإطلاق",
        "title1": "إلى جانبك في جميع مشاريعك",
        "title2": "على أعلى مستوى",
        "contact": "تواصل معنا",
        "happyClients": "15+ عميل راضٍ",
        "completedProjects": "20+ مشروع مكتمل",
        "support": "دعم 24/7"
      },
      "whyus": {
        "title": "لماذا تعمل معنا؟",
        "subtitle": "أحول توقعاتك إلى واقع من خلال تقديم حلول بأعلى المعايير لكل مشروع.",
        "experience": {
          "title": "الخبرة",
          "description": "أعمل في تطوير الويب والموبايل لسنوات ووقعت العديد من المشاريع الناجحة.",
          "value": "2+ سنوات"
        },
        "projects": {
          "title": "المشاريع المكتملة",
          "description": "طورت مشاريع بمقاييس مختلفة لعملاء من قطاعات مختلفة.",
          "value": "20+"
        },
        "satisfaction": {
          "title": "رضا العملاء",
          "description": "98% من عملائي راضون عن مشاريعهم ويريدون العمل معاً مرة أخرى.",
          "value": "98%"
        },
        "delivery": {
          "title": "التسليم في الوقت المحدد",
          "description": "أسلم 95% من مشاريعنا في الوقت المحدد أو قبل ذلك.",
          "value": "95%"
        },
        "support": {
          "title": "دعم 24/7",
          "description": "نحن إلى جانبك بعد المشروع أيضاً. أرد بسرعة على جميع أسئلتك.",
          "value": "24/7"
        },
        "technology": {
          "title": "التقنيات الحالية",
          "description": "أتابع أحدث التقنيات وأجعل مشاريعك جاهزة للمستقبل.",
          "value": "حديث"
        }
      },
      "techstack": {
        "title": "مجموعة التقنيات",
        "subtitle": "أبني بتقنيات حديثة تحمل مشاريعك إلى المستقبل."
      },
      "faq": {
        "title": "الأسئلة الشائعة",
        "subtitle": "اعثر على إجابات للأسئلة الشائعة. انقر على أي سؤال لتوسيعه.",
        "searchPlaceholder": "البحث في الأسئلة الشائعة...",
        "searchLabel": "البحث في الأسئلة الشائعة",
        "noResults": "لم يتم العثور على أسئلة شائعة تطابق معايير البحث الخاصة بك.",
        "questions": {
          "technologies": {
            "question": "ما التقنيات التي تستخدمها؟",
            "answer": "أستخدم React، Next.js، TypeScript، Tailwind CSS وتقنيات أخرى حالية لتطوير الويب الحديث. لتطوير الموبايل أستخدم React Native، للخادم Node.js و NestJS. أختار مجموعة التقنيات الأنسب حسب احتياجات مشاريعك."
          },
          "mobile": {
            "question": "هل تطور تطبيقات موبايل؟",
            "answer": "نعم، أطور تطبيقات موبايل عالية الأداء لـ iOS و Android. باستخدام React Native يمكنني تطوير تطبيقات لكلا المنصتين بقاعدة كود واحدة."
          },
          "backend": {
            "question": "هل لديك خدمات تطوير الخادم و API؟",
            "answer": "بالطبع! أطور أنظمة خادم قوية باستخدام Node.js، NestJS، Express.js. أنا خبير في RESTful API، GraphQL، معمارية الخدمات المصغرة، تصميم قاعدة البيانات (PostgreSQL، MongoDB) وتكاملات السحابة (AWS، Google Cloud)."
          },
          "delivery": {
            "question": "كيف يتم تحديد أوقات تسليم المشاريع؟",
            "answer": "أوقات تسليم المشاريع يتم تحديدها حسب تعقيد المشروع، عدد الميزات ومتطلبات العميل. مشاريع الويب قد تستغرق 2-8 أسابيع، تطبيقات الموبايل 4-12 أسبوع، أنظمة الخادم 3-10 أسابيع. أقدم جدول زمني واقعي بعد تحليل مفصل."
          },
          "support": {
            "question": "هل تقدم الدعم بعد المشروع؟",
            "answer": "نعم، أقدم الدعم بعد تسليم المشروع لجميع مشاريعنا. كما أقدم خدمات الصيانة والتطوير طويلة المدى."
          },
          "pricing": {
            "question": "كيف يتم التسعير؟",
            "answer": "التسعير يتم تحديده حسب نطاق المشروع، تعقيده ووقت التطوير. هناك نطاقات أسعار مختلفة لمواقع الويب، تطبيقات الموبايل وأنظمة الخادم. أقدم عرض سعر شفاف بعد اجتماع اكتشاف مفصل."
          },
          "responsive": {
            "question": "هل التصميم المتجاوب مدرج؟",
            "answer": "نعم، التصميم المتجاوب الذي يوفر مظهراً مثالياً على أجهزة الموبايل، التابلت وسطح المكتب مدرج كمعيار في جميع مشاريعنا. يمكنني تطوير تطبيقات الويب الخاصة بك بميزة Progressive Web App (PWA) لتوفير تجربة شبيهة بالموبايل."
          }
        }
      },
      "footer": {
        "copyright": "© 2025 Turkish Delight. جميع الحقوق محفوظة."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'tr',
    defaultNS: 'translation',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      convertDetectedLanguage: (lng: string) => {
        const supportedLngs = ['en', 'de', 'fr', 'it', 'tr', 'es', 'ar'];
        
        if (supportedLngs.includes(lng)) {
          return lng;
        }
        
        const shortLng = lng.split('-')[0];
        if (supportedLngs.includes(shortLng)) {
          return shortLng;
        }
        
        return 'en';
      }
    },
    supportedLngs: ['en', 'de', 'fr', 'it', 'tr', 'es', 'ar'],
  });

export default i18n;