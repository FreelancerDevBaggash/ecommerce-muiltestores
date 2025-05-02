import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Check, MapPin } from 'lucide-react';

const OrderTracking = () => {
  const orderStatus = {
    orderId: "ORD123456",
    currentStatus: "shipping",
    estimatedDelivery: "2024-03-20",
    steps: [
      {
        id: 1,
        title: "تم تأكيد الطلب",
        date: "2024-03-15",
        icon: Package,
        completed: true
      },
      {
        id: 2,
        title: "جاري الشحن",
        date: "2024-03-17",
        icon: Truck,
        completed: true
      },
      {
        id: 3,
        title: "في الطريق",
        date: "2024-03-18",
        icon: MapPin,
        completed: false
      },
      {
        id: 4,
        title: "تم التسليم",
        date: null,
        icon: Check,
        completed: false
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">تتبع طلبك</h2>
            <p className="text-gray-600">رقم الطلب: {orderStatus.orderId}</p>
          </div>

          <div className="relative">
            {orderStatus.steps.map((step, index) => (
              <div key={step.id} className="flex items-start mb-8 last:mb-0">
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-primary text-white' : 'bg-gray-200'
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </motion.div>
                  {index < orderStatus.steps.length - 1 && (
                    <div className={`absolute top-10 left-1/2 w-0.5 h-full -translate-x-1/2 ${
                      step.completed ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
                
                <div className="mr-4 flex-1">
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500">
                    {step.date ? new Date(step.date).toLocaleDateString('ar-SA') : 'قريباً'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-center text-sm text-gray-600">
              موعد التسليم المتوقع: {new Date(orderStatus.estimatedDelivery).toLocaleDateString('ar-SA')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderTracking; 