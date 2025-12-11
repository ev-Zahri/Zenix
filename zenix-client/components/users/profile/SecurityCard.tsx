'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const SecurityCard = () => {
  const [pinToggle, setPinToggle] = useState(false);
  const [pin, setPin] = useState('');
  const [errorPin, setErrorPin] = useState('');
  const [savedPin, setSavedPin] = useState('');
  const [showPin, setShowPin] = useState(false);

  const [confirmPin, setConfirmPin] = useState('');
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  
  const [devConToggle, setDevConToggle] = useState(false);
  const [devConCount, setDevConCount] = useState(5);

  const handleSavePin = () => {
    if (pin.trim()) {
      if (pin !== confirmPin) {
        setErrorPin('PIN tidak sesuai');
        return;
      } else {
        setErrorPin('');
      }
      setSavedPin(pin);
    }
  };

  return (
    <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
      <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-slate-200 pb-4 dark:border-slate-800">
        Security
      </h2>
      <div className="flex gap-6 divide-slate-200 dark:divide-slate-800">
        {/* Tambahkan PIN sebagai verifikasi setiap kali akses platform */}
        <div className=" py-6 w-full">
          <div className="flex items-center justify-between w-full">
            <div>
              <h3 className="font-medium text-slate-800 dark:text-white">
                Tambah Sandi
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Tambahkan sandi untuk mengamankan akun Anda.
              </p>
            </div>
            { !savedPin ? (
              <label className="relative inline-flex cursor-pointer items-center ml-6">
                <input
                  checked={pinToggle}
                  onChange={(e) => setPinToggle(e.target.checked)}
                  className="peer sr-only"
                  type="checkbox"
                />
                <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700"></div>
              </label>
            ) : (
              <div></div>
            )}
          </div>
          { !pinToggle || savedPin ? (
            <div className="mt-4">
              { savedPin ? (
                <div className="mt-4">
                  <p className="text-sm text-accent-green dark:text-accent-green-400">Anda sudah menambahkan PIN</p>
                </div>
              ) : (
                <div className="mt-4">
                  <p className="text-sm text-accent-red dark:text-accent-red-400">Anda belum menambahkan PIN</p>
                </div>
              )}
            </div>
          ) : savedPin ? (
            <div className="mt-4">
              <p className="text-sm text-accent-green dark:text-accent-green-400">Anda sudah menambahkan PIN</p>
            </div>
          ) : null}
          { /* Input PIN (jika ada) */}
          <div className="mt-4">
            {pinToggle && !savedPin ? (
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 relative">
                      <Input
                        type={showPin ? "text" : "password"}
                        placeholder="Masukkan PIN"
                        enterKeyHint="done"
                        value={pin}
                        onChange={e => setPin(e.target.value)}
                        className="pr-10"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPin(prev => !prev)}
                      tabIndex={-1}
                      className="ml-2 flex items-center text-accent-gray hover:text-accent-gray-700 h-10"
                      aria-label={showPin ? "Sembunyikan PIN" : "Tampilkan PIN"}
                      style={{ minWidth: 36, minHeight: 36 }}
                    >
                      <span className="material-symbols-outlined text-base align-middle" aria-hidden="true">
                        {showPin ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 relative">
                      <Input
                        type={showConfirmPin ? "text" : "password"}
                        placeholder="Konfirmasi PIN"
                        enterKeyHint="done"
                        value={confirmPin}
                        onChange={e => setConfirmPin(e.target.value)}
                        className="pr-10"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowConfirmPin(prev => !prev)}
                      tabIndex={-1}
                      className="ml-2 flex items-center text-accent-gray hover:text-accent-gray-700 h-10"
                      aria-label={showConfirmPin ? "Sembunyikan PIN" : "Tampilkan PIN"}
                      style={{ minWidth: 36, minHeight: 36 }}
                    >
                      <span className="material-symbols-outlined text-base align-middle" aria-hidden="true">
                        {showConfirmPin ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                  { errorPin && (
                    <div className="mt-2">
                      <p className="text-sm text-accent-red dark:text-accent-red-400">{errorPin}</p>
                    </div>
                  )}
                </div>
                <Button 
                  onClick={handleSavePin}
                  variant="outline" 
                  className="bg-primary hover:bg-primary/90 cursor-pointer mt-2 dark:bg-primary-500 dark:hover:bg-primary-500/90"
                >
                  Simpan
                </Button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="flex justify-between py-6 w-full">
          <div>
            <h3 className="font-medium text-slate-800 dark:text-white">Device Terhubung</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Sebanyak {devConToggle && devConCount === 0 ? 0 : devConCount} device terhubung.
            </p>
            { devConToggle ? (
              <div className="mt-4">
                { devConCount > 0 ? (
                  <div
                    className="mt-4"
                    onClick={() => {
                      setDevConCount(0);
                    }}
                  >
                    <p className="text-sm text-accent-green dark:text-accent-green-400">
                      Device Sudah Logout dari Seluruh Device
                    </p>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
          <Button variant="outline" className="bg-primary hover:bg-primary/90 cursor-pointer mt-2 dark:bg-primary-500 dark:hover:bg-primary-500/90" onClick={() => setDevConCount(0)}>
            Logout dari Semua Device
          </Button>
        </div>
      </div>
    </div>
  );
};

