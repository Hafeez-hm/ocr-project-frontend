export default function Grid() {
    return (
        <svg className="absolute inset-0 w-full h-full text-foreground/20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    );
}
