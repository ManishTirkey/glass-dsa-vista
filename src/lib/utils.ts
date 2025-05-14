
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "@/hooks/use-toast"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
    .then(() => {
      toast({
        title: "Code copied!",
        description: "Code has been copied to clipboard",
        duration: 2000,
      })
    })
    .catch(err => {
      console.error('Failed to copy text: ', err)
      toast({
        title: "Failed to copy",
        description: "Could not copy code to clipboard",
        variant: "destructive",
        duration: 2000,
      })
    })
}
