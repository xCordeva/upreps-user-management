import { format } from "date-fns";
import { enUS } from "date-fns/locale";

export function formatCreatedAt(dateStr: string) {
  const date = new Date(dateStr);
  return format(date, "MMM d, yyyy h:mmaaa", { locale: enUS });
}
