import spinner from '../../../public/img/spinner.gif'
import Image from 'next/image'

function Spinner() {
  return (
    <div className="w-100 mt-20 h-screen">
      <Image
        src={spinner}
        alt="Loading..."
        width={180}
        className="text-center mx-auto text-black"
      />
    </div>
  )
}

export default Spinner
