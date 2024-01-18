import { cn } from "@/lib/utils"
import { School, GraduationCap } from 'lucide-react';

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
        <Card className={cn("w-[95%] sm:w-[400px] md:w-[500px] text-white bg-[#8C52FF] border-2 border-[#4910b9]", className)}>
            <CardHeader>
                <CardTitle className="flex flex-row items-center text-xl gap-2"><GraduationCap/>{title}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-start space-x-4 rounded-md border p-4">
                    <School />
                    <div className="flex-1 space-y-1">
                        <p className="text-lg font-medium leading-none">
                            {provider}
                        </p>
                        <p className="text-md text-white/80 ">
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
