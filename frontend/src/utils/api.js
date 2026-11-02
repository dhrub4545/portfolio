/**
 * API utility for flexible environment routing (Local, Monorepo, or Separate Vercel Deployments)
 */

export const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export function getApiUrl(endpoint) {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  if (!API_BASE_URL) {
    return cleanEndpoint;
  }
  const cleanBase = API_BASE_URL.replace(/\/$/, '');
  return `${cleanBase}${cleanEndpoint}`;
}
