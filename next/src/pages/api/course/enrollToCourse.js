import { connectToDatabase } from '@/lib/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return
  }

  const data = req.body

  const { userEmail, courseId } = data

  console.log(data)

  if (!userEmail || !courseId) {
    res.status(422).json({
      message: 'incomplete data',
      success: false,
    })
    return
  }

  const ObjectID = require('mongodb').ObjectId
  const course = new ObjectID(courseId)

  const client = await connectToDatabase()

  const db = client.db()

  const user = await db.collection('users').findOne({
    email: userEmail,
  })

  if (!user) {
    client.close()
    res.status(422).json({ message: 'invalid user', success: false })
    return
  }

  await db
    .collection('users')
    .updateOne({ _id: user._id }, { $push: { enrolledCourses: course } })

  res.status(201).json({ message: 'Enrolled to course!', success: true })
  client.close()
}
