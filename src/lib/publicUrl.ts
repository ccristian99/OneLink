import { generateSlug } from './slug';

// URL base del despliegue (ej. https://onelink.vercel.app). Definir NEXT_PUBLIC_APP_URL en cada entorno.
const BASE_PUBLIC_URL = (
  process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
).replace(/\/+$/, '');

export function generatePublicProfileLink() {
  const slug = generateSlug('p');
  const url = `${BASE_PUBLIC_URL}/${slug}`;
  return { slug, url };
}
