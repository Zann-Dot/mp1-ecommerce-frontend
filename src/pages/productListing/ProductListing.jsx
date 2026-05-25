import React from "react";
import Navbar from "../components/Header/Navbar";
import Sidebar from "./FiltereOption/SIdebar";



export default function () {
    return (
        <div>
            <Navbar />
            <Sidebar />


            {/* Content */}
            <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
                {/* your content goes here ... */}
            </div>
            {/* End Content */}

        </div>
    );
}
