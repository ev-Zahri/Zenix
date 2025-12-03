'use client';

import { Sidebar } from '@/components/common/users/Sidebar';
import { ProfileVerificationCard } from '@/components/users/ProfileVerificationCard';
import { SecurityCard } from '@/components/users/SecurityCard';
import { ApiManagementCard } from '@/components/users/ApiManagementCard';

export default function SettingsPage() {
  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-between gap-3 mb-8">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                Settings and Security
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                Manage your profile, security settings, and API keys.
              </p>
            </div>
          </div>
          <ProfileVerificationCard />
          <SecurityCard />
          <ApiManagementCard />
        </div>
      </main>
    </div>
  );
}

