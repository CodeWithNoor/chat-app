import stripe from "stripe";
import { DocumentData, DocumentReference, Timestamp } from "firebase/firestore";

export interface Subscription {
  id?: string;
  metadata?: {
    [key: string]: any;
  };
  stripeLink?: string | null;
  quantity?: number | null;
  items?: stripe.SubscriptionItem[];

  price?: DocumentReference<DocumentData>;
  product?: DocumentReference<DocumentData>;

  prices?: Array<DocumentReference<DocumentData>>;
  payment_method?: string | null;
  latest_invoice?: string | null;

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

  created?: Timestamp | null;
  current_period_start?: Timestamp | null;
  current_period_end?: Timestamp | null;

  ended_at?: Timestamp | null;
  canceled_at?: Timestamp | null;

  trial_start?: Timestamp | null;
  trial_end?: Timestamp | null;

  cancel_url?: string;
  client_reference_id?: string;
  promotion_code?: string;
  success_url?: string;
  trial_from_plan?: boolean;
  activeOnly?: boolean;
  currency?: string;

  // userId: string;
  // status: string;
  // priceId: string;
  // price: number;
  // description?: string;
  // automatic_tax?: boolean;
  // tax_id_collection?: boolean;
  // CREATE_SESSION_TIMEOUT_MILLIS: number;
  // timeoutMillis?: number;
  // includePrices?: boolean;
  // limit?: number;
  // amount?: number;
  // interval?: string;
  // interval_count?: number;
  // product?: string;
  // trial_period_days?: number;

 
}
