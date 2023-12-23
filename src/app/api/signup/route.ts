import { prisma } from '@sahayeta/app/lib'
import { SHA256 } from 'crypto-js'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const hashPassword = (password: string) => {
    return SHA256(password).toString()
  }

  try {
    const user = await req.json()

    // Check if the user already exists
    const existingUser = await prisma.user.findFirst({
      where: { email: user.email }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 }
      )
    }

    // If the user doesn't exist, create a new user
    const { email, password } = user
    const hashedPassword = hashPassword(password)

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    })

    return NextResponse.json(newUser)
  } catch (error) {
    console.error('Error parsing JSON:', error)
    return NextResponse.json(
      { message: 'Invalid JSON in request body' },
      { status: 400 }
    )
  }
}
