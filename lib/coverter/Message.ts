import { db } from "@/firebase";
// import LanguageSupported from "@/redux/slice"; ---> dummy code because this is not using
import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  doc,
  query,
  limit,
  orderBy,
} from "firebase/firestore";

export interface User {
  id: string;
  name: string;
  email: string;
  image: string | null;
}

export interface Message {
  id?: string;
  input: string;
  email: string;
  timeStamp: Date;
  user: User;
  //   here's the code for language supported but not using it
  // translated?:{
  //   K in LanguageSupported?: string;
  // }
}

const MessageConverter: FirestoreDataConverter<Message> = {
  // data push in firestore
  toFirestore(message: Message): DocumentData {
    return {
      input: message.input,
      timeStamp: message.timeStamp,
      user: message.user,
      // others field
    };
  },
  // data pull in firestore
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Message {
    const data = snapshot.data(options);

    const sub: Message = {
      id: snapshot.id,
      input: data.input,
      email: data.email,
      timeStamp: data.timeStamp?.toDate(),
      user: data.user,
    };

    return sub;
  },
};

export const messagesRef = (chatId: string) =>
  collection(db, "chats", chatId, "messages").withConverter(MessageConverter);

export const limitedMessageRef = (chatId: string) =>
  query(messagesRef(chatId), limit(25));

export const SortedMessageRef = (chatId: string) =>
  query(messagesRef(chatId), orderBy("timeStamp", "asc"));

export const LimitedSortedMessageRef = (chatId: string) =>
  query(query(messagesRef(chatId), limit(1) ,orderBy("timeStamp", "desc")))
