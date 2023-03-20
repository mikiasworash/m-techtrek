import UserProfile from '@/components/user-profile'
import { getSession, signOut } from 'next-auth/react'
import { connectToDatabase } from '@/lib/db'
import { toast } from 'react-toastify'

function ProfilePage(props) {
  if (!props.user) {
    toast.error('User not found. Try Sign Up first.')
    setTimeout(() => {
      signOut()
    }, 4000)
    return
  }
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

    if (!user) {
      return {
        props: {
          session,
          user: null,
        },
      }
    }

    return {
      props: {
        session,
        user: {
          name: user.name,
          email: user.email,
          role: user.role,
          profilePic: user.profilePic,
        },
      },
    }
  }
}

export default ProfilePage
