import { connectToDatabase } from '@/lib/db'
import { toast } from 'react-toastify'

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return
  }

  const { email } = req.body

  if (!email) {
    toast.error('Wrong Information.')
    res.status(422).json({
      message: 'Please insert email.',
    })
    client.close()
    return
  }

  const client = await connectToDatabase()

  const db = client.db()

  const result = await db.collection('users').deleteOne({ email: email })

  res.status(201).json({ message: 'Profile deleted!', success: true })
  client.close()
}
