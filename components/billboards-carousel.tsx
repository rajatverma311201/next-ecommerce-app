"use client";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Billboard } from "types";
import { Billboard as BillboardComp } from "./billboard";

interface BillboardsCarouselProps {
    billboards: Billboard[];
}

export const BillboardsCarousel: React.FC<BillboardsCarouselProps> = ({
    billboards,
}) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 1500,
                    }),
                    Fade(),
                ]}
                setApi={setApi}
                opts={{ loop: true }}
            >
                <CarouselContent>
                    {billboards.map((billboard) => (
                        <CarouselItem key={billboard.id}>
                            <BillboardComp data={billboard} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="flex items-center justify-center gap-5 transition-all duration-200">
                {billboards.map((item, idx) => {
                    return (
                        <>
                            <Image
                                key={item.id}
                                src={item.imageUrl}
                                height={200}
                                width={200}
                                className={cn(
                                    "h-20 w-32 cursor-pointer rounded-lg border-2 border-transparent object-cover opacity-75 duration-200",
                                    current === idx + 1 &&
                                        "scale-110 border-primary/50 opacity-100",
                                )}
                                alt="label"
                                onClick={() => api?.scrollTo(idx)}
                            />
                        </>
                    );
                })}
            </div>
        </>
    );
};
