import ChatList from "@/components/ChatList";

type Props = {
  params: {};
  searchParams: {
    error: string;
  };
};
export default function Chat({ searchParams: { error } }: Props) {
  return (
    <>
      <ChatList />
    </>
  );
}
