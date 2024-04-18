"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { Image as ImageType } from "types";
import { Tab } from "@headlessui/react";

interface GalleryProps {
    images: ImageType[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="aspect-square w-full">
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
                            <Image
                                fill
                                src={image.url}
                                alt="Image"
                                className="object-cover object-center"
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
};

interface GalleryTabProps {
    image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
    return (
        <>
            <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
                {({ selected }) => (
                    <div>
                        <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
                            <Image
                                fill
                                src={image.url}
                                alt=""
                                className="object-cover object-center"
                            />
                        </span>
                        <span
                            className={cn(
                                "absolute inset-0 rounded-md ring-2 ring-offset-2",
                                selected ? "ring-black" : "ring-transparent",
                            )}
                        />
                    </div>
                )}
            </Tab>
        </>
    );
};

export default GalleryTab;
