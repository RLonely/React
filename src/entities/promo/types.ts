export type PromoStatus = "live" | "draft" | "archived";

export interface Promo {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  dueDate: string;
  status: PromoStatus;
  likeCount: number;
}
