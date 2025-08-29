"use client";

import React from "react";
import { Flower } from 'lucide-react'

const SpinFlower = () => {
    return (
        <>
            <div suppressHydrationWarning className="theme-container">
                <div className="md:hidden flex justify-center mt-6 spinRight">
                    <Flower size={300} />
                </div>

                <div className="hidden md:block lg:hidden">
                    <div className="left-flower">
                        <Flower size={500} />
                    </div>
                    <div className="right-flower">
                        <Flower size={500} />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <div className="left-flower">
                        <Flower size={700} />
                    </div>
                    <div className="right-flower">
                        <Flower size={700} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpinFlower;