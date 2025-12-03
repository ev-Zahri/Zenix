'use client';

import { useState } from 'react';

export const SecurityCard = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [ipWhitelistEnabled, setIpWhitelistEnabled] = useState(false);

  return (
    <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
      <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-b border-slate-200 pb-4 dark:border-slate-800">
        Security
      </h2>
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        <div className="flex items-center justify-between py-6">
          <div>
            <h3 className="font-medium text-slate-800 dark:text-white">
              Two-Factor Authentication (2FA)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Google Authenticator</p>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              checked={twoFactorEnabled}
              onChange={(e) => setTwoFactorEnabled(e.target.checked)}
              className="peer sr-only"
              type="checkbox"
            />
            <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700"></div>
          </label>
        </div>
        <div className="flex items-center justify-between py-6">
          <div>
            <h3 className="font-medium text-slate-800 dark:text-white">Whitelisted IP Addresses</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Restrict account access to specific IP addresses.
            </p>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              checked={ipWhitelistEnabled}
              onChange={(e) => setIpWhitelistEnabled(e.target.checked)}
              className="peer sr-only"
              type="checkbox"
            />
            <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

