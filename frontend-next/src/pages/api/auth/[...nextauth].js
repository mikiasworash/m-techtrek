import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { verifyPassword } from '@/lib/auth'
import { connectToDatabase } from '@/lib/db'

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase()

        const usersCollection = client.db().collection('users')
        const user = await usersCollection.findOne({
          email: credentials.Loginemail,
        })
        if (!user) {
          client.close()
          throw new Error('No such user found')
        }

        const isValid = await verifyPassword(
          credentials.Loginpassword,
          user.password
        )
        if (!isValid) {
          client.close()
          throw new Error('Wrong Password')
        }

        client.close()
        return {
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
})
