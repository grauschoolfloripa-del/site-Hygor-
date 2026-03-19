import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ExchangesReturns() {
  return (
    <main className="flex-grow bg-brand-cream py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-brand-brown/60 hover:text-brand-brown mb-8 transition-colors uppercase tracking-widest">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
        </Link>
        
        <h1 className="text-3xl font-light text-brand-brown mb-8">Trocas e Devoluções</h1>
        
        <img 
          src="https://picsum.photos/seed/trocas/800/400" 
          alt="Trocas e Devoluções" 
          className="w-full h-64 object-cover mb-8 bg-brand-sand/20"
          referrerPolicy="no-referrer"
        />

        <div className="prose prose-brand-brown font-light">
          <p className="mb-6">Queremos que você ame sua peça. Se por algum motivo ela não servir ou não for o que esperava, fique tranquila, nós te ajudamos.</p>
          
          <h2 className="text-xl font-medium mb-4">Como solicitar:</h2>
          <ol className="list-decimal pl-5 mb-8 space-y-2">
            <li>Envie um email para contato@marca.com com o número do seu pedido.</li>
            <li>Informe o motivo da troca ou devolução.</li>
            <li>Você receberá um código de postagem reversa em até 48 horas.</li>
          </ol>

          <h2 className="text-xl font-medium mb-4">Regras:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Prazo de 30 dias corridos após o recebimento para trocas.</li>
            <li>Prazo de 7 dias corridos para devoluções (arrependimento).</li>
            <li>A peça deve estar sem sinais de uso, com a etiqueta original fixada.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
