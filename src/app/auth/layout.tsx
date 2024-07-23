import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import React, { Children } from "react";

type Props = {
    children: React.ReactNode
}

const Layout = async ({ Children}: Props) => {
    const user = await currentUser()

    if (user) redirect('/')
    return <div className="h-screen w-full flex justify-center"> 

         <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
            
            Layout
        </div>
        </div>
}

export default Layout