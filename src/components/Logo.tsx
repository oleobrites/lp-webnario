interface LogoProps {
  className?: string;
  /** Cor do traço principal ("P") — escuro no claro, branco no escuro */
  markColor?: string;
  /** Cor de destaque ("D") — vermelho da marca */
  accentColor?: string;
  /** Exibe o texto "Portal do DELIVERY" ao lado do ícone */
  wordmark?: boolean;
  /** Empilha o texto abaixo do ícone (em vez de ao lado) */
  stacked?: boolean;
}

const RED = "hsl(var(--primary))";
const INK = "hsl(var(--foreground))";

/**
 * Logo "Portal do DELIVERY" recriada em SVG (ícone PD + wordmark).
 * Geométrica e responsiva — herda as cores da marca via CSS vars por padrão.
 */
const Logo = ({
  className = "",
  markColor = INK,
  accentColor = RED,
  wordmark = true,
  stacked = false,
}: LogoProps) => {
  const icon = (
    <svg
      viewBox="0 0 64 82"
      className="h-full w-auto shrink-0"
      role="img"
      aria-label="Portal do Delivery"
      fill="none"
    >
      {/* Traço P (principal) — barra esquerda + gancho superior */}
      <path
        d="M22 78 L22 30 Q22 14 36 9"
        stroke={markColor}
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Traço D (destaque) — barra direita + gancho inferior */}
      <path
        d="M42 4 L42 52 Q42 68 28 73"
        stroke={accentColor}
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Detalhe: quadradinho destacado no topo (assinatura da marca) */}
      <rect x="9.5" y="6" width="10" height="10" rx="3" fill={markColor} />
    </svg>
  );

  if (!wordmark) {
    return <span className={`inline-flex ${className}`}>{icon}</span>;
  }

  return (
    <span
      className={`inline-flex items-center ${
        stacked ? "flex-col gap-2 text-center" : "gap-3"
      } ${className}`}
    >
      <span className={stacked ? "h-16" : "h-full"}>{icon}</span>
      <span
        className="font-black leading-[0.95] tracking-tight"
        style={{ color: markColor }}
      >
        <span className="block text-[0.62em] font-bold">Portal do</span>
        <span className="block text-[0.78em]" style={{ color: accentColor }}>
          DELIVERY
        </span>
      </span>
    </span>
  );
};

export default Logo;
