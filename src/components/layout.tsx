import { ReactNode } from "react"
import Sidebar from "./sidebar"

interface Props{
    children:ReactNode | ReactNode[]
}

export default function Base({children}: Props){
    return(

        <div className="layout">
            <Sidebar/>
            {children}
        </div>

    )
}