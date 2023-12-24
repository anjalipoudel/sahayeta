import { prisma } from '@sahayeta/app/lib'
import { SHA256 } from 'crypto-js'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const hashPassword = (password: string) => {
    return SHA256(password).toString()
  }
  try {
    const user = await req.json()
    if (!user.email || !user.password) {
      throw new Error('Incomplete login data')
    }
    const userLogin = await prisma.user.findFirst({
      where: { email: user.email }
    })
    if (userLogin && userLogin.password === hashPassword(user.password)) {
      delete userLogin.password
      return NextResponse.json(userLogin, { status: 200 })
    }
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 404 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'POST Error', error: error.message },
      { status: 500 }
    )
  }
}
