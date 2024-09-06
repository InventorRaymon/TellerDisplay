import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const CustomSkeletonLoad: React.FC = () => {
    return (
        <Card className="w-[100vw] space-y-5 p-4" radius="lg">
            <div className="flex gap-3">
                <Skeleton className="rounded-xl w-[10%]">
                    <div className="h-[10vh] rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="rounded-xl w-[90%]">
                    <div className="h-[10vh] rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
            <div className="flex gap-3 w-[100vw]">
                <div className="flex flex-col w-[60.5vw] gap-4">
                    <Skeleton className="rounded-xl">
                        <div className="h-[26vh] rounded-xl bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="rounded-xl">
                        <div className="h-[56vh] rounded-xl bg-default-300"></div>
                    </Skeleton>
                </div>
                <div className="flex flex-col w-[29.5vw] gap-4">
                    <div className="flex gap-4">
                        <Skeleton className="rounded-xl w-[50%]">
                            <div className="h-[19.5vh] rounded-xl bg-default-300"></div>
                        </Skeleton>
                        <Skeleton className="rounded-lg w-[50%]">
                            <div className="h-[19.5vh] rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                    <div className="flex gap-4">
                        <Skeleton className="rounded-xl w-[50%]">
                            <div className="h-[19.5vh] rounded-xl bg-default-300"></div>
                        </Skeleton>
                        <Skeleton className="rounded-lg w-[50%]">
                            <div className="h-[19.5vh] rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                    <div className="flex gap-4">    
                        <Skeleton className="rounded-xl w-[50%]">
                            <div className="h-[19.5vh] rounded-xl bg-default-300"></div>
                        </Skeleton>
                        <Skeleton className="rounded-lg w-[50%]">
                            <div className="h-[19.5vh] rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                    <div className="flex gap-4">
                        <Skeleton className="rounded-xl w-[50%]">
                            <div className="h-[19.5vh] rounded-xl bg-default-300"></div>
                        </Skeleton>
                        <Skeleton className="rounded-lg w-[50%]">
                            <div className="h-[19.5vh] rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </div>
                <div className="flex flex-col w-[7vw]">
                    <Skeleton className="rounded-lg">
                        <div className="h-[84vh] rounded-lg bg-default-300"></div>
                    </Skeleton>
                </div>
            </div>
        </Card>
    )
}

export default CustomSkeletonLoad