export type Persona = "worker" | "contractor";

export const PERSONA: Persona =
  import.meta.env.VITE_PERSONA === "contractor" ? "contractor" : "worker";

export const isContractor = PERSONA === "contractor";
