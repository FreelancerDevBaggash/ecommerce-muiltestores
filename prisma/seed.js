const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10); // تشفير كلمة المرور

  await prisma.admin.create({
    data: {
      email: "admin@example.com",
      name: "Super Admin",
      password: hashedPassword,
    },
  });

  console.log("✅ Admin created with hashed password");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
