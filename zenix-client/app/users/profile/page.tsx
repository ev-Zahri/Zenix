'use client';
import { ProfileVerificationCard } from '@/components/users/profile/ProfileVerificationCard';
import { SecurityCard } from '@/components/users/profile/SecurityCard';
import { ApiManagementCard } from '@/components/users/profile/ApiManagementCard';

export default function ProfilePage() {
  return (
    <main className="flex-1 overflow-y-auto my-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap justify-between gap-3 mb-8">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Profile
            </p>
          </div>
        </div>
        <ProfileVerificationCard />
        <SecurityCard />
        <ApiManagementCard />
      </div>
    </main>
  );
}

