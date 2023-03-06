import { connectToDatabase } from '@/lib/db'

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return
  }

  const data = req.body
  const { email, profilePic } = data

  if (!profilePic) {
    res.status(422).json({
      message: 'Please insert profile',
    })
    client.close()
    return
  }

  const client = await connectToDatabase()

  const db = client.db()

  const result = await db
    .collection('users')
    .updateOne({ email: email }, { $set: { profilePic: profilePic } })

  res.status(201).json({ message: 'Profile Updated!' })
  client.close()
}
