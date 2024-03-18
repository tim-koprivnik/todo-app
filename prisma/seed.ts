const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const todos = [
    { title: 'First todo', complete: false },
    { title: 'Second todo', complete: true },
    // Add more todos as needed
  ].map((todo) => prisma.todo.create({ data: todo }));

  await Promise.all(todos);

  console.log('Database has been seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
