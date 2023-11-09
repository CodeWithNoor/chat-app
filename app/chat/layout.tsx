
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full">
          {children}
        </div>
      </>
    );
  }
  