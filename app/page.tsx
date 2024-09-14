import { BillboardsCarousel } from "@/components/billboards-carousel";
import { Container } from "@/components/container";
import { ProductsList } from "@/components/products/products-list";

import { getBillboard, getBillboards, getProducts } from "@/lib/api";

const HomePage = async () => {
    const billboard = await getBillboard("6554aaa1fedccd842679bb8c");
    const billboards = await getBillboards();
    const products = await getProducts({ isFeatured: true });
    return (
        <Container>
            <div className="space-y-10 pb-10">
                {/* <Billboard data={billboard} /> */}

                <BillboardsCarousel billboards={billboards} />

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductsList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
