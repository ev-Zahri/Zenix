'use client';

export const ProfileVerificationCard = () => {
  return (
    <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
          Profile Verification
        </h2>
        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/50 dark:text-green-400">
          Verified
        </span>
      </div>
      <div className="flex flex-col gap-3 pt-6">
        <div className="flex gap-6 justify-between">
          <p className="text-slate-800 dark:text-white text-base font-medium leading-normal">
            Verification Progress
          </p>
        </div>
        <div className="rounded-full bg-slate-200 dark:bg-slate-700">
          <div className="h-2 rounded-full bg-primary" style={{ width: '100%' }}></div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
          Your profile is fully verified.
        </p>
      </div>
    </div>
  );
};

