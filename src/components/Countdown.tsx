import { useEffect, useState } from "react";

/**
 * Retorna a data/hora da PRÓXIMA terça-feira às 15h (horário local).
 * Se já passou da terça 15h desta semana, aponta para a terça da semana seguinte.
 * Assim o contador "renova" sozinho toda semana após o webinário acontecer.
 */
function getNextTuesday3pm(from: Date = new Date()): Date {
  const target = new Date(from);
  const TUESDAY = 2; // 0=domingo ... 2=terça
  const HOUR = 15;

  let daysUntil = (TUESDAY - target.getDay() + 7) % 7;

  // Se hoje é terça mas já passou das 15h, joga para a próxima semana.
  if (daysUntil === 0 && target.getHours() >= HOUR) {
    daysUntil = 7;
  }

  target.setDate(target.getDate() + daysUntil);
  target.setHours(HOUR, 0, 0, 0);
  return target;
}

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

function calcTimeLeft(): TimeLeft {
  const diff = getNextTuesday3pm().getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    dias: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    horas: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((clamped / (1000 * 60)) % 60),
    segundos: Math.floor((clamped / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const Countdown = () => {
  const [time, setTime] = useState<TimeLeft>(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: pad(time.dias), label: "DIAS" },
    { value: pad(time.horas), label: "HORAS" },
    { value: pad(time.minutos), label: "MINUTOS" },
    { value: pad(time.segundos), label: "SEGUNDOS" },
  ];

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {blocks.map((b) => (
        <div
          key={b.label}
          className="flex flex-col items-center justify-center bg-black/90 rounded-lg w-12 sm:w-16 py-1.5 sm:py-2 leading-none"
        >
          <span className="text-lg sm:text-2xl font-black text-white tabular-nums">
            {b.value}
          </span>
          <span className="text-[8px] sm:text-[10px] font-bold text-white/70 tracking-wide mt-0.5">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
