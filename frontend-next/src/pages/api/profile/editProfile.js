import { connectToDatabase } from '@/lib/db'
import { toast } from 'react-toastify'

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return
  }

  const data = req.body
  const { name, email, newEmail } = data

  if (!name) {
    toast.error('Please enter name!')
    res.status(422).json({
      message: 'Please insert name.',
    })
    client.close()
    return
  }

  if (!newEmail) {
    toast.error('Please enter email!')
    res.status(422).json({
      message: 'Please insert email.',
    })
    client.close()
    return
  }

  const client = await connectToDatabase()

  const db = client.db()

  if (email !== newEmail) {
    const existingUser = await db
      .collection('users')
      .findOne({ email: newEmail })

    if (existingUser) {
      toast.error('Email already exists!')
      res.status(422).json({
        message: 'Email already exists',
      })
      client.close()
      return
    }
  }

  const result = await db
    .collection('users')
    .updateOne({ email: email }, { $set: { name: name, email: newEmail } })

  res.status(201).json({ message: 'Profile Updated!' })
  client.close()
}
