import React from "react";
import { LogoIcon, RightIcon } from "../Icons";
import Link from "next/link";

const Footer = () => {
    return (
        <footer id="footer" className="w-full mt-20 bg-[#333333] pt-20 px-10 relative">
            
            <div className="footer-back absolute top-0 left-0 right-0 z-[0]">
                <svg width="1440" height="301" viewBox="0 0 1440 301" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path opacity="0.15" d="M30.1191 -3.30469V296H-42.0347V-3.30469H30.1191ZM146.47 121.269V176.771H9.5625V121.269H146.47ZM158.187 -3.30469V52.4038H9.5625V-3.30469H158.187ZM441.458 140.386V152.515C441.458 175.401 438.237 195.958 431.796 214.185C425.492 232.274 416.515 247.76 404.867 260.643C393.218 273.388 379.445 283.186 363.548 290.039C347.651 296.754 330.109 300.111 310.923 300.111C291.6 300.111 273.921 296.754 257.887 290.039C241.99 283.186 228.148 273.388 216.362 260.643C204.714 247.76 195.669 232.274 189.228 214.185C182.924 195.958 179.771 175.401 179.771 152.515V140.386C179.771 117.5 182.924 96.9432 189.228 78.7163C195.669 60.4894 204.645 45.0034 216.157 32.2583C227.806 19.3761 241.578 9.57747 257.476 2.8623C273.51 -3.98991 291.188 -7.41602 310.512 -7.41602C329.698 -7.41602 347.24 -3.98991 363.137 2.8623C379.171 9.57747 393.012 19.3761 404.661 32.2583C416.31 45.0034 425.355 60.4894 431.796 78.7163C438.237 96.9432 441.458 117.5 441.458 140.386ZM368.276 152.515V139.975C368.276 125.174 366.974 112.155 364.37 100.917C361.903 89.5428 358.203 80.0182 353.27 72.3438C348.336 64.6693 342.237 58.9134 334.974 55.0762C327.848 51.1019 319.694 49.1147 310.512 49.1147C300.919 49.1147 292.559 51.1019 285.433 55.0762C278.306 58.9134 272.345 64.6693 267.548 72.3438C262.752 80.0182 259.12 89.5428 256.653 100.917C254.324 112.155 253.159 125.174 253.159 139.975V152.515C253.159 167.178 254.324 180.198 256.653 191.572C259.12 202.81 262.752 212.334 267.548 220.146C272.482 227.958 278.512 233.85 285.638 237.825C292.902 241.799 301.33 243.786 310.923 243.786C320.105 243.786 328.259 241.799 335.385 237.825C342.512 233.85 348.473 227.958 353.27 220.146C358.203 212.334 361.903 202.81 364.37 191.572C366.974 180.198 368.276 167.178 368.276 152.515ZM732.128 140.386V152.515C732.128 175.401 728.908 195.958 722.467 214.185C716.163 232.274 707.186 247.76 695.538 260.643C683.889 273.388 670.116 283.186 654.219 290.039C638.322 296.754 620.78 300.111 601.594 300.111C582.271 300.111 564.592 296.754 548.558 290.039C532.66 283.186 518.819 273.388 507.033 260.643C495.384 247.76 486.34 232.274 479.898 214.185C473.594 195.958 470.442 175.401 470.442 152.515V140.386C470.442 117.5 473.594 96.9432 479.898 78.7163C486.34 60.4894 495.316 45.0034 506.828 32.2583C518.476 19.3761 532.249 9.57747 548.146 2.8623C564.181 -3.98991 581.859 -7.41602 601.183 -7.41602C620.369 -7.41602 637.91 -3.98991 653.808 2.8623C669.842 9.57747 683.683 19.3761 695.332 32.2583C706.981 45.0034 716.026 60.4894 722.467 78.7163C728.908 96.9432 732.128 117.5 732.128 140.386ZM658.947 152.515V139.975C658.947 125.174 657.645 112.155 655.041 100.917C652.574 89.5428 648.874 80.0182 643.94 72.3438C639.007 64.6693 632.908 58.9134 625.645 55.0762C618.519 51.1019 610.365 49.1147 601.183 49.1147C591.59 49.1147 583.23 51.1019 576.104 55.0762C568.977 58.9134 563.016 64.6693 558.219 72.3438C553.423 80.0182 549.791 89.5428 547.324 100.917C544.994 112.155 543.83 125.174 543.83 139.975V152.515C543.83 167.178 544.994 180.198 547.324 191.572C549.791 202.81 553.423 212.334 558.219 220.146C563.153 227.958 569.183 233.85 576.309 237.825C583.572 241.799 592.001 243.786 601.594 243.786C610.776 243.786 618.93 241.799 626.056 237.825C633.182 233.85 639.144 227.958 643.94 220.146C648.874 212.334 652.574 202.81 655.041 191.572C657.645 180.198 658.947 167.178 658.947 152.515ZM896.787 -3.30469V296H824.633V-3.30469H896.787ZM986.825 -3.30469V52.4038H736.651V-3.30469H986.825ZM1223.43 240.497V296H1063.91V240.497H1223.43ZM1089.61 -3.30469V296H1017.45V-3.30469H1089.61ZM1202.88 115.513V169.166H1063.91V115.513H1202.88ZM1224.05 -3.30469V52.4038H1063.91V-3.30469H1224.05ZM1253.03 -3.30469H1370.82C1393.85 -3.30469 1413.86 0.121419 1430.85 6.97363C1447.84 13.8258 1460.93 23.9671 1470.11 37.3975C1479.43 50.8278 1484.09 67.4102 1484.09 87.1445C1484.09 104.275 1481.42 118.596 1476.07 130.108C1470.73 141.62 1463.26 151.144 1453.67 158.682C1444.21 166.082 1433.18 172.181 1420.57 176.977L1396.93 190.339H1298.05L1297.64 134.63H1370.82C1380.01 134.63 1387.61 132.986 1393.64 129.697C1399.67 126.408 1404.19 121.748 1407.21 115.718C1410.36 109.551 1411.94 102.219 1411.94 93.7227C1411.94 85.0889 1410.36 77.6885 1407.21 71.5215C1404.06 65.3545 1399.4 60.6265 1393.23 57.3374C1387.2 54.0483 1379.73 52.4038 1370.82 52.4038H1325.19V296H1253.03V-3.30469ZM1416.87 296L1350.68 163.615L1427.15 163.204L1494.16 292.917V296H1416.87Z" fill="white" fill-opacity="0.45"/>
                </svg>
            </div>

            <div className="container mx-auto flex flex-col relative z-10">
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
                    <div className="footer-item-wrapper md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2">
                        <div className="footer-item h-full">
                            <div className="footer-inner py-8 px-10 h-full">
                                <div className="description flex items-center justify-center h-full">
                                    <div className="logo mr-4">
                                        <LogoIcon fill="#fff" width="50"/>
                                    </div>
                                    <div className="text text-sm">
                                        Here we can have a short description about the company and it’s prespective.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-item-wrapper md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2">
                        <div className="footer-item h-full">
                            <div className="footer-inner py-5 px-8 h-full">
                                <div className="join-us flex flex-col items-center justify-center h-full">
                                    <h2 className="title text-lg text-white mb-3">
                                        Join our customers team!
                                    </h2>
                                    <form action="" className="w-full">
                                        <div className="input-g flex flex-wrap">
                                            <div className="w-[80%]">
                                                <input type="email" name="email" id="" placeholder="exapmle@gmail.com" className="w-full h-full px-3 rounded-md bg-[#d2ffc14a] bg-opacity-25 outline-0 text-white"/>
                                            </div>
                                            <div className="w-[20%] flex justify-center">
                                                <button type="submit" className="flex items-center justify-center p-1 border-2 border-white rounded-md">
                                                    <RightIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-item-wrapper md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3">
                        <div className="footer-item h-full">
                            <div className="footer-inner py-5 px-8 text-center h-full">
                                <div className="quick-acces flex flex-col justify-center h-full">
                                    <h2 className="title text-2xl text-white font-bold pb-4 border-b border-white border-opacity-45 cursor-default">
                                        Quick acces
                                    </h2>
                                    <div className="links mt-4 flex flex-col items-center">
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                            Home
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                            Products
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                            Gallery
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 duration-300 hover:text-opacity-100 ">
                                            Articles
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-item-wrapper md:row-start-1 md:row-end-3 md:col-start-3 md:col-end-4">
                        <div className="footer-item h-full">
                            <div className="footer-inner p-6 text-center h-full">
                                <div className="useful-links flex flex-col justify-center h-full">
                                    <h2 className="title text-2xl text-white font-bold pb-4 border-b border-white border-opacity-45 cursor-default">
                                        Useful links
                                    </h2>
                                    <div className="links mt-4 flex flex-col items-center">
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                            About us
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                        Contact us
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                            Help
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 duration-300 hover:text-opacity-100 ">
                                            Instagram
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="flex justify-center mt-6">
                    <div className="developing bg-[#666666] text-[#252525] rounded-tl-[4px] rounded-tr-[4px] py-2 px-6 cursor-default duration-300 hover:text-white">
                        <Link href="https://www.rubysa.ir/">
                            Design & Developing by Rubysa
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;