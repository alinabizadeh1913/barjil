import React from "react";

const Footer = () => {
    return (
        <footer id="footer" className="w-full">
            <div className="container mx-auto">
                <div className="grid gap-2 grid-cols-3 grid-rows-2">
                    <div className="row-start-1 row-end-2 col-start-1 col-end-2">
                        <div className="bg-emerald-600 text-black p-6 text-center h-full">
                            1
                        </div>
                    </div>
                    <div className="row-start-2 row-end-3 col-start-1 col-end-2">
                        <div className="bg-emerald-600 text-black p-6 text-center h-full">
                            2
                        </div>
                    </div>
                    <div className="row-start-1 row-end-3 col-start-2 col-end-3">
                        <div className="bg-emerald-600 text-black p-6 text-center h-full">
                            3
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-emerald-600 text-black p-6 text-center h-full">
                            4
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;