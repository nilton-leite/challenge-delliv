import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt';
import { Status } from "@prisma/client";
const prisma = new PrismaClient()
async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      email: 'admin@admin.com',
      name: 'Admin',
      password: await bcrypt.hash('admin', 10)
    },
  })
  const create = await prisma.order.createMany({
    data: [
        {
            client_name: 'Usuario 1',
            street: 'Rua usuario 1',
            zipCode: "84070020",
            number: '957',
            state: 'PR',
            city: 'Ponta Grossa',
            neighborhood: 'Nova Russia',
            status: Status.PENDING
        },
        {
            client_name: 'Usuario 1',
            street: 'Rua usuario 1',
            zipCode: "84070020",
            number: '957',
            state: 'PR',
            city: 'Ponta Grossa',
            neighborhood: 'Nova Russia',
            status: Status.PENDING
        },
        {
            client_name: 'Usuario 2',
            street: 'Rua usuario 2',
            zipCode: "84070020",
            number: '957',
            state: 'PR',
            city: 'Ponta Grossa',
            neighborhood: 'Nova Russia',
            status: Status.PENDING
        },
        {
            client_name: 'Usuario 3',
            street: 'Rua usuario 3',
            zipCode: "84070020",
            number: '957',
            state: 'PR',
            city: 'Ponta Grossa',
            neighborhood: 'Nova Russia',
            status: Status.PENDING
        },
        {
            client_name: 'Usuario 4',
            street: 'Rua usuario 4',
            zipCode: "84070020",
            number: '957',
            state: 'PR',
            city: 'Ponta Grossa',
            neighborhood: 'Nova Russia',
            status: Status.PENDING
        },
        {
            client_name: 'Usuario 5',
            street: 'Rua usuario 5',
            zipCode: "84070020",
            number: '957',
            state: 'PR',
            city: 'Ponta Grossa',
            neighborhood: 'Nova Russia',
            status: Status.PENDING
        },
    ]
  })
  console.log({ admin, create })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })