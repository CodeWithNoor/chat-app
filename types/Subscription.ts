import stripe from "stripe";
import { DocumentData, DocumentReference, Timestamp } from "firebase/firestore";

export interface Subscription {
  id?: string;
  metadata?: {
    [key: string]: any;
  };
  stripeLink?: string | null;
  quantity?: number;
  items?: stripe.SubscriptionItem[];

  price?: DocumentReference<DocumentData>;
  product?: DocumentReference<DocumentData>;

  prices?: Array<DocumentReference<DocumentData>>;
  payment_method?: string;
  latest_invoice?: string;

  mode?: "subscription" | "payment"; // It's a subscription if it has a price, otherwise it's a payment written by own code

  status?:
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "trialing"
    | "unpaid";

  cancel_at_period_end?: boolean;

  // userId: string;
  // status: string;
  // priceId: string;
  // price: number;
  description?: string;
  automatic_tax?: boolean;
  cancel_url?: string;
  client_reference_id?: string;
  promotion_code?: string;
  success_url?: string;
  tax_id_collection?: boolean;
  trial_from_plan?: boolean;
  CREATE_SESSION_TIMEOUT_MILLIS: number;
  timeoutMillis?: number;
  includePrices?: boolean;
  activeOnly?: boolean;
  limit?: number;
  amount?: number;
  currency?: string;
  interval?: string;
  interval_count?: number;
  // product?: string;
  trial_period_days?: number;
}
