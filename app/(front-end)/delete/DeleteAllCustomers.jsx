'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button'; // إذا تستخدم shadcn
import { Trash2 } from 'lucide-react';

export default function DeleteAllCustomers() {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmed = confirm('هل أنت متأكد من حذف جميع العملاء؟ هذا الإجراء لا يمكن التراجع عنه.');
    if (!confirmed) return;

    setLoading(true);
    const toastId = toast.loading('جاري حذف العملاء...');

    try {
      const res = await fetch('/api/customers', {
        method: 'DELETE',
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || 'تم الحذف بنجاح', { id: toastId });
      } else {
        toast.error(data.message || 'فشل في الحذف', { id: toastId });
      }
    } catch (error) {
      toast.error('حدث خطأ أثناء الحذف', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button variant="destructive" onClick={handleDelete} disabled={loading}>
      <Trash2 className="w-4 h-4 mr-2" />
      حذف جميع العملاء
    </Button>
  );
}
