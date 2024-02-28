import React from 'react'

const Skeleton = () => {
  return (
    <div className="border lg:h-[26rem] lg:w-[50rem] lg:mx-auto mx-[2rem] bg-slate-800 p-[1rem] md:p-[2rem] lg:p-[3rem] mt-[2rem] rounded-xl">
    <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-[2rem] py-1">
        <div className="h-2 bg-slate-700 rounded"></div>
        <div className="space-y-[2rem]">
            <div className="grid grid-cols-3 gap-x-[1rem] gap-y-[2rem]">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
                <div className="grid grid-cols-3 gap-x-[1rem] gap-y-[2rem]">
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Skeleton