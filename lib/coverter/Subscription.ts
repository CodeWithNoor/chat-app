import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { Subscription } from "@/types/Subscription";

const SubscriptionConverter: FirestoreDataConverter<Subscription> = {
  // data push in firestore
  toFirestore(subscription: Subscription): DocumentData {
    return { ...subscription };
  },
  // data pull in firestore
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Subscription {
    const data = snapshot.data(options);

    const sub: Subscription = {
      id: snapshot.id,
      metadata: data.metadata,
      stripeLink: data.stripeLink,
      quantity: data.quantity,
      items: data.items,
      price: data.price,
      product: data.product,
      prices: data.prices,
      payment_method: data.payment_method,
      latest_invoice: data.latest_invoice,
      mode: data.mode,
      status: data.status,
      cancel_at_period_end: data.cancel_at_period_end,
      created: data.created,
      current_period_start: data.current_period_start,
      current_period_end: data.current_period_end,
      ended_at: data.ended_at,
      canceled_at: data.canceled_at,
      trial_start: data.trial_start,
      trial_end: data.trial_end,

      cancel_url: data.cancel_url,
      client_reference_id: data.client_reference_id,
      promotion_code: data.promotion_code,
      success_url: data.success_url,
      trial_from_plan: data.trial_from_plan,
      activeOnly: data.activeOnly,
      currency: data.currency,
    };

    return sub;
  },
};

export default SubscriptionConverter;
