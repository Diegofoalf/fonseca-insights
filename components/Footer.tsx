import Link from "next/link";
import { LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="border-t border-[#E2DDD5] bg-[#F5F2EC] mt-auto">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-[family-name:var(--font-playfair)] text-base font-semibold text-[#1A1814]">
            Diego Fonseca Alfonso
          </p>
          <p className="text-sm text-[#6B645C] mt-1">
            Analista e investigador.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/diego-fonseca-alfonso-3657b5254"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#6B645C] hover:text-[#8B4513] transition-colors"
          >
            <LinkedinLogo size={20} weight="regular" />
          </a>
          <a
            href="mailto:diegofonseca04@hotmail.com"
            aria-label="Email"
            className="text-[#6B645C] hover:text-[#8B4513] transition-colors"
          >
            <EnvelopeSimple size={20} weight="regular" />
          </a>
        </div>

        <p className="font-[family-name:var(--font-dm-mono)] text-xs text-[#A09890]">
          © {new Date().getFullYear()} Fonseca Insights
        </p>
      </div>
    </footer>
  );
}
