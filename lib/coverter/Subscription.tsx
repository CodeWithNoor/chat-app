import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
} from "firebase/firestore";
import { Subscription } from "../../types/Subscription";

const SubscriptionConverter: FirestoreDataConverter<Subscription> = {
  toFirestore(subscription: Subscription): DocumentData {
    return { ...subscription };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Subscription {
    const data = snapshot.data(options);

    const sub: Subscription = {
      id: snapshot.id,
    };
  },
};

export default SubscriptionConverter;
