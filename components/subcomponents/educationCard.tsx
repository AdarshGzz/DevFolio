import { Button } from "@/components/ui/button"
import { BellIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"



import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface CardProps{
    className?:string;
    title:string;
    provider: string;
    duration: string;
}

export function EduCard({ className,title,provider,duration }: CardProps) {
    return (
        <Card className={cn("w-[300px]", className)}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <BellIcon />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {provider}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {duration}
                        </p>
                    </div>
                </div>

            </CardContent>
            {/* <CardFooter>
        <Button className="w-full">
          <CheckIcon className="mr-2 h-4 w-4" /> know more
        </Button>
      </CardFooter> */}
        </Card>
    )
}
