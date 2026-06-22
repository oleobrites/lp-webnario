import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const WEBHOOK_URL = "https://nwn.ramonbarata.com.br/webhook/webnario";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const pushDataLayer = (event: string, data: Record<string, unknown>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
};

const getUtms = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    page_url: window.location.href.split("?")[0],
  };
};

interface RegistroFormProps {
  /** classe extra do container (para variações de fundo) */
  className?: string;
}

const RegistroForm = ({ className = "" }: RegistroFormProps) => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }
    setWhatsapp(value.substring(0, 15));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nome.trim()) {
      setError("Por favor, informe seu nome.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }
    const phoneDigits = whatsapp.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      setError("O WhatsApp deve conter o DDD e um número válido.");
      return;
    }

    const payload = {
      tipo: "webinario",
      nome,
      email,
      telefone: whatsapp,
      ...getUtms(),
      data_envio: new Date().toISOString(),
    };

    setIsLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      pushDataLayer("inscricao_webinario", { nome, email, telefone: whatsapp });
      navigate("/obrigado");
    } catch (err) {
      console.error("Webhook error:", err);
      setError("Não foi possível enviar agora. Tente novamente em instantes.");
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-3 rounded-xl bg-white/95 p-5 shadow-2xl ${className}`}
    >
      {error && (
        <p className="text-destructive text-sm text-center font-medium">{error}</p>
      )}
      <Input
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="bg-muted border-border h-12 text-foreground"
      />
      <Input
        type="email"
        placeholder="Melhor e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-muted border-border h-12 text-foreground"
      />
      <Input
        type="tel"
        placeholder="WhatsApp (com DDD)"
        value={whatsapp}
        onChange={handlePhoneChange}
        className="bg-muted border-border h-12 text-foreground"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="btn-cta w-full disabled:opacity-60"
      >
        {isLoading ? "Enviando..." : "QUERO MINHA VAGA GRATUITA"}
      </button>
      <p className="text-[11px] text-center text-muted-foreground">
        100% gratuito • Vagas limitadas • Toda terça às 15h
      </p>
    </form>
  );
};

export default RegistroForm;
