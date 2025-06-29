import React from "react";
import InfiniteScroll from "../Who-we-are/InfiniteScroll";

export default function Scroll() {
    return (
        <div className="background-white w-full py-12 md:py-6 lg:py-6">
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase leading-none tracking-wide mb-6 sm:mb-8 md:mb-10 lg:mb-2 mt-6 md:mt-8 lg:mt-10 font-['Space_Mono',monospace]">
                <span className="text-black">OUR</span>{" "}
                <span className="text-[#A35CFF]">CLIENTS</span>
            </h2>
            <div className="py-4 md:py-6 lg:py-8">
                <InfiniteScroll />
            </div>
        </div>
    );
}