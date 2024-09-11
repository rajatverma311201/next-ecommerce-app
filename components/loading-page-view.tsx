import { Loader2Icon } from "lucide-react";

interface LoadingPageViewProps {}

export const LoadingPageView: React.FC<LoadingPageViewProps> = ({}) => {
    return (
        <div className="grid min-h-screen place-content-center">
            <Loader2Icon className="h-12 w-12 animate-spin" />
        </div>
    );
};
