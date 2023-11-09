import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  collectionGroup,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";

export interface ChatMembers {
  userId: string;
  email: string;
  timeStamp: string;
  isAdmin: boolean;
  chatId: string;
  image: string;
}

const ChatMemberConverter: FirestoreDataConverter<ChatMembers> = {
  toFirestore(member: ChatMembers): DocumentData {
    return {
      userId: member.userId,
      email: member.email,
      timeStamp: member.timeStamp,
      isAdmin: member.isAdmin,
      chatId: member.chatId,
      image: member.image,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): ChatMembers {
    const data = snapshot.data(options);

    const sub: ChatMembers = {
      userId: snapshot.id,
      email: data.email,
      timeStamp: data.timeStamp,
      isAdmin: data.isAdmin,
      chatId: data.chatId,
      image: data.image,
    };

    return sub;
  },
};

export const addChatRef = (chatId: string, userId: string) =>
  doc(db, "chats", chatId, "members", userId).withConverter(
    ChatMemberConverter
  );

export const chatMembersRef = (chatId: string, userId: string) =>
  doc(db, "chats", chatId, "members", userId).withConverter(
    ChatMemberConverter
  );

export const chatMembersAdminRef = (chatId: string) =>
  query(
    collection(db, "chats", chatId, "members"),
    where("isAdmin", "==", true)
  ).withConverter(ChatMemberConverter);

export const chatMembersCollectionGroupRef = (userId: string) =>
  query(
    collectionGroup(db, "members"),
    where("userId", "==", userId)
  ).withConverter(ChatMemberConverter);
