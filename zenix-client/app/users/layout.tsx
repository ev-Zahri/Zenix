import { Sidebar } from '@/components/common/Sidebar';

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto w-full px-2 md:px-4">
        {children}
      </div>
    </div>
  );
}

