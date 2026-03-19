import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Instagram, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <main className="flex-grow bg-brand-cream py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-brand-brown/60 hover:text-brand-brown mb-8 transition-colors uppercase tracking-widest">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
        </Link>
        
        <h1 className="text-3xl font-light text-brand-brown mb-8">Contato</h1>
        
        <img 
          src="https://picsum.photos/seed/contato/800/400" 
          alt="Contato" 
          className="w-full h-64 object-cover mb-8 bg-brand-sand/20"
          referrerPolicy="no-referrer"
        />

        <div className="prose prose-brand-brown font-light">
          <p className="mb-8">Estamos aqui para te ouvir. Seja para tirar uma dúvida, dar um feedback ou apenas conversar, sinta-se à vontade para entrar em contato.</p>
          
          <div className="space-y-6">
            <a href="mailto:contato@marca.com" className="flex items-center gap-4 text-brand-brown hover:text-brand-brown/70 transition-colors">
              <Mail className="h-6 w-6" />
              <span>contato@marca.com</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-brand-brown hover:text-brand-brown/70 transition-colors">
              <Instagram className="h-6 w-6" />
              <span>@suamarca</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-brand-brown hover:text-brand-brown/70 transition-colors">
              <MessageCircle className="h-6 w-6" />
              <span>WhatsApp: (11) 99999-9999</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
