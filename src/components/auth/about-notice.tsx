import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface AboutNoticeProps {
  className?: string;
}

/**
 * Aviso informativo discreto que indica el carácter académico y demostrativo
 * del proyecto. Se muestra debajo de las tarjetas de autenticación.
 */
export function AboutNotice({ className }: AboutNoticeProps) {
  return (
    <aside
      aria-labelledby="about-onelink-title"
      className={cn(
        "mx-auto w-full rounded-2xl border border-primary/10 bg-primary/5 px-5 py-4 text-center",
        className
      )}
    >
      <h2
        id="about-onelink-title"
        className="flex items-center justify-center gap-2 text-sm font-semibold text-primary"
      >
        <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
        Acerca de OneLink
      </h2>
      <div className="mt-2 space-y-2 text-xs leading-relaxed text-muted-foreground sm:text-[0.8125rem]">
        <p>
          OneLink es una plataforma que permite crear páginas personalizadas
          para reunir y compartir información, enlaces y contenido desde un
          solo lugar.
        </p>
        <p>
          Con ella puedes centralizar tus redes sociales, medios de contacto,
          catálogos y otros recursos en una página sencilla y accesible
          mediante un único enlace. Así, puedes compartir toda tu información
          sin necesidad de enviar múltiples enlaces por separado.
        </p>
        <p>
          OneLink es un proyecto desarrollado con fines académicos y
          experimentales. Esta aplicación forma parte de un portafolio de
          proyectos y está disponible como demostración de sus funcionalidades.
        </p>
      </div>
      <p className="mt-2 text-[0.6875rem] tracking-wide text-muted-foreground/80 sm:text-xs">
        Proyecto demostrativo · No es un servicio comercial definitivo
      </p>
    </aside>
  );
}
