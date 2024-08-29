export const OurProducts = () => {
    return (
        <section id="our-products">
            <div className="our-product-wrapper w-full h-[70vh] relative">
                <div className="our-product-inner absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">
                    <h1 className="title text-[56px] font-bold text-[#33f433] cursor-default">
                        Our Products
                    </h1>
                    <div className="breadcrumb text-white">
                        Home / Products
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Products = () => {
    return (
        <section id="product-items" className="mt-7">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="sidebar w-1/3 pl-3">
                        <div className="sidebar-inner bg-white">
                            <div className="available-products flex items-center">
                                <h3 className="mr-2">
                                    only available products
                                </h3>
                                <div className="border-2 border-zinc-400 rounded-full block w-[55px] h-[30px]">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 product-wrapper flex flex-wrap pr-3">
                        <div className="w-1/2 px-2">
                            <div className="product-item">
                                
                            </div>
                        </div>
                        <div className="w-1/2 px-2">
                            <div className="product-item">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}