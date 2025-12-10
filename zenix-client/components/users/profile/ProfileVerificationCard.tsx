'use client';

import { CheckCircle, CircleX } from "lucide-react";

interface VerificationStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
}

export const ProfileVerificationCard = () => {
  // Mock data - bisa diganti dengan data dari API
  const steps: VerificationStep[] = [
    {
      id: 1,
      title: 'Buat Akun',
      description: 'Registrasi dan verifikasi email',
      completed: true,
      current: false,
    },
    {
      id: 2,
      title: 'Upload Dokumen',
      description: 'Upload KTP dan dokumen pendukung',
      completed: true,
      current: false,
    },
    {
      id: 3,
      title: 'Verifikasi Gagal',
      description: 'Dokumen gagal terverifikasi',
      completed: false,
      current: false,
    },
  ];

  const allCompleted = steps.every((step) => step.completed);
  const currentStepIndex = steps.findIndex((step) => step.current || !step.completed);

  return (
    <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="flex items-center justify-between mt-3">
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
          Profile Verification
        </h2>
        {allCompleted ? (
          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-accent-green dark:bg-green-900/50 dark:text-green-400">
            Verified
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-accent-red dark:bg-red-900/50 dark:text-red-400">
            Not Verified
          </span>
        )}
      </div>
      
      <div className="pt-6">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{
                width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step) => {
              const isCompleted = step.completed;
              const isCurrent = step.current && !isCompleted;

              return (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  {/* Step Circle */}
                  <div className="relative z-10">
                    <div
                      className={`
                        flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300
                        ${
                          isCompleted
                            ? 'bg-primary border-primary text-white'
                            : isCurrent
                              ? 'bg-primary/10 border-primary text-primary'
                              : 'bg-primary dark:bg-accent-red-800 border-accent-red-300 dark:border-accent-red-600 '
                        }
                      `}
                    >
                      {isCompleted ? (
                        <CheckCircle className="size-6 text-white" />
                      ) : (
                        <CircleX className="size-6 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center max-w-[140px]">
                    <h3
                      className={`
                        text-sm font-semibold mb-1
                        ${
                          isCompleted || isCurrent
                            ? 'text-slate-900 dark:text-white'
                            : 'text-slate-500 dark:text-slate-400'
                        }
                      `}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

