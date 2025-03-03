import AdminNav from './components/AdminNav';
import AdminGuard from './components/AdminGuard';

export const metadata = {
  title: 'Admin Panel',
  description: 'Admin panel for managing the website',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50">
        <AdminNav />
        <main>{children}</main>
      </div>
    </AdminGuard>
  );
} 