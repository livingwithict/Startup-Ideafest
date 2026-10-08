const RINGS = [150, 200, 245];
const TICKS = Array.from({ length: 60 }, (_, i) => i * 6);

const at = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return [250 + r * Math.cos(a), 250 + r * Math.sin(a)] as const;
};

/**
 * Brand visual: the Startup & Idea Fest arrow mark over a soft glow in its own colours and thin concentric rings,
 * `onDark` retunes it for the navy band.
 */
export default function HeroArt({ onDark = false }: { onDark?: boolean }) {
  const stroke = onDark ? "#ffffff" : "#105088";
  return (
    <div className="relative h-full w-full" role="img" aria-label="Startup & Idea Fest arrow mark">
      {!onDark && (
        <>
          <div className="absolute left-[8%] top-[12%] size-[46%] rounded-full bg-pink/25 blur-3xl" aria-hidden />
          <div className="absolute bottom-[8%] right-[10%] size-[46%] rounded-full bg-teal/20 blur-3xl" aria-hidden />
          <div className="absolute right-[18%] top-[6%] size-[30%] rounded-full bg-orange/25 blur-3xl" aria-hidden />
        </>
      )}

      <svg viewBox="0 0 500 500" className="absolute inset-0 m-auto h-full max-w-full" aria-hidden>
        {TICKS.map((d) => {
          const [x1, y1] = at(245, d);
          const [x2, y2] = at(d % 30 === 0 ? 233 : 239, d);
          return <line key={d} x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth="1" opacity={onDark ? 0.25 : 0.3} />;
        })}
        {RINGS.map((r, i) => (
          <circle key={r} cx="250" cy="250" r={r} fill="none" stroke={stroke} strokeWidth="1" opacity={onDark ? 0.18 : 0.14 + i * 0.03} strokeDasharray={i === 1 ? "2 7" : undefined} />
        ))}

        {/* small objects tracking round the rings */}
        <g className="orbit">
          <circle cx={at(200, -35)[0]} cy={at(200, -35)[1]} r="13" fill="#0e7a83" opacity="0.18" />
          <circle cx={at(200, -35)[0]} cy={at(200, -35)[1]} r="5.5" fill={onDark ? "#3fc6cf" : "#0e7a83"} />
        </g>
        <g className="orbit-rev">
          <circle cx={at(245, 40)[0]} cy={at(245, 40)[1]} r="5" fill="#b85e12" />
          <circle cx={at(150, -100)[0]} cy={at(150, -100)[1]} r="5" fill={onDark ? "#fff" : "#105088"} />
        </g>
      </svg>

      {/* the mark */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <div className="relative h-[78%]">
          <img src="/logo/SAIF_Logo.svg" alt="" className="relative h-full w-auto" />
        </div>
      </div>
    </div>
  );
}
