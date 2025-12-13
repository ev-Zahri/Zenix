'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ApiKey {
  id: string;
  label: string;
  key: string;
  permissions: {
    read: boolean;
    trade: boolean;
    withdraw: boolean;
  };
  created: string;
}

export const ApiManagementCard = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: '1',
      label: 'Primary Trading Bot',
      key: 'sk_...a1b2',
      permissions: {
        read: true,
        trade: true,
        withdraw: false,
      },
      created: 'Jan 15, 2024',
    },
    {
      id: '2',
      label: 'Portfolio Tracker',
      key: 'pk_...c3d4',
      permissions: {
        read: true,
        trade: false,
        withdraw: false,
      },
      created: 'Dec 01, 2023',
    },
  ]);

  const handleDelete = (id: string) => {
    setApiKeys(apiKeys.filter((key) => key.id !== id));
  };

  const handleGenerateNew = () => {
    // TODO: Implement API key generation
    console.log('Generate new API key');
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800">
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
          API Management
        </h2>
        <Button onClick={handleGenerateNew} variant="outline" className="bg-primary hover:bg-primary/90 cursor-pointer mt-2 dark:bg-primary-500 dark:hover:bg-primary-500/90">
          <span className="material-symbols-outlined text-base">add</span>
          Generate New API Key
        </Button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-mx-6 -my-2 overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
              <thead>
                <tr>
                  <th
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-white sm:pl-0"
                    scope="col"
                  >
                    Label
                  </th>
                  <th
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                    scope="col"
                  >
                    API Key
                  </th>
                  <th
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                    scope="col"
                  >
                    Permissions
                  </th>
                  <th
                    className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                    scope="col"
                  >
                    Created
                  </th>
                  <th className="relative py-3.5 pl-3 pr-4 sm:pr-0" scope="col">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {apiKeys.map((apiKey) => (
                  <tr key={apiKey.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-0">
                      {apiKey.label}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400 font-mono">
                      {apiKey.key}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <input
                            checked={apiKey.permissions.read}
                            className="h-4 w-4 rounded border-slate-300 bg-slate-100 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700"
                            disabled
                            type="checkbox"
                          />
                          <span className="text-xs">Read</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <input
                            checked={apiKey.permissions.trade}
                            className="h-4 w-4 rounded border-slate-300 bg-slate-100 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700"
                            disabled
                            type="checkbox"
                          />
                          <span className="text-xs">Trade</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <input
                            checked={apiKey.permissions.withdraw}
                            className="h-4 w-4 rounded border-slate-300 bg-slate-100 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700"
                            disabled
                            type="checkbox"
                          />
                          <span className="text-xs">Withdraw</span>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                      {apiKey.created}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <Button
                        onClick={() => handleDelete(apiKey.id)}
                        variant="outline" className="bg-primary hover:bg-primary/90 cursor-pointer mt-2 dark:bg-primary-500 dark:hover:bg-primary-500/90"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

