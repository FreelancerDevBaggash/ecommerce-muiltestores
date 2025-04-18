import DeleteAllCustomers from './DeleteAllCustomers';
import { Toaster } from 'react-hot-toast';

export default function Page() {
  return (
    <div className="p-4">
      <Toaster />
      <h1 className="text-xl font-bold mb-4">لوحة التحكم</h1>
      <DeleteAllCustomers />
    </div>
  );
}
