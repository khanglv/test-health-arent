import { WithChildren } from "@/app/types/common";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export const Layout = ({ children }: WithChildren) => {
  return (
    <div className="flex h-full min-h-screen bg-white">
      <main className="flex-1">
        <Header />
        <div className="flex space-y-6 flex-col overflow-x-auto pb-8">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
};
