import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { id } = req.query

  try {
    const volunteers = await prisma.volunteer.findMany()
    const emails = volunteers.map((volunteer) => volunteer.email)
    res.status(200).json(emails)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  } finally {
    await prisma.$disconnect()
  }
}
