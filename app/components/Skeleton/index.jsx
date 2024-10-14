import React from "react";

export const SkeletonCard = () => {
    return (
        <div id="skeleton-card" className={`rounded-lg flex flex-col w-full`}>
            <div className="items skeleton-square bg-[#d2d2d2] w-full h-[230px] mb-1 rounded-lg"></div>
            <div className="items skeleton-line bg-[#d2d2d2] w-full h-[15px] my-1 rounded-full"></div>
            <div className="items skeleton-line bg-[#d2d2d2] w-full h-[15px] my-1 rounded-full"></div>
            <div className="items skeleton-line bg-[#d2d2d2] w-3/4 h-[15px] my-1 rounded-full"></div>
        </div>
    )
}

export const SkeletonRectangle = (props) => {
    return (
        <div id="skeleton-rectangle" className={`rounded-full w-[170px] ${props.height ? `h-[${props.height}px]` : 'h-[15px]'} bg-[#d2d2d2] ${props.className}`}></div>
    )
}