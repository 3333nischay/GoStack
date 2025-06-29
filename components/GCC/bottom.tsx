'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is the BOT model for GCCs?',
    answer:
      'The Build-Operate-Transfer (BOT) model let Stack build and manage your India GCC until it is ready to be handed over - with embedded people, processes and IP.',
  },
  {
    question: 'How long does it take to set up a GCC in India?',
    answer:
      'A Stack build GCC can go from blueprint to operational in 3 to 6 months, depending on the size, roles and regulatory clearances.',
  },
  {
    question: 'How does Stack support AI transformation in GCCs?',
    answer:
      'We integrate AI tools, data platforms and automation from day one - helping your GCC evolve into a intelligence center, not just delivery unit.',
  },
  {
    question: 'What roles can I set up in a GCC?',
    answer:
      'From full-stack developers to data scientists and fianance team - GCCs can house everything from tech to ops, tailored to your roadmap.',
  },
  {
    question: 'How are Talent Pods different from traditional staffing?',
    answer:
      'Our pods are pre-curated, cross functions teams that integrate like in-house squads - not freelancers or generic staff.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white font-[Satoshi] px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Heading */}
        <div className="md:w-1/3 my-auto">
          <h2 className="text-3xl sm:text-6xl font-bold text-[#B49AFD]">FAQs</h2>
        </div>

        {/* FAQ List */}
        <div className="md:w-2/3 w-full border-t border-white/30 divide-y divide-white/30">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left text-white text-sm sm:text-base"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-white transition-transform duration-300" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-white transition-transform duration-300" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="mt-2 text-sm text-gray-300 pb-1">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;