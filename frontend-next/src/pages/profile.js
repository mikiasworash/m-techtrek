import UserProfile from '@/components/user-profile'
import { getSession } from 'next-auth/react'
import { connectToDatabase } from '@/lib/db'

function ProfilePage(props) {
  return <UserProfile user={props.user} />
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  } else {
    const sessionUser = session.user
    const client = await connectToDatabase()

    const usersCollection = client.db().collection('users')
    const user = await usersCollection.findOne({
      email: sessionUser.email,
    })
    client.close()

    return {
      props: {
        session,
        user: { name: user.name, email: user.email, role: user.role },
      },
    }
  }
}

export default ProfilePage
