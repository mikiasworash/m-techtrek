import UserProfile from '@/components/user-profile'
import { getSession } from 'next-auth/react'

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
    const user = session.user

    return {
      props: {
        session,
        user,
      },
    }
  }
}

export default ProfilePage
