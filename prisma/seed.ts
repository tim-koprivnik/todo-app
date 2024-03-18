import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create an array of promises for each todo item you want to create
  const todos = [
    { title: 'First todo', complete: false },
    { title: 'Second todo', complete: true },
    // Add more todos as needed
  ].map((todo) => prisma.todo.create({ data: todo }));

  // Execute all promises
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
