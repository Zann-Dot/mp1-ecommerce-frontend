import React from "react";
import OrderCard from "./OrderCard";

export default function OrdersHistory() {
    return (
        <main className="w-full">
            <h1 className="text-lg font-semibold text-foreground ps-2">
                Order History
            </h1>
            <div className="flex mt-3 gap-1">
                <button
                    type="button"
                    className="px-2 py-1 cursor-pointer underline underline-offset-16 decoration-2 decoration-primary inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-primary hover:bg-primary-100 hover:text-primary focus:outline-hidden focus:bg-primary-100 focus:text-primary-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-primary-500/20 dark:focus:bg-primary-500/20 dark:focus:text-primary"
                >
                    Orders
                </button>
                <button
                    type="button"
                    className="px-2 py-1 cursor-pointer inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-muted-foreground-1 hover:bg-primary-100 hover:text-primary focus:outline-hidden focus:bg-primary-100 focus:text-primary-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-primary-500/20 dark:focus:bg-primary-500/20 dark:focus:text-primary"
                >
                    Open orders
                </button>
                <button
                    type="button"
                    className="px-2 py-1 cursor-pointer inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-muted-foreground-1 hover:bg-primary-100 hover:text-primary focus:outline-hidden focus:bg-primary-100 focus:text-primary-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-primary-500/20 dark:focus:bg-primary-500/20 dark:focus:text-primary"
                >
                    Cancelled orders
                </button>
            </div>
            <hr className="mt-2 ms-2" />

            {/* order history */}
            <div className="flex flex-col mt-6 gap-10">
                <OrderCard />
                <OrderCard />
            </div>
        </main>
    );
}
