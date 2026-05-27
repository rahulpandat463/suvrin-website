const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  const email = `testuser_${Date.now()}@example.com`;
  
  console.log('Testing Prisma direct connection...');
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: 'password123',
        name: 'Test Direct',
      },
    });
    console.log('User created:', user);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
