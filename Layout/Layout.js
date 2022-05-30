import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Layout(props) {
    return (
        <>
            <div className="wrapper bg-black-8 min-h-screen">
                <div className="flex">
                    <div className="flex-none grow-0 bg-white h-full">
                        <Sidebar />
                    </div>
                    <div className="  w-full pl-4  md:pl-64 pt-16 md:pt-8 pr-4 grow">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}
