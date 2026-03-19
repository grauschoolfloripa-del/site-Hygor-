import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona o frete?",
    answer: "Oferecemos frete grátis para compras acima de R$ 399. Para valores menores, o custo é calculado no checkout de acordo com seu CEP."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "O prazo de entrega varia de acordo com a sua região e a modalidade escolhida (PAC ou SEDEX). Você pode consultar o prazo estimado no momento do checkout."
  },
  {
    question: "Como lavo minhas peças?",
    answer: "Recomendamos lavar à mão com sabão neutro e secar à sombra para manter a maciez e a durabilidade dos tecidos."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="flex-grow bg-brand-cream py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-brand-brown/60 hover:text-brand-brown mb-8 transition-colors uppercase tracking-widest">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
        </Link>
        
        <h1 className="text-3xl font-light text-brand-brown mb-8">Perguntas Frequentes</h1>
        
        <img 
          src="https://picsum.photos/seed/faq/800/400" 
          alt="Perguntas Frequentes" 
          className="w-full h-64 object-cover mb-8 bg-brand-sand/20"
          referrerPolicy="no-referrer"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-brand-brown/10 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between text-left text-brand-brown font-medium py-2"
              >
                {faq.question}
                {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-brand-brown/80 font-light leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
