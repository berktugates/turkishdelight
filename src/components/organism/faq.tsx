import React from 'react'
import { FAQ } from '../molecule/faq'
import { sampleFaqs } from '@/constants/faqs'
import { useTranslation } from 'react-i18next'

export const Faq = () => {
  const { t } = useTranslation();
  
  return (
    <section id="faq" className="flex flex-col gap-y-2">
      <FAQ
        faqs={sampleFaqs}
        title={t("faq.title")}
        colorScheme="pink"
        searchable
      />
    </section>
  );
};
