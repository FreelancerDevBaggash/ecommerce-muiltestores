// ترجمة تسميات أنواع المحافظ والمعاملات للعرض بالعربية

export const walletTypeLabels = {
    '':                   'الكل',
    STORE_BALANCE:        'رصيد المتجر',
    ELECTRONIC_PAYMENTS:  'مدفوعات إلكترونية',
    COD_PAYMENTS:         'الدفع عند الاستلام',
  };
  
  export const txTypeLabels = {
    TOPUP:    'شحن',
    PAYMENT:  'دفع',
    REFUND:   'استرجاع',
    WITHDRAW: 'سحب',
  };
  
  // تسميات معاملات المنصة
  export const platformTxTypeLabels = {
    COMMISSION: 'عمولة المنصة',
    REFUND:     'استرجاع للعملاء',
    PAYOUT:     'سحب المنصة لرصيدها',
  };
  