import prisma  from '@/lib/prisma'

async function main() {

    await prisma.user.create({
        data: {
            name: 'Kikemon',
            email: 'kike@gmail.com',
            password: '123456'
        }
    })

    console.log('SUCCESS!!!')
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