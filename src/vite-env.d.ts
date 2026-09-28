/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PERSONA?: "worker" | "contractor";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
