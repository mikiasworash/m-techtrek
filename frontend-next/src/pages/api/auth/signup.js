import { hashPassword } from '@/lib/auth'
import { connectToDatabase } from '@/lib/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return
  }

  const data = req.body
  const { name, email, password, confirmPassword } = data

  if (!name || !email) {
    res.status(422).json({
      message: 'empty name or email',
    })
    client.close()
    return
  }

  if (!email.includes('@')) {
    res.status(422).json({
      message: 'invalid email',
    })
    client.close()
    return
  }

  if (!password || password.trim().length < 6) {
    res.status(422).json({
      message: 'password too short',
    })
    client.close()
    return
  }

  if (password !== confirmPassword) {
    res.status(422).json({
      message: 'password mismatch',
    })
    client.close()
    return
  }

  const client = await connectToDatabase()

  const db = client.db()

  const existingUser = await db.collection('users').findOne({ email: email })

  if (existingUser) {
    res.status(422).json({ message: 'User already exists!' })
    client.close()
    return
  }

  const hashedPassword = await hashPassword(password)

  const result = await db.collection('users').insertOne({
    name: name,
    email: email,
    role: 'user',
    password: hashedPassword,
    createdAt: Date.now(),
  })

  res.status(201).json({ message: 'User Created!' })
  client.close()
}
