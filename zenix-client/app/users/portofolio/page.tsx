'use client';

import { OpenPositionCard } from '@/components/users/portofolio/OpenPositionCard';

export default function ProfilePage() {
  return (
    <div className="py-4 md:py-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-between gap-3 mb-6">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Portofolio
            </p>
          </div>
        </div>
        <OpenPositionCard></OpenPositionCard>
      </div>
    </div>
  );
}
