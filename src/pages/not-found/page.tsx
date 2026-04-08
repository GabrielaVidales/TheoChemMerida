import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import PaperSection from "@/components/paper-section";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <>
            <PaperSection className="min-h-screen flex flex-col items-start justify-start">
                <Header />
                <div className="flex-1 -mt-20 flex flex-col justify-center items-center gap-6 mx-auto max-w-xs sm:max-w-sm">
                    <span className="text-8xl font-bold tracking-tighter text-foreground">
                        404
                    </span>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold text-foreground">
                            Page not found
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                        <Link to="/" className="mt-2 ml-auto w-fit">
                            <Button>
                                <ArrowLeft />
                                Back to home
                            </Button>
                        </Link>
                    </div>
                </div>
            </PaperSection>
        </>
    );
}