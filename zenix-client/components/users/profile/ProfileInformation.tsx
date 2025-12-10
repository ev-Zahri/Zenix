'use client';

import Image from 'next/image';
import { Pencil } from 'lucide-react';
import { useState } from 'react';

export const ProfileInformation = () => {
    const [changeImage, setChangeImage] = useState(false);

    const handleChangeImage = () => {
        setChangeImage(!changeImage);
    };

    return (
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-slate-200 pb-4 dark:border-slate-800">
                Profile Brief Information
            </h2>
            <div className="w-full py-4">
                <div className="flex items-center justify-between w-full">
                    <div className="relative">
                        <Image src='/icons/logo-light.png' alt="Profile" width={100} height={100} className="rounded-lg size-20 border border-white" />
                        <button
                            onClick={handleChangeImage}
                            className="absolute bottom-0 right-0 bg-white dark:bg-slate-800 rounded-full p-1 shadow hover:text-slate-900 dark:hover:text-white hover:border-2 hover:border-white cursor-pointer"
                            style={{ transform: "translate(30%, 30%)" }}
                        >
                            <Pencil className="size-4" />
                        </button>
                    </div>
                    <div className="flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-900 dark:text-white text-sm font-normal leading-normal">Username</span>
                            <span className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">John Doe</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-slate-900 dark:text-white text-sm font-normal leading-normal">Email</span>
                            <span className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">john.doe@example.com</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-slate-900 dark:text-white text-sm font-normal leading-normal">Phone Number</span>
                            <span className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">+62 812 3456 7890</span>
                        </div>
                    </div>
                    <div className="flex-col">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-900 dark:text-white text-sm font-normal leading-normal">Date Account Created</span>
                            <span className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">15 Januari 2025</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-slate-900 dark:text-white text-sm font-normal leading-normal">Id Account</span>
                            <span className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">1234567890</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-slate-900 dark:text-white text-sm font-normal leading-normal">Leverage Account</span>
                            <span className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">1:1000</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}