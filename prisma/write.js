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
//     //usageCount Int 
//     //vendorProfile       VendorProfile        @relation(fields: [vendorId], references: [id], onDelete: Cascade, onUpdate: Cascade)
//     id         String   @id @default(auto()) @map("_id") @db.ObjectId
//     title      String
//     couponCode String
//     expiryDate DateTime
//     isActive   Boolean
  
//     user       User        @relation(fields: [vendorId], references: [id], onDelete: Cascade, onUpdate: Cascade)
//     vendorId     String      @db.ObjectId
  
//     createdAt  DateTime @default(now())
//     updatedAt  DateTime @updatedAt
//   }
  
  
//   model Banner {
//     //expiryDate DateTime
//     //displayOrder Int
//     //targetPage String
//     //vendorProfile       VendorProfile        @relation(fields: [vendorId], references: [id], onDelete: Cascade, onUpdate: Cascade)
//     id        String   @id @default(auto()) @map("_id") @db.ObjectId
//     title     String
//     link      String
//     imageUrl  String
//     isActive  Boolean
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//   }
  
//   // Relationships
  
//   // 1 to 1 Relationship User => Profile Relation
//   // 1 to Many => Category => Product Relation
//   // many to many => Market => Category
  
//   model Category {
//     //VendorProfileId
//     //MainCategoryId
//     id          String     @id @default(auto()) @map("_id") @db.ObjectId
//     title       String
//     slug        String     @unique
//     imageUrl    String?
//     description String?
//     isActive    Boolean
//     products    Product[]
//     trainings   Training[]
  
//     marketIds String[] @db.ObjectId//delete
//     markets   Market[] @relation(fields: [marketIds], references: [id])//delete
  
//     createdAt DateTime  @default(now())
//     updatedAt DateTime? @updatedAt
//   }
  
  
  
  
  
  
//   model Market {
//     //MainCategoryId
//     id          String  @id @default(auto()) @map("_id") @db.ObjectId
//     title       String
//     slug        String  @unique
//     logoUrl     String?
//     description String?
//     isActive    Boolean
  
//     categoryIds String[]   @db.ObjectId//delete
//     categories  Category[] @relation(fields: [categoryIds], references: [id])//delete
  
//     createdAt DateTime  @default(now())
//     updatedAt DateTime? @updatedAt
//   }
  
  
  
  
  
//   model Product {
//     //VendorProfileId
//     //salesItem      SaleItem[]
//     id             String   @id @default(auto()) @map("_id") @db.ObjectId
//     title          String
//     slug           String   @unique
//     imageUrl       String?
//     productImages  String[]
//     descripti      String?
//     isActive       Boolean
//     isWholesale    Boolean
//     sku            String?
//     barcode        String?
//     productCode    String?
//     unit           String?
//     productPrice   Float
//     salePrice      Float
//     wholesalePrice Float?
//     wholesaleQty   Int?
//     productStock   Int?
//     qty            Int?
//     tags           String[]
//     categoryId     String   @db.ObjectId
//     category       Category @relation(fields: [categoryId], references: [id], onDelete: Cascade, onUpdate: Cascade)
  
//     user       User        @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)//delete
//     userId     String      @db.ObjectId//delete
//     orderItems OrderItem[]
//     sales      Sale[]
//     createdAt  DateTime    @default(now())
//     updatedAt  DateTime?   @updatedAt
//   }
  
  
  
//   model Training {
//     //MainCategoryId
//     id          String  @id @default(auto()) @map("_id") @db.ObjectId
//     title       String
//     slug        String  @unique
//     imageUrl    String?
//     description String?
//     content     String?
//     isActive    Boolean
  
//     category   Category? @relation(fields: [categoryId], references: [id])//delete
//     categoryId String    @db.ObjectId//delete
  
//     createdAt DateTime  @default(now())
//     updatedAt DateTime? @updatedAt
//   }
  
  
//   enum UserRole {
//     ADMIN
//     USER
//     VENDOR
//     MODERATOR
//   }
  
//   // Add this enum at the top-level of your schema
//   enum OrderStatus {
//     PENDING
//     PROCESSING
//     SHIPPED
//     DELIVERED
//     CANCELED
//   }
  
//   model User {
//     //isBloked
//     id                String         @id @default(auto()) @map("_id") @db.ObjectId
//     name              String?
//     email             String?        @unique
//     password          String
//     enmailVerified    Boolean        @default(false)
//     products          Product[]//delete
//     coupons           Coupon[]
//     role              UserRole       @default(USER)
//     //plan            String? 
//     verificationToken String?
//     vendorProfile     VendorProfile?
//     profile           UserProfile?
//     orders            Order[] //User can have multiple Orders
    
//     createdAt DateTime  @default(now())
//     updatedAt DateTime? @updatedAt
  
//     sales Sale[]
//   }
  
  
  
//   model UserProfile {
//       //createdAt DateTime  @default(now())
//     //updatedAt DateTime? @updatedAt
//     id     String @id @default(auto()) @map("_id") @db.ObjectId
//     userId String @unique @db.ObjectId
  
//     //Add other fields for user onboarding information
//     //for example
  
//       //Personal Details
//     name          String?
//     firstName     String?
//     lastName      String?
//     email         String?//delete
//     username      String?//delete
//     phone         String?
//     //shipping Details
//     streetAddress String?
//     city          String?
//     country       String?
//     district      String?
  
//     dateOfBirth DateTime?//delete
//     profileImage String?
  
  
  
//     user User @relation(fields: [userId], references: [id], onDelete: Cascade)
//   }
  
  
  
//   model VendorProfile {
//     //templateId
//     //storeType
//     //businesssName
//     //product 
//     id                 String   @id @default(auto()) @map("_id") @db.ObjectId
//     code               String
//     contactPerson      String?
//     whatsappPhone String?
//     profileImageUrl    String?
//     firstName          String?//delete
//     lastName           String?//delete
//     notes              String?
//     phone              String
//     physicalAddress    String?
//     terms              String?//delete
//     isActive           Boolean
//     products           String[]//delete
  
//     landSize           Float//delete
//     mainCrop           String//deiete
  
//     user   User   @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)
//     userId String @unique @db.ObjectId
  
//     createdAt DateTime  @default(now())
//     updatedAt DateTime? @updatedAt
//   }
  
  
  
//   // Modify the Order model to use the enum and set PENDING as default
//   model Order {
//    // VendorId
//   // sale         Sale?
//   //saleItems   SaleItem[]
//     id            String  @id @default(auto()) @map("_id") @db.ObjectId
//     userId        String  @db.ObjectId
//     //Personal Details
//     firstName     String
//     lastName      String
//     email         String
//     phone         String
//     //shipping Details
//     streetAddress String
//     city          String
//     country       String
//     district      String
//     shippingCost  Float
//     orderNumber   String?
//     //payment Method
//     paymentMethod String
  
//     orderStatus OrderStatus @default(PROCESSING) // Set PENDING as the default value
//     createdAt   DateTime    @default(now())
//     updatedAt   DateTime    @updatedAt
//     user        User        @relation(fields: [userId], references: [id])
//     orderItems  OrderItem[]
//     sales        Sale[]
  
  
//   }
  
  
//   model OrderItem {
//     id       String   @id @default(auto()) @map("_id") @db.ObjectId
//     orderId   String   @db.ObjectId
//     productId String   @db.ObjectId
//     vendorId  String   @db.ObjectId
//     imageUrl  String?
//     title     String?
//     quantity  Int
//     price     Float
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     order     Order    @relation(fields: [orderId], references: [id])
//     product   Product  @relation(fields: [productId], references: [id])
//   }
  
  
  
  
//   model Sale {
//     id        String   @id @default(auto()) @map("_id") @db.ObjectId
//     orderId   String   @db.ObjectId
//     productId String   @db.ObjectId
//     vendorId  String   @db.ObjectId
//     total     Float
//     productTitle String
//     productImage String
//     productPrice Float
//     productQty  Int
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     order     Order    @relation(fields: [orderId], references: [id])
//     product   Product  @relation(fields: [productId], references: [id])
//     vendor     User     @relation(fields: [vendorId], references: [id])
//   }
  
  
  
  
  
  
//   //model Sale {
//   //  id        String   @id @default(auto()) @map("_id") @db.ObjectId
//   //  orderId   String   @db.ObjectId
//   //  vendorId  String   @db.ObjectId
//   //  saleItems SaleItem[]
//   //  userProfileImage  String?
//   //  username          String?
//   //  invoiceTotal     Float
//   //  productsQty  Int
//   //  createdAt DateTime @default(now())
//   //  updatedAt DateTime @updatedAt
//   //  order     Order    @relation(fields: [orderId], references: [id])
//   //  vendor    User     @relation(fields: [vendorId], references: [id])
//   //}
  
  
  
//   //model SaleItem{
//    // id        String   @id @default(auto()) @map("_id") @db.ObjectId
//   //orderId   String   @db.ObjectId
//   //  productId String   @db.ObjectId
//   //  saleId     String   @db.ObjectId
//   //  total     Float
//   //  productTitle String
//   //  productImage String
//   //  productPrice Float
//   //  productQty  Int
//   //  createdAt DateTime @default(now())
//   //  updatedAt DateTime @updatedAt
//   //  sale     Sale    @relation(fields: [saleId], references: [id])
//   //  order     Order    @relation(fields: [orderId], references: [id])
//   //  product   Product  @relation(fields: [productId], references: [id])
//   //}
  
  
  
//   //model Template{
//       //Template_Id        String   @id @default(auto()) @map("_id") @db.ObjectId
//       //Title String
//       //slug String
//       //Thumbnail String 
//       //Description String 
//       //IsActive Boolean 
//       //IsDefault Boolean 
//       //Store_Id String   @db.ObjectId
//       //createdAt DateTime @default(now())
//     //updatedAt DateTime @updatedAt
  
//   //}
  
  
//   //model Customizations{
//     //  Customizations_Id        String   @id @default(auto()) @map("_id") @db.ObjectId
//      // PrimaryColor   String
//      // SecondoryColor String
//      // AccentColor String 
//      // BackgroundColor String 
//      // FontFamily String 
//       // IsActive Boolean 
//      // Store_Id String   @db.ObjectId
//      // createdAt DateTime @default(now())
//   //  updatedAt DateTime @updatedAt
//   //}
  
  
  
//   //model PaymentTransactions{
//       //PaymentTransactions_Id        String   @id @default(auto()) @map("_id") @db.ObjectId
//       //TransactionNumber   String
//       //Amount Float
//       //Currency String 
//       //Status String 
  
//       //Store_Id String   @db.ObjectId
//       //Order_Id String   @db.ObjectId
//       //PaymentProviders_Id String   @db.ObjectId
//       //createdAt DateTime @default(now())
//     //updatedAt DateTime @updatedAt
  
//   //}
  
  
  
//   //model VendorPaymentSetting{
//     //  VendorPaymentSetting_Id        String   @id @default(auto()) @map("_id") @db.ObjectId
//       //isActive boolean
//       //Store_Id String   @db.ObjectId
//       //PaymentProviders_Id String   @db.ObjectId
//       //createdAt DateTime @default(now())
//     //updatedAt DateTime @updatedAt
  
//   //}
  
  
//   //model PaymentProviders{
//     //  PaymentProviders_Id        String   @id @default(auto()) @map("_id") @db.ObjectId
//      // Name String
//      // ApiUrl String
//      // ApiKey String
//      // ApiSecret String
//      // isActive boolean
//      // PaymentTransactions PaymentTransactions
//      // VendorPaymentSetting VendorPaymentSetting
//      // createdAt DateTime @default(now())
//      // updatedAt DateTime @updatedAt
  
//   //}
  
//   //model ShippingTransactions{
//     //  ShippingTransactions_Id        String   @id @default(auto()) @map("_id") @db.ObjectId
//     //  TransactionNumber   String
//     //  Amount Float
//     //  Currency String 
//     //  Status String 
  
//     //  Store_Id String   @db.ObjectId
//     //  Order_Id String   @db.ObjectId
//     //  ShippingProviders_Id String   @db.ObjectId
//     //  createdAt DateTime @default(now())
//     //updatedAt DateTime @updatedAt
  
//   //}
  
  
//   //model VendorShippingSetting{
//     //  VendorShippingSetting_Id        String   @id @default(auto()) @map("_id") @db.ObjectId
//     //  isActive boolean
//     //  Store_Id String   @db.ObjectId
//     //  ShippingProviders_Id String   @db.ObjectId
//     //  createdAt DateTime @default(now())
//    // updatedAt DateTime @updatedAt
  
//   //}
  
  
//   //model ShippingProviders{
//    //   ShippingProviders_Id        String   @id @default(auto()) @map("_id") @db.ObjectId
//     //  Name String
//     //  ApiUrl String
//     //  ApiKey String
//     //  ApiSecret String
//     //  isActive boolean
//     //  ShippingTransactions ShippingTransactions
//     //  VendorShippingSetting VendorShippingSetting
//     //  createdAt DateTime @default(now())
//     //  updatedAt DateTime @updatedAt
  
//   //}
  
  
//   //model MainCategory {
//     //MainCategory_Id          String     @id @default(auto()) @map("_id") @db.ObjectId
//     //vendorid  String
//     //title       String
//     //slug        String     @unique
//     //StoreType    String?
//     //description String?
//     //isActive    Boolean
//     //trainings   Training[]
  
//     //Store_Id String @db.ObjectId//delete
   
  
//     //createdAt DateTime  @default(now())
//    //updatedAt DateTime? @updatedAt
//   //}