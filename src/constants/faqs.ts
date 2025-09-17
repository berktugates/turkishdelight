export interface FAQItem {
  question: string;
  answer: string;
}

export const sampleFaqs: FAQItem[] = [
  {
    question: "Hangi teknolojileri kullanıyorsunuz?",
    answer: "Modern web geliştirme için React, Next.js, TypeScript, Tailwind CSS ve diğer güncel teknolojileri kullanıyorum. Mobile geliştirme için React Native, backend için Node.js, NestJS kullanıyorum. Projelerinizin ihtiyaçlarına göre en uygun teknoloji yığınını seçiyorum."
  },
  {
    question: "Mobile uygulama geliştiriyor musunuz?",
    answer: "Evet, iOS ve Android için performanslı mobile uygulamalar geliştiriyorum. React Native kullanarak hem iOS hem de Android platformları için tek kod tabanında uygulama geliştirebiliyorum."
  },
  {
    question: "Backend ve API geliştirme hizmetiniz var mı?",
    answer: "Tabii ki! Node.js, NestJS, Express.js ile güçlü backend sistemleri geliştiriyorum. RESTful API, GraphQL, mikroservis mimarisi, veritabanı tasarımı (PostgreSQL, MongoDB) ve cloud entegrasyonları (AWS, Google Cloud) konularında uzmanım."
  },
  {
    question: "Proje teslim süreleri nasıl belirleniyor?",
    answer: "Proje teslim süreleri, projenin karmaşıklığına, özellik sayısına ve müşteri gereksinimlerine göre belirlenir. Web projeleri için 2-8 hafta, mobile uygulamalar için 4-12 hafta, backend sistemleri için 3-10 hafta sürebilir. Detaylı bir analiz sonrasında gerçekçi bir zaman çizelgesi sunuyorum."
  },
  {
    question: "Proje sonrası destek sağlıyor musunuz?",
    answer: "Evet, tüm projelerimiz için proje teslimi sonrası destek sağlıyorum. Ayrıca uzun vadeli bakım ve geliştirme hizmetleri de sunuyorum."
  },
  {
    question: "Fiyatlandırma nasıl yapılıyor?",
    answer: "Fiyatlandırma, projenin kapsamına, karmaşıklığına ve geliştirme süresine göre belirlenir. Web siteleri, mobile uygulamalar ve backend sistemleri için farklı fiyat aralıkları bulunmaktadır. Detaylı bir keşif toplantısı sonrasında şeffaf bir fiyat teklifi sunuyorum."
  },
  {
    question: "Responsive tasarım dahil mi?",
    answer: "Evet, tüm projelerimizde mobil, tablet ve masaüstü cihazlarda mükemmel görünüm sağlayan responsive tasarım standart olarak dahildir. Progressive Web App (PWA) özelliği ile web uygulamalarınızı mobile benzeri deneyim sunacak şekilde geliştirebilirim."
  }
];
