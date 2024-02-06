/// <reference types="astro/client" />
interface ImportMetaEnv {
  SECRET_BACKEND_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
