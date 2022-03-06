import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    // Generate a random user id
    const id = Math.floor(Math.random() * 1000);

    // Fetch the IP address, convert it to a json format and store it in the database.
    const ip = await fetch("https://api.ipify.org/?format=json").then(
      (results) => results.json()
    );

    // If the api isn't available, return an error.
    if (ip.status === 400 || 404) {
      throw new Error("Server is currently not available");
    }
    await prisma.user.deleteMany();

    // create the user in the database
    const test_user = prisma.user.create({
      data: {
        id: id,
        ip: ip,
      },
    });

    console.log({ test_user });
  } catch (error) {
    console.error(error);
  }
}

// Declare the main function, disconnect prisma.
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
