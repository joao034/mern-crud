

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { useState } from "react"

export const Modal = ({ children, buttonTitle = '', title = '', description = '', onSave}) => {

    const [ isOpen, setIsOpen ] = useState( false )

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button onClick={ () => setIsOpen( true ) }>{ buttonTitle }</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                { children }
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={ onSave }>Save</Button>
                    </DialogClose>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}
