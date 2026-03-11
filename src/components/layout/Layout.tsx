import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
    noPaddingTop?: boolean;
}

export function Layout({ children, noPaddingTop = false }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className={`flex-1 ${noPaddingTop ? '' : 'pt-20 md:pt-24'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
