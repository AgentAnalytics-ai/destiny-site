import { env } from "@/lib/utils/env";

const base = env.CHURCH_CENTER_URL.replace(/\/$/, "");

export const cc = {
  giving: () => `${base}/giving`,
  events: () => `${base}/calendar`,
  groups: () => `${base}/groups`,
  registrations: () => `${base}/registrations`,
  checkins: () => `${base}/check-ins`,
  form: (id: string | number) => `${base}/people/forms/${id}`,
};
