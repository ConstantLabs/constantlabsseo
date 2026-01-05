export const PageLoader = () => {
    return (
        <div className="h-full w-full flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-tech text-foreground/60 animate-pulse">LOADING_DATA...</span>
            </div>
        </div>
    );
};
