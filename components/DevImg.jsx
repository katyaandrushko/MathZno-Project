import Image from 'next/image'

const DevImg = ({ containerStyles, imgSrc }) => {
   return (
      <div className={`${containerStyles}`}>
         <Image src={imgSrc} priority alt="" width={410} height={400} />
      </div>
   )
}

export default DevImg
