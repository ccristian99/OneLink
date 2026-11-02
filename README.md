# OneLink

OneLink es una plataforma para crear, personalizar y compartir perfiles de enlaces (estilo "link in bio"). Cada administrador puede gestionar varios perfiles, personalizar su diseño, agregar tarjetas con enlaces y publicarlos con una URL pública y un código QR.

## Stack

- Next.js 16 (App Router), React 19 y TypeScript
- Tailwind CSS 4 y shadcn/ui (Radix UI)
- Supabase (PostgreSQL y Storage)
- NextAuth v5 (Credentials) y JWT propio
- Jest + Testing Library + MSW (unitarias) y Playwright (E2E)

## Requisitos

- Node.js 20 o superior
- Un proyecto de Supabase con las tablas `administradores`, `perfiles`, `tarjetas` y `login_attempts`, y los buckets públicos `perfiles-logos` y `perfiles-qrs`

## Variables de entorno

Crea un archivo `.env.local` en la raíz:

```env
SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
JWT_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

`NEXT_PUBLIC_APP_URL` es la URL base con la que se generan los enlaces públicos y los códigos QR de los perfiles publicados.

## Scripts

```bash
npm install
npm run dev     # servidor de desarrollo en http://localhost:3000
npm run build   # build de producción
npm run start   # servidor de producción
npm run lint    # ESLint
```

## Despliegue

El proyecto está preparado para Vercel (`vercel.json`). Configura en Vercel las mismas variables de entorno, con `NEXT_PUBLIC_APP_URL` apuntando al dominio de producción.

## Licencia

MIT. Consulta el archivo `LICENSE`.
