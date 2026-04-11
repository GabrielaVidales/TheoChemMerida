import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { renderToString } from "react-dom/server"

interface CopyButtonProps {
    value: string
    htmlValue?: React.ReactNode
    className?: string
}

export function CopyButton({ value, htmlValue, className }: CopyButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false)

    React.useEffect(() => {
        if (hasCopied) {
            const timer = setTimeout(() => setHasCopied(false), 2000)
            return () => clearTimeout(timer)
        }
    }, [hasCopied])

    const copyToClipboard = React.useCallback(async () => {
        try {
            const htmlString = htmlValue ? renderToString(htmlValue) : value

            const blobText = new Blob([value], { type: "text/plain" });
            const blobHtml = new Blob([htmlString], { type: "text/html" });
            
            const data = [
                new ClipboardItem({
                    "text/html": blobHtml,
                    "text/plain": blobText,
                })
            ]
            
            await navigator.clipboard.write(data)
            setHasCopied(true)
        } catch (err) {
            console.error("Copy error", err)
        }
    }, [value])

    return (
        <Button
            size="icon"
            variant="outline"
            title={hasCopied ? "Copied!" : "Copy to clipboard"}
            className={cn("relative h-8 w-8", className)}
            onClick={copyToClipboard}
        >
            <span className="sr-only">Copy to clipboard</span>
            {hasCopied ? (
                <Check className="h-4 w-4 text-green-500" />
            ) : (
                <Copy className="h-4 w-4" />
            )}
        </Button>
    )
}