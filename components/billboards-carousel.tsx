"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Billboard } from "types";
import { Billboard as BillboardComp } from "./billboard";

interface BillboardsCarouselProps {
    billboards: Billboard[];
}

export const BillboardsCarousel: React.FC<BillboardsCarouselProps> = ({
    billboards,
}) => {
    return (
        <>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 1000,
                    }),
                ]}
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
        </>
    );
};
