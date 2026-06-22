import { CheckCircle2, MessageCircle, CalendarClock } from "lucide-react";
import logoPortalDark from "@/assets/logo-portal-delivery-dark.png";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/JnFkg0OHmm365PsRrqE3eX";

const Obrigado = () => {
  return (
    <div className="min-h-screen section-dark flex flex-col items-center justify-center px-4 py-12 text-center">
      <img
        src={logoPortalDark}
        alt="Portal do Delivery"
        className="h-11 w-auto mb-10"
      />

      <div className="w-full max-w-lg bg-white/[0.04] border border-white/10 rounded-2xl p-8 shadow-2xl">
        <CheckCircle2 className="w-16 h-16 text-[#7ED957] mx-auto mb-4" />

        <span className="inline-block bg-primary/15 text-primary text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
          Inscrição confirmada
        </span>

        <h1 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
          Falta só mais um passo!
        </h1>

        <p className="text-white/80 text-sm md:text-base mb-2">
          Entre agora no nosso{" "}
          <strong className="text-white">grupo do WhatsApp</strong>, onde é enviado o{" "}
          <strong className="text-[#7ED957]">link da reunião</strong> e todos os
          avisos da aula.
        </p>

        <p className="text-white/60 text-xs md:text-sm mb-6 flex items-center justify-center gap-2">
          <CalendarClock className="w-4 h-4 text-primary" />
          Toda terça às 15:00 • Online e gratuito
        </p>

        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full font-bold py-4 px-6 rounded-lg text-lg text-white transition-all duration-300 shadow-lg hover:scale-[1.03]"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="w-6 h-6" />
          ENTRAR NO GRUPO
        </a>

        <p className="text-white/40 text-xs mt-4">
          Se o botão não abrir, copie o link:{" "}
          <span className="break-all text-white/60">{WHATSAPP_GROUP_URL}</span>
        </p>
      </div>
    </div>
  );
};

export default Obrigado;
