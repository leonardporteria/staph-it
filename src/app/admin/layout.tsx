import { ThemeProvider } from '@/components/theme-provider';
import AdminSidebar from '@/components/admin-sidebar';
import AdminHeader from '@/components/admin-header';
import AdminFooter from '@/components/admin-footer';
import '../globals.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <div className='flex min-h-screen'>
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main content */}
        <div className='flex-1 flex flex-col'>
          <AdminHeader />
          <main className='flex-1 p-6 overflow-auto'>{children}</main>
          <AdminFooter />
        </div>
      </div>
    </ThemeProvider>
  );
}
