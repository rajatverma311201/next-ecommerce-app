"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { MouseEventHandler } from "react";

import { Currency } from "@/components/currency";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import Link from "next/link";
import { Product } from "types";

interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
    const previewModal = usePreviewModal();
    const cart = useCart();

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    };

    return (
        <Link
            className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
            // onClick={handleClick}
            href={`/product/${data?.id}`}
        >
            {/* Image & actions */}
            <div className="relative aspect-square rounded-xl bg-gray-100">
                <Image
                    src={data.images?.[0]?.url}
                    alt=""
                    fill
                    className="aspect-square max-w-xs rounded-md object-cover"
                />
                <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
                    <div className="flex justify-center gap-x-6">
                        <Button onClick={onPreview} size="icon">
                            <Expand size={20} />
                        </Button>

                        <Button onClick={onAddToCart} size="icon">
                            <ShoppingCart size={20} />
                        </Button>
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="text-lg font-semibold">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>
            {/* Price & Reiew */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </Link>
    );
};

export default ProductCard;
