import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

export default function RegisterPage() {
    return (
        <>
            <MenuBar />
            <div className="min-h-screen bg-black p-2 md:p-4">
                <div
                    className="min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] rounded-[20px] md:rounded-[40px] p-4 md:p-8 relative overflow-hidden flex flex-col"
                    style={{ backgroundColor: "#001002" }}
                >
                    {/* Background Elements */}
                    <div
                        className="absolute inset-0 rounded-[40px] pointer-events-none animate-background-fade-in"
                        style={{
                            backgroundImage: "url(/background_art.png)",
                            backgroundSize: "100% auto",
                            backgroundPosition: "top",
                            backgroundRepeat: "no-repeat",
                            opacity: 0.7,
                        }}
                    />

                    <img
                        src="/bg_decor.svg"
                        alt="Background Decoration"
                        className="absolute top-4 right-2 w-150 h-auto pointer-events-none opacity-50"
                        draggable={false}
                    />

                    <div className="relative z-10 flex-grow flex flex-col justify-center pt-20">
                        <RegistrationForm />
                    </div>

                    <div className="relative z-10 mt-12">
                        <Footer />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-auto opacity-60 pointer-events-none -z-10">
                        <img
                            src="/bottom_glow.png"
                            alt="Bottom Glow"
                            className="w-full h-auto"
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
