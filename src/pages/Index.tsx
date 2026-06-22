import { motion } from "framer-motion";
import {
  TrendingUp,
  Eye,
  DollarSign,
  Percent,
  Trash2,
  BarChart3,
  Wifi,
  CalendarClock,
} from "lucide-react";
import Countdown from "@/components/Countdown";
import RegistroForm from "@/components/RegistroForm";
import logoPortalDark from "@/assets/logo-portal-delivery-dark.png";
import mentor from "@/assets/mentor.png";
// TODO: substituir pela imagem do hero que o cliente vai enviar
import heroSide from "@/assets/dashboard-vendas.jpeg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scrollToForm = () => {
  document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* TARJA VERMELHA + CONTADOR (fixa) */}
      <header className="sticky top-0 z-40 section-red">
        <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 py-3 px-4">
          <p className="text-sm md:text-base font-extrabold text-white text-center sm:text-left leading-tight">
            Delivery do lucro real — Como passar dos R$10 mil de lucro por mês
          </p>
          <Countdown />
        </div>
      </header>

      {/* HERO */}
      <section className="section-dark py-12 md:py-16 px-4">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Texto + form */}
          <div className="space-y-6">
            <img src={logoPortalDark} alt="Portal do Delivery" className="h-11 w-auto" />
            <h1 className="text-3xl md:text-4xl font-black leading-tight text-white">
              Descubra os 3 pilares para lucrar{" "}
              <span className="text-[#7ED957]">mais de 10 mil reais</span> todos os
              meses <span className="text-primary">no seu delivery.</span>
            </h1>
            <div className="space-y-3 text-white/80 text-sm md:text-base">
              <p>
                Você está cansado de tentar de tudo e mesmo assim continuar sem
                pedidos no seu delivery? Ou pior… até vende bem, mas não vê lucro no
                final do mês?
              </p>
              <p>
                Participe da aula{" "}
                <span className="text-[#7ED957] font-bold">
                  ao vivo e 100% gratuita
                </span>{" "}
                e aprenda o passo a passo para vender mais e lucrar de verdade no
                iFood.
              </p>
              <p className="text-primary font-bold">
                ATENÇÃO: AS VAGAS SÃO LIMITADAS.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-white text-sm font-bold">
              <span className="flex items-center gap-2">
                <CalendarClock className="w-5 h-5 text-primary" /> TODA TERÇA ÀS 15:00
              </span>
              <span className="flex items-center gap-2">
                <Wifi className="w-5 h-5 text-[#4aa3ff]" /> ONLINE E{" "}
                <span className="text-[#4aa3ff]">GRATUITO</span>
              </span>
            </div>
          </div>

          {/* Form (coluna direita) */}
          <div id="inscricao" className="w-full max-w-md mx-auto lg:ml-auto">
            <p className="text-center text-white font-bold mb-3">
              Garanta sua vaga gratuita 👇
            </p>
            <RegistroForm />
            {/* Imagem que o cliente vai enviar (placeholder abaixo) */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={heroSide} alt="Resultados reais no delivery" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* CHAMADA — 100% GRATUITO */}
      <section className="bg-[#1B191B] py-16 px-4 text-center">
        <div className="container max-w-4xl mx-auto space-y-6">
          <motion.h2
            className="text-2xl md:text-3xl font-black text-white uppercase leading-tight"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Descubra toda terça às 15:00 os segredos de quem domina o mercado do
            delivery
          </motion.h2>
          <p className="text-lg md:text-xl text-white/90 font-semibold">
            E o melhor:{" "}
            <span className="bg-[#4aa3ff] text-white px-2 rounded">100% GRATUITO</span>{" "}
            e 100% ONLINE
          </p>
          <button className="btn-cta" onClick={scrollToForm}>
            QUERO COMEÇAR AGORA!
          </button>
        </div>
      </section>

      {/* O CURSO — DELIVERY MACHINE */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
              Apresentado na aula
            </span>
            <h2 className="text-3xl md:text-4xl font-black">
              Delivery Machine
            </h2>
            <p className="text-lg font-bold text-primary mt-1">
              Aprenda a Vender no iFood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-sm md:text-base text-muted-foreground">
              <p>
                Aprenda o método utilizado por{" "}
                <strong className="text-foreground">Ramon Barata</strong> para
                transformar operações de delivery em negócios mais lucrativos e
                previsíveis dentro do iFood.
              </p>
              <p>
                Você vai descobrir como aumentar sua visibilidade na plataforma,
                atrair mais pedidos, precificar corretamente seus produtos, controlar
                o CMV, reduzir desperdícios e melhorar seus resultados sem depender
                apenas de promoções.
              </p>
              <p>
                Estratégias práticas aplicadas em operações reais de hamburguerias,
                pizzarias, açaís, marmitarias e outros modelos de delivery —
                entendendo exatamente o que fazer para{" "}
                <strong className="text-foreground">vender mais e lucrar de verdade.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Eye className="w-6 h-6 text-primary" />, t: "Mais visibilidade", d: "Apareça para mais clientes dentro do iFood." },
                { icon: <TrendingUp className="w-6 h-6 text-primary" />, t: "Mais pedidos", d: "Atraia e converta mais pedidos todos os dias." },
                { icon: <DollarSign className="w-6 h-6 text-primary" />, t: "Precificação correta", d: "Defina preços que vendem e dão lucro." },
                { icon: <Percent className="w-6 h-6 text-primary" />, t: "Controle do CMV", d: "Saiba exatamente quanto custa cada prato." },
                { icon: <Trash2 className="w-6 h-6 text-primary" />, t: "Menos desperdício", d: "Reduza perdas e aumente sua margem." },
                { icon: <BarChart3 className="w-6 h-6 text-primary" />, t: "Resultados previsíveis", d: "Sem depender só de promoções e cupons." },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className="bg-card border border-border rounded-xl p-4 shadow-sm"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="mb-2">{b.icon}</div>
                  <h3 className="font-bold text-sm mb-1">{b.t}</h3>
                  <p className="text-xs text-muted-foreground">{b.d}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="btn-cta" onClick={scrollToForm}>
              QUERO PARTICIPAR DA AULA GRATUITA
            </button>
          </div>
        </div>
      </section>

      {/* MENTOR — RAMON BARATA */}
      <section className="section-dark py-20 px-4">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <img
              src={mentor}
              alt="Ramon Barata"
              loading="lazy"
              className="rounded-2xl shadow-2xl w-64 md:w-80"
            />
          </div>
          <motion.div
            className="flex-1"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-4 text-white leading-none">
              RAMON
              <br />
              <span className="text-[#4aa3ff]">BARATA</span>
            </h2>
            <p className="text-sm md:text-base text-white/80 mb-3">
              Com a minha experiência no iFood criei uma metodologia que já ajudou
              diversas lojas a alcançarem a liberdade financeira empreendendo na área
              do delivery em todo o Brasil.
            </p>
            <p className="text-sm md:text-base text-white/80 mb-6">
              Se você não quer apenas fazer parte do mundo do delivery, mas também ter
              sucesso na sua jornada, garanta sua vaga na próxima aula — toda terça às
              15:00.
            </p>
            <button className="btn-cta" onClick={scrollToForm}>
              COMEÇAR AGORA!
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1B191B] py-8 px-4 text-center">
        <img src={logoPortalDark} alt="Portal do Delivery" className="h-10 w-auto mx-auto mb-4" />
        <p className="text-xs text-white/60 mb-2">
          Copyright © Portal do Delivery — Delivery Machine, 2026
        </p>
        <div className="text-xs text-white/70 flex items-center justify-center gap-3">
          <a href="#" className="hover:text-white underline">
            Política de Privacidade
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="hover:text-white underline">
            Termos de Uso
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
