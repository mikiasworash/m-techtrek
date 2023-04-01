import { connectToDatabase } from '@/lib/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return
  }

  const data = req.body

  const {
    title,
    description,
    weeks,
    tuition,
    minimumSkill,
    scholarshipAvailable,
    bootcamp,
    user,
  } = data

  if (
    !title ||
    !description ||
    !weeks ||
    !tuition ||
    !minimumSkill ||
    !bootcamp ||
    !user
  ) {
    res.status(422).json({
      message: 'incomplete data',
      success: false,
    })
    return
  }

  const ObjectID = require('mongodb').ObjectId
  const bootcampId = new ObjectID(bootcamp)
  const userId = new ObjectID(user)

  const client = await connectToDatabase()

  const db = client.db()

  const result = await db.collection('courses').insertOne({
    title,
    description,
    weeks,
    tuition,
    minimumSkill,
    scholarshipAvailable,
    bootcamp: bootcampId,
    user: userId,
  })

  await db
    .collection('bootcamps')
    .updateOne(
      { _id: bootcampId },
      { $push: { associatedCourses: result.insertedId } }
    )

  res.status(201).json({ message: 'Course Added!', success: true })
  client.close()
}
