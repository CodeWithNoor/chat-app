
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <div className="flex-1 flex flex-col mx-auto w-full">
          {children}
        </div>
      </>
    );
  }
  