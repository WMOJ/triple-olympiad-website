import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { SECTION_VALUES } from "@/lib/olympiad";

export default async function RegisterPage({
    searchParams,
}: {
    searchParams: Promise<{ sections?: string | string[] }>;
}) {
    // Days picked on the home page's table arrive as ?sections=Math,Physics
    const raw = (await searchParams).sections;
    const initialSections = (Array.isArray(raw) ? raw.join(",") : raw ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter((s) => SECTION_VALUES.includes(s));

    return (
        <>
            <MenuBar />
            <main id="main">
                <RegistrationForm initialSections={initialSections} />
            </main>
            <Footer />
        </>
    );
}
