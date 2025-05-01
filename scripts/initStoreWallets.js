// scripts/initStoreWallets.js

const { PrismaClient, WalletType } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // 1. جلب جميع المتاجر
  const stores = await prisma.store.findMany({
    select: { id: true, businessName: true }
  });

  console.log(`Found ${stores.length} stores.`);

  // 2. أنواع المحافظ التي نريد إنشاؤها
  const types = [
    WalletType.STORE_BALANCE,
    WalletType.ELECTRONIC_PAYMENTS,
    WalletType.COD_PAYMENTS
  ];

  let ops = 0;

  for (const store of stores) {
    for (const type of types) {
      // إنشاء المحفظة إن لم تكن موجودة
      await prisma.wallet.upsert({
        where: {
          storeId_type: { storeId: store.id, type }
        },
        create: {
          storeId: store.id,
          type,
          balance: 0.0
        },
        update: {}  // لا نغيّر شيئاً إذا وجدت
      });
      console.log(`✔️ ${store.businessName} – wallet ${type}`);
      ops++;
    }
  }

  console.log(`\nDone. Ensured ${types.length} wallets for ${stores.length} stores (total ops: ${ops}).`);

  // 3. تأكد من وجود محفظة المنصة
  const platform = await prisma.platformWallet.findFirst();
  if (!platform) {
    await prisma.platformWallet.create({ data: { balance: 0.0 } });
    console.log('✔️ Created PlatformWallet');
  } else {
    console.log('ℹ️ PlatformWallet already exists');
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
