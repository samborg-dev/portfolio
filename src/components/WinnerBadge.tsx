"use client";

import { cn } from "@/lib/utils";
import { Trophy } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type WinnerBadgeProps = {
    label?: string;
    corner?: "top-right" | "top-left";
    className?: string;
};

export function WinnerBadge({
    label = "Winner",
    corner = "top-right",
    className,
}: WinnerBadgeProps) {
    return (
        <div
            className={cn(
                "absolute z-20",
                corner === "top-right" ? "top-0 right-0" : "top-0 left-0",
                corner === "top-right"
                    ? "translate-x-1/2 -translate-y-1/2"
                    : "-translate-x-1/2 -translate-y-1/2",
                className,
            )}
        >
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        type="button"
                        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-primary shadow-lg transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label={label}
                    >
                        <Trophy className="h-7 w-7 text-primary-foreground" />
                    </button>
                </TooltipTrigger>
                <TooltipContent side={corner === "top-right" ? "left" : "right"}>
                    <span className="text-base" style={{ fontFamily: "Cute Sunrise" }}>
                        {label}
                    </span>
                </TooltipContent>
            </Tooltip>
        </div>
    );
}
