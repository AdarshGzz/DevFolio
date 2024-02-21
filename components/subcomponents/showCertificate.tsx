import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { TiTick } from "react-icons/ti";

interface ShowCertificateType {
    children: React.ReactNode;
    image?: any;
}

const ShowCertificate = ({ children ,image }: ShowCertificateType) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        <div className=" inline-flex items-center">
                            <TiTick className=" text-2xl" /> Certificate of Completion
                        </div> 
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <Image className="rounded-lg md:h-[300px] md:w-[800px]  h-[100%] w-[100%] border-2 border-solid-[#8C52FF]" src={image} alt="certificate" />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                    <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ShowCertificate;