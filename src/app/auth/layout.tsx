import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import React, { Children } from "react";

type Props = {
    children: React.ReactNode
}

const Layout = async ({ Children}: Props) => {
    const user = await currentUser()

    if (user) redirect('/')
    return <div> Layout</div>
}

export default Layout