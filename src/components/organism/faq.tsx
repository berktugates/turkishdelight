import React from 'react'
import { FAQ } from '../molecule/faq'
import { sampleFaqs } from '@/constants/faqs'

export const Faq = () => {
  return (
    <section id="faq" className="flex flex-col gap-y-2">
    <FAQ
      faqs={sampleFaqs}
      title="Sıkça Sorulan Sorular"
      colorScheme="pink"
      searchable
    />
  </section>
  )
}
