// // This is your Prisma schema file,
// // learn more about it in the docs: https://pris.ly/d/prisma-schema
// // Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// // Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

// generator client {
//     provider = "prisma-client-js"
//   }
  
//   datasource db {
//     provider = "mongodb"
//     url      = env("DATABASE_URL")
//   }
  
//   model Coupon {
//     id         String    @id @default(auto()) @map("_id") @db.ObjectId
//     title      String
//     usageCount Int       @default(0) // عدد مرات استخدام القسيمة (افتراضيًا 0)
//     couponCode String    @unique // الكود الفريد للقسيمة (يجب أن يكون فريدًا ولا يمكن أن يكون فارغًا)
//     expiryDate DateTime // تاريخ انتهاء صلاحية القسيمة (يجب أن لا يكون فارغًا)
//     isActive   Boolean   @default(true)
//     storeId    String    @db.ObjectId
//     store      Store     @relation("StoreCoupons", fields: [storeId], references: [id]) // المتجر المرتبط بالقسيمة
//     createdAt  DateTime  @default(now())
//     updatedAt  DateTime? @updatedAt
//   }
  
//   model Banner {
//     id           String   @id @default(auto()) @map("_id") @db.ObjectId
//     title        String
//     expiryDate   DateTime // تاريخ انتهاء صلاحية البنر (يجب أن لا يكون فارغًا)
//     displayOrder Int      @default(0) // ترتيب عرض البنر (افتراضيًا 0)
//     targetPage   String // الصفحة المستهدفة عند النقر على البنر (يجب أن لا تكون فارغة)
//     link         String // الرابط الذي يرتبط به البنر (يجب أن لا يكون فارغًا)
//     imageUrl     String
//     isActive     Boolean  @default(true)
//     storeId      String   @db.ObjectId
//     store        Store    @relation(fields: [storeId], references: [id]) // المتجر المرتبط بالبنب
  
//     createdAt DateTime  @default(now())
//     updatedAt DateTime? @updatedAt
//   }
  
//   model Category {
//     id             String  @id @default(auto()) @map("_id") @db.ObjectId
//     title          String
//     slug           String  @unique
//     imageUrl       String?
//     description    String?
//     isActive       Boolean @default(true) // حالة الفئة (فعّالة افتراضيًا)
//     mainCategoryId String  @db.ObjectId
  
//     products     Product[]
//     mainCategory MainCategory @relation("MainCategoryCategories", fields: [mainCategoryId], references: [id]) // الفئة الرئيسية المرتبطة
//     storeId      String       @db.ObjectId
//     store        Store        @relation("StoreCategories", fields: [storeId], references: [id])
//     createdAt    DateTime     @default(now())
//     updatedAt    DateTime?    @updatedAt
//   }
  
//   model Training {
//     id             String  @id @default(auto()) @map("_id") @db.ObjectId
//     title          String
//     slug           String  @unique
//     imageUrl       String?
//     description    String? // وصف مختصر للتدريب (اختياري)
//     content        String? // محتوى التدريب (اختياري) 
//     isActive       Boolean @default(true)
//     maincategoryId String  @db.ObjectId
  
//     // العلاقات
//     maincategory MainCategory? @relation(fields: [maincategoryId], references: [id]) // الفئة الرئيسية المرتبطة بالتدريب
  
//     createdAt DateTime  @default(now())
//     updatedAt DateTime? @updatedAt
//   }
  
//   model Product {
//     id             String   @id @default(auto()) @map("_id") @db.ObjectId
//     title          String
//     slug           String   @unique
//     imageUrl       String?
//     productImages  String[]
//     description    String?
//     isActive       Boolean  @default(true)
//     isWholesale    Boolean  @default(false) // هل المنتج بالجملة
//     sku            String? // الرقم التعريفي للمنتج
//     barcode        String? // كود الباركود للمنتج
//     productCode    String? // كود المنتج
//     unit           String? // الوحدة المستخدمة للمنتج
//     productPrice   Float // سعر المنتج (أكبر من 0)
//     salePrice      Float? // سعر البيع للمنتج (أكبر من 0)
//     wholesalePrice Float? // سعر الجملة للمنتج
//     wholesaleQty   Int? // الكمية المتوفرة بالجملة
//     productStock   Int? // الكمية المتوفرة في المخزن
//     qty            Int? // الكمية المباعة من المنتج
//     tags           String[] // كلمات مفتاحية للمنتج
//     categoryId     String   @db.ObjectId
//     storeId        String   @db.ObjectId
  
//     // العلاقات
//     category   Category    @relation(fields: [categoryId], references: [id]) // الفئة المرتبطة بالمنتج
//     store      Store       @relation(fields: [storeId], references: [id]) // المتجر المرتبط بالمنتج
//     orderItems OrderItem[] // العناصر المرتبطة بالطلب
//     saleItems  SaleItem[] // العناصر المرتبطة بالمبيعات
  
//     createdAt DateTime  @default(now())
//     updatedAt DateTime? @updatedAt
//   }
  
//   model MainCategory {
//     id          String  @id @default(auto()) @map("_id") @db.ObjectId
//     title       String
//     slug        String  @unique
//     storeType   String? // نوع المتجر المرتبط بالفئة الرئيسية
//     description String?
//     isActive    Boolean @default(true)
  
//     // العلاقات
//     trainings  Training[]
//     stores     Store[]
//     categories Category[] @relation("MainCategoryCategories") // قائمة الفئات المرتبطة بالفئة الرئيسية
  
//     createdAt DateTime  @default(now())
//     updatedAt DateTime? @updatedAt
//   }
  
//   model Store {
//     id                 String  @id @default(auto()) @map("_id") @db.ObjectId
//     code               String // رمز المتجر
//     businessName       String // اسم العمل التجاري
//     contactPerson      String? // اسم المسؤول عن المتجر
//     whatsappPhone String? // رقم هاتف المسؤول عن المتجر
//     storeType          String? // نوع المتجر
//     profileImageUrl    String? // رابط صورة الملف الشخصي
//     notes              String? // ملاحظات إضافية
//     phone              String // رقم الهاتف الرئيسي
//     physicalAddress    String? // العنوان الفعلي
//     isActive           Boolean @default(true) // حالة المتجر (نشط أم لا)
//     slugDomain         String // النطاق الفريد للمتجر
  
//     vendorId String @unique @db.ObjectId // الرقم التعريفي للبائع
//     vendor   Vendor @relation(fields: [vendorId], references: [id])
  
//     // العلاقات
//     customersId     String[]          @db.ObjectId
//     customerProfile CustomerProfile[] @relation(fields: [customersId], references: [id]) // علاقة واحد إلى متعدد مع العملاء
  
//     mainCategory   MainCategory @relation(fields: [mainCategoryId], references: [id]) // علاقة مع الفئة الرئيسية
//     mainCategoryId String       @db.ObjectId
  
//     customizations Customization?
//     templateId     String         @db.ObjectId
//     template       Template       @relation(fields: [customersId], references: [id])
  
//     products Product[]
  
//     orders Order[]
  
//     sales Sale[]
  
//     categories Category[] @relation("StoreCategories")
  
//     storePaymentSettings StorePaymentSetting[]
  
//     paymentTransactions PaymentTransaction[]
  
//     storeDeliveringSettings StoreDeliveringSetting[]
  
//     deliveringTransactions DeliveringTransaction[]
  
//     coupons   Coupon[]  @relation("StoreCoupons") // علاقة مع القسائم
//     banners   Banner[]
//     createdAt DateTime  @default(now())
//     updatedAt DateTime? @updatedAt
//   }
  
//   enum UserRole {
//     ADMIN
//     USER
//     VENDOR
//     MODERATOR
//   }
  
//   model Vendor {
//     id                String  @id @default(auto()) @map("_id") @db.ObjectId // الرقم التعريفي للبائع (مفتاح أساسي)
//     email             String? @unique // البريد الإلكتروني للبائع (اختياري ولكن يجب أن يكون فريدًا إذا تم توفيره)
//     password          String // كلمة مرور البائع (يجب أن لا تكون خالية)
//     emailVerified     Boolean @default(false) // حالة التحقق من البريد الإلكتروني (افتراضيًا false)
//     isBlocked         Boolean @default(false) // حالة حظر البائع (افتراضيًا false)
//     verificationToken String? // رمز التحقق (اختياري)
  
//     store Store?
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء البائع
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للبائع
//   }
  
//   enum OrderStatus {
//     PENDING
//     PROCESSING
//     SHIPPED
//     DELIVERED
//     CANCELED
//   }
  
//   model Order {
//     id            String      @id @default(auto()) @map("_id") @db.ObjectId // الرقم التعريفي للطلب (مفتاح أساسي)
//     firstName     String // الاسم الأول للعميل (يجب أن لا يكون فارغًا)
//     lastName      String // الاسم الأخير للعميل (يجب أن لا يكون فارغًا)
//     email         String // البريد الإلكتروني للعميل (يجب أن لا يكون فارغًا)
//     phone         String // رقم هاتف العميل (يجب أن لا يكون فارغًا)
//     streetAddress String // عنوان الشارع للعميل (يجب أن لا يكون فارغًا)
//     city          String // المدينة التي يقيم فيها العميل (يجب أن لا يكون فارغًا)
//     country       String // الدولة التي يقيم فيها العميل (يجب أن لا يكون فارغًا)
//     district      String // المنطقة أو الحي (يجب أن لا يكون فارغًا)
//     shippingCost  Float // تكلفة الشحن (يجب أن لا تكون فارغة)
//     orderNumber   String? // رقم الطلب المميز (يمكن أن تكون القيمة فارغة)
//     paymentMethod String // طريقة الدفع (يجب أن لا تكون فارغة)
//     orderStatus   OrderStatus @default(PROCESSING) // حالة الطلب (افتراضيًا PROCESSING)
  
//     // العلاقات
//     customerProfile CustomerProfile @relation(fields: [customersId], references: [id]) // علاقة واحد إلى متعدد مع العملاء
//     customersId     String          @db.ObjectId
  
//     storeId String @db.ObjectId // الرقم التعريفي للمتجر (مفتاح أجنبي)
//     store   Store  @relation(fields: [storeId], references: [id]) // علاقة مع جدول المتاجر
  
//     sales Sale?
  
    // paymentTransactionId String             @db.ObjectId // الرقم التعريفي لمعالجة الدفع (مفتاح أجنبي)
    // paymentTransaction   PaymentTransaction @relation(fields: [paymentTransactionId], references: [id])
  
    // deliveringTransactionsId String                @db.ObjectId // الرقم التعريفي لمعاملات التسوق (يمكن أن تكون القيمة فارغة)
    // deliveringTransactions   DeliveringTransaction @relation(fields: [deliveringTransactionsId], references: [id]) // علاقة مع معاملات التسليم
  
//     orderItems OrderItem[] // قائمة عناصر الطلب (علاقة متعددة)
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء الطلب
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للطلب
//   }
  
//   model OrderItem {
//     id        String  @id @default(auto()) @map("_id") @db.ObjectId // الرقم التعريفي للعنصر (مفتاح أساسي)
//     storeId   String  @db.ObjectId // الرقم التعريفي للبائع المرتبط بالعنصر (يجب أن لا تكون القيمة خالية)
//     orderId   String  @db.ObjectId // الرقم التعريفي للطلب المرتبط بالعنصر (مفتاح أجنبي)
//     order     Order   @relation(fields: [orderId], references: [id]) // علاقة مع جدول الطلبات
//     productId String  @db.ObjectId
//     product   Product @relation(fields: [productId], references: [id]) // علاقة مع جدول المنتجات
//     imageUrl  String? // رابط الصورة المرتبطة بالعنصر (يمكن أن تكون القيمة خالية)
//     title     String? // عنوان العنصر (يمكن أن تكون القيمة خالية)
//     quantity  Int // عدد الوحدات المطلوبة من العنصر (يجب أن لا تكون القيمة خالية)
//     price     Float // سعر العنصر (يجب أن لا تكون القيمة خالية)
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء العنصر
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للعنصر
//   }
  
//   model Sale {
//     id String @id @default(auto()) @map("_id") @db.ObjectId // الرقم التعريفي لعملية البيع (مفتاح أساسي)
  
//     orderId String @unique @db.ObjectId // الرقم التعريفي للطلب المرتبط بعملية البيع (مفتاح أجنبي)
//     order   Order  @relation(fields: [orderId], references: [id]) // علاقة مع جدول الطلبات
  
//     storeId String @db.ObjectId // الرقم التعريفي للمتجر الذي تمت فيه عملية البيع (مفتاح أجنبي)
//     store   Store  @relation(fields: [storeId], references: [id]) // علاقة مع جدول المتاجر
  
//     saleItems SaleItem[] // قائمة العناصر التي تم بيعها في هذه العملية
  
//     customerProfile CustomerProfile @relation(fields: [customersId], references: [id]) // علاقة واحد إلى متعدد مع العملاء
//     customersId     String          @db.ObjectId
  
//     username     String // اسم المستخدم الذي قام بالعملية (يجب أن لا تكون القيمة خالية)
//     productQty   Int // عدد الوحدات الإجمالي للمنتجات المباعة (يجب أن لا تكون القيمة خالية)
//     invoiceTotal Float // إجمالي مبلغ الفاتورة الناتجة عن عملية البيع (يجب أن لا تكون القيمة خالية)
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء عملية البيع
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل لعملية البيع
//   }
  
//   model SaleItem {
//     id String @id @default(auto()) @map("_id") @db.ObjectId // الرقم التعريفي لعنصر البيع (مفتاح أساسي)
  
//     productId String  @db.ObjectId
//     product   Product @relation(fields: [productId], references: [id]) // علاقة مع جدول المنتجات
  
//     saleId String @db.ObjectId // الرقم التعريفي للبيع المرتبط بالعنصر (مفتاح أجنبي)
//     sale   Sale   @relation(fields: [saleId], references: [id]) // علاقة مع جدول المبيعات
  
//     total        Float // إجمالي مبلغ العنصر (يجب أن لا تكون القيمة خالية)
//     productTitle String // عنوان المنتج المرتبط بالعنصر (يجب أن لا تكون القيمة خالية)
//     productImage String? // رابط صورة المنتج المرتبط بالعنصر (اختياري)
//     productPrice Float // سعر المنتج المرتبط بالعنصر (يجب أن لا تكون القيمة خالية)
//     productQty   Int // كمية المنتج المرتبطة بالعنصر (يجب أن لا تكون القيمة خالية)
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء العنصر
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للعنصر
//   }
  
//   model Customer {
//     id        String  @id @default(auto()) @map("_id") @db.ObjectId // الرقم التعريفي للعميل (مفتاح أساسي)
//     email     String? @unique // البريد الإلكتروني للعميل (يجب أن يكون فريدًا ويمكن أن يكون خاليًا)
//     isBlocked Boolean @default(false) // حالة الحظر للعميل (القيمة الافتراضية: غير محظور)
  
//     customerProfile CustomerProfile[] // قائمة بملفات تعريف العميل المرتبطة بالعميل (اختياري)
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء العميل
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للعميل
//   }
  
//   model CustomerProfile {
//     id                String  @id @default(auto()) @map("_id") @db.ObjectId // الرقم الفريد لملف تعريف العميل (مفتاح أساسي)
//     firstName         String? // الاسم الأول للعميل (اختياري)
//     lastName          String? // اسم العائلة للعميل (اختياري)
//     password          String // كلمة المرور للعميل (يجب أن لا تكون خالية)
//     emailVerified     Boolean @default(false) // حالة التحقق من البريد الإلكتروني (القيمة الافتراضية: false)
//     verificationToken String? // رمز التحقق (اختياري)
//     phone             String? // رقم الهاتف للعميل (اختياري)
//     streetAddress     String? // عنوان الشارع للعميل (اختياري)
//     city              String? // المدينة التي يسكن فيها العميل (اختياري)
//     country           String? // الدولة التي يسكن فيها العميل (اختياري)
//     district          String? // المنطقة أو الحي الذي يسكن فيه العميل (اختياري)
//     profileImage      String? // رابط صورة الملف الشخصي للعميل (اختياري)
  
//     customerId String   @db.ObjectId // الرقم التعريفي للعميل المرتبط (مفتاح أجنبي)
//     customer   Customer @relation(fields: [customerId], references: [id]) // العلاقة مع العميل
//     storeId    String[] @db.ObjectId
//     store      Store[]  @relation(fields: [storeId], references: [id]) // العلاقة مع المتجر (اختياري)
  
//     orders Order[] // قائمة الطلبات المرتبطة بالعميل (اختياري)
  
//     sales Sale[] // قائمة المبيعات المرتبطة بالعميل (اختياري)
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء ملف التعريف
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل لملف التعريف
//   }
  
//   model Template {
//     id          String  @id @default(auto()) @map("_id") @db.ObjectId // الرقم الفريد للنموذج (مفتاح أساسي)
//     title       String // عنوان النموذج الذي يظهر للمستخدمين
//     slug        String  @unique // معرف فريد للنموذج يتم إنشاؤه بناءً على العنوان
//     thumbnail   String? // رابط الصورة المصغرة لعرض معاينة النموذج (اختياري)
//     description String? // وصف مختصر أو تفصيلي للنموذج (اختياري)
//     isActive    Boolean @default(true) // حالة النموذج إذا كان نشطًا أم لا (افتراضيًا نشط)
//     isDefault   Boolean @default(false) // مؤشر إذا كان النموذج هو الافتراضي للنظام (افتراضيًا غير افتراضي)
  
//     stores Store[] // قائمة المتاجر المرتبطة بالنموذج
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء السجل الخاص بالنموذج
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للسجل الخاص بالنموذج
//   }
  
//   model Customization {
//     id              String  @id @default(auto()) @map("_id") @db.ObjectId // الرقم الفريد للتخصيص (مفتاح أساسي)
//     primaryColor    String // اللون الأساسي المستخدم في تصميم المتجر
//     secondaryColor  String // اللون الثانوي المستخدم في تصميم المتجر
//     accentColor     String // اللون المستخدم لإبراز العناصر المهمة في التصميم
//     backgroundColor String // لون الخلفية المستخدم في تصميم المتجر
//     fontFamily      String? // نوع الخط المستخدم في النصوص داخل المتجر (اختياري)
//     isActive        Boolean @default(true) // حالة التخصيص إذا كان نشطًا أم لا (افتراضيًا نشط)
  
//     store   Store  @relation(fields: [storeId], references: [id]) // علاقة مع جدول المتاجر
//     storeId String @unique @db.ObjectId // الرقم التعريفي للمتجر المرتبط بالتخصيص (مفتاح أجنبي)
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء السجل الخاص بالتخصيص
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للسجل الخاص بالتخصيص
//   }
  
//   model PaymentTransaction {
//     id                String @id @default(auto()) @map("_id") @db.ObjectId // الرقم الفريد للمعاملة (مفتاح أساسي)
//     transactionNumber String // رقم فريد يميز المعاملة المالية
//     amount            Float // المبلغ المدفوع في المعاملة
//     currency          String // العملة المستخدمة في المعاملة (مثل USD أو SAR)
//     status            String // حالة المعاملة (مثل PENDING أو COMPLETED)
  
//     storeId String @db.ObjectId // الرقم التعريفي للمتجر المرتبط بالمعاملة (مفتاح أجنبي)
//     store   Store  @relation(fields: [storeId], references: [id])
  
//     orders Order[]
  
//     paymentProvidersId String          @db.ObjectId // الرقم التعريفي لمزود الخدمة المرتبط بالمعاملة (مفتاح أجنبي)
//     paymentProvider    PaymentProvider @relation(fields: [paymentProvidersId], references: [id])
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء المعاملة
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للمعاملة
//   }
  
//   model StorePaymentSetting {
//     id       String  @id @default(auto()) @map("_id") @db.ObjectId // الرقم التعريفي لإعدادات الدفع (مفتاح أساسي)
//     isActive Boolean // ما إذا كانت إعدادات الدفع للبائع نشطة أم لا
//     storeId  String  @db.ObjectId // الرقم التعريفي للمتجر المرتبط بإعدادات الدفع (مفتاح أجنبي)
//     store    Store   @relation(fields: [storeId], references: [id])
  
//     paymentProvidersId String          @db.ObjectId // الرقم التعريفي لمزود خدمة الدفع (مفتاح أجنبي)
//     paymentProvider    PaymentProvider @relation(fields: [paymentProvidersId], references: [id])
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء السجل
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للسجل
//   }
  
//   model PaymentProvider {
//     id        String  @id @default(auto()) @map("_id") @db.ObjectId // الرقم التعريفي لمزود خدمة الدفع (مفتاح أساسي)
//     name      String // اسم مزود خدمة الدفع
//     apiUrl    String // عنوان واجهة برمجة التطبيقات (API)
//     apiKey    String // المفتاح للوصول إلى API
//     apiSecret String // السر للوصول إلى API
//     isActive  Boolean // حالة التفعيل لمزود خدمة الدفع
  
//     paymentTransactions  PaymentTransaction[] // المعاملات المتعلقة بالدفع
//     storePaymentSettings StorePaymentSetting[] // إعدادات الدفع للبائع المرتبطة بمزود الخدمة
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء السجل
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للسجل
//   }
  
//   model DeliveringTransaction {
//     id                   String @id @default(auto()) @map("_id") @db.ObjectId // الرقم التعريفي للمعاملة (مفتاح أساسي)
//     transactionNumber    String // رقم معاملة الشحن فريد
//     amount               Float // المبلغ المدفوع في معاملة الشحن
//     currency             String // العملة المستخدمة في معاملة الشحن (مثل USD أو SAR)
//     status               String // حالة معاملة الشحن (مثل PENDING أو COMPLETED)
//     storeId              String @db.ObjectId // الرقم التعريفي للمتجر المرتبط بالمعاملة (مفتاح أجنبي)
//     orderId              String @db.ObjectId // الرقم التعريفي للطلب المرتبط بالمعاملة (مفتاح أجنبي)
//     deliveringProviderId String @db.ObjectId // الرقم التعريفي لمزود خدمة الشحن المرتبط بالمعاملة (مفتاح أجنبي)
  
//     store              Store              @relation(fields: [storeId], references: [id]) // علاقة مع جدول المتاجر
//     order              Order[]
//     deliveringProvider DeliveringProvider @relation(fields: [deliveringProviderId], references: [id]) // علاقة مع جدول مزودي خدمة الشحن
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء السجل
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للسجل
//   }
  
//   model StoreDeliveringSetting {
//     id                   String  @id @default(auto()) @map("_id") @db.ObjectId // الرقم التعريفي لإعدادات الشحن (مفتاح أساسي)
//     isActive             Boolean // حالة التفعيل لإعدادات الشحن (نشطة أو غير نشطة)
//     storeId              String  @db.ObjectId // الرقم التعريفي للمتجر المرتبط بإعدادات الشحن (مفتاح أجنبي)
//     deliveringProviderId String  @db.ObjectId // الرقم التعريفي لمزود خدمة الشحن المرتبط بهذه الإعدادات (مفتاح أجنبي)
  
//     store              Store              @relation(fields: [storeId], references: [id]) // علاقة مع جدول المتاجر
//     deliveringProvider DeliveringProvider @relation(fields: [deliveringProviderId], references: [id]) // علاقة مع جدول مزودي خدمة الشحن
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء السجل
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للسجل
//   }
  
//   model DeliveringProvider {
//     id        String  @id @default(auto()) @map("_id") @db.ObjectId // الرقم التعريفي لمزود خدمة الشحن (مفتاح أساسي)
//     name      String // اسم مزود خدمة الشحن
//     apiUrl    String // عنوان واجهة برمجة التطبيقات (API) لمزود الشحن
//     apiKey    String // المفتاح الذي يستخدمه مزود الشحن للوصول إلى واجهة برمجة التطبيقات (API)
//     apiSecret String // السر الذي يستخدمه مزود الشحن للوصول إلى واجهة برمجة التطبيقات (API)
//     isActive  Boolean // حالة تفعيل مزود الخدمة (نشط أو غير نشط)
  
//     deliveringTransactions  DeliveringTransaction[]
//     storeDeliveringSettings StoreDeliveringSetting[] // علاقة 1 إلى متعدد مع إعدادات الشحن الخاصة بالبائع
  
//     createdAt DateTime  @default(now()) // تاريخ إنشاء السجل
//     updatedAt DateTime? @updatedAt // تاريخ آخر تعديل للسجل
//   }
  