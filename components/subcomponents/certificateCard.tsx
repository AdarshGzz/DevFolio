import { Button } from "../ui/button";
import { cn } from "@/lib/utils"
import { FileCode2, CheckIcon } from 'lucide-react';
import { FaLaptopCode } from "react-icons/fa";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
import  ShowCertificate  from "./showCertificate";


interface CardProps {
    className?: string;
    title: string;
    provider: string;
    duration: string;
    Vid:string;
    Vlink:string;
    image: any;
}

export function CerfCard({ className, title, provider, duration ,Vid ,Vlink,image }: CardProps) {
    return (
        <Card className={cn(" w-[95%] sm:w-[400px] md:w-[500px] text-white bg-[#8C52FF] border-2 border-[#4910b9]", className)}>
            <CardHeader>
                <CardTitle className="flex flex-row items-start sm:items-center text-xl gap-2"><FileCode2 />{title}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <ShowCertificate image={image} >
                      <Image className="rounded-lg md:h-[100px] md:w-[150px]  h-[50px] w-[100px] cursor-pointer"  src={image} alt="certificate"/>
                    </ShowCertificate>
                    <div className="flex-1 space-y-2">
                        <p className=" flex flex-row gap-2 items-start text-xl font-medium leading-none">
                            <FaLaptopCode/>{provider}
                        </p>
                        <p className="text-md text-white/80 font-medium leading-none">
                            Credential ID : {Vid}
                        </p>
                        <p className="text-md text-white/80 ">
                            Issued {duration}
                        </p>
                    </div>
                </div>

            </CardContent>
            <CardFooter>
                <Link href={Vlink}>
                <Button className="w-full">
                 <CheckIcon className="mr-2 h-4 w-4" /> Show Credentials
                </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
