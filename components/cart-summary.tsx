"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Currency } from "@/components/currency";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import Fetch from "@/lib/Fetch";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

export const CartSummary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Payment completed.");
            removeAll();
        }

        if (searchParams.get("cancelled")) {
            toast.error("Order payment cancelled");
        }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    const onCheckout = async () => {
        if (items.length === 0) {
            return;
        }

        setLoading(true);

        try {
            const response = await Fetch.POST(`checkout`, {
                productIds: items.map((item) => item.id),
            });

            window.location = response.url;
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong.");
        }
    };

    return (
        <div
            className="
        mt-16
        rounded-lg
        bg-gray-50
        px-4
        py-6
        sm:p-6
        lg:col-span-5
        lg:mt-0
        lg:p-8
      "
        >
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order total
                    </div>
                    <Currency value={totalPrice} />
                </div>
                <Button
                    disabled={items.length === 0 || loading}
                    onClick={onCheckout}
                    className="mt-6 w-full disabled:cursor-not-allowed"
                >
                    {loading && (
                        <Loader2Icon className="mr-1 h-4 w-4 animate-spin" />
                    )}
                    Checkout
                </Button>
            </div>
        </div>
    );
};
