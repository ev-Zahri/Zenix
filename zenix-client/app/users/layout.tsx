import { Sidebar } from '@/components/common/Sidebar';

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      {children}
    </div>
  );
}

