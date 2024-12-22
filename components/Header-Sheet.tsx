import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Nav from "./Nav"

export default function HeaderSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-white/70 text-primary px-6 py-2 rounded-full hover:bg-white/80 transition-colors border-none">Open</Button>
      </SheetTrigger>
      <SheetContent className="backdrop-blur-sm bg-white/30 border-none">
        <Nav vertical={true} />
      </SheetContent>
    </Sheet>
  )
}
