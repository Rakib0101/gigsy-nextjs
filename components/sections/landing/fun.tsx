
import Image from 'next/image'
const Fun = () => {
    return (
        <div className="bg-gray-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-2xl md:text-5xl font-bold mb-12">BALLOONS ARE FUN. SHOPPING FOR THEM SHOULD BE. TOO.</p>
          <div className="flex justify-around gap-12 max-w-3xl mx-auto">
            <Image src="/images/logo.png" alt="JIGSY" width={103} height={30} />
            <Image src="/images/logo.png" alt="JIGSY" width={103} height={30} />
            <Image src="/images/logo.png" alt="JIGSY" width={103} height={30} />
          </div>
        </div>
      </div>
    )
}
export default Fun