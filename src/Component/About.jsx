import aboutImage from '../assets/image/about-image.png'

export const About = () => {

  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <div className="text-4xl font-medium">About Us</div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum laudantium quaerat non
            voluptas recusandae ullam nam, qui blanditiis.
            Natus magni quos, asperiores aut facilis perferendis
            suscipit placeat similique in laboriosam?
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum laudantium quaerat non
            voluptas recusandae ullam nam, qui blanditiis.
            Natus magni quos, asperiores aut facilis perferendis
            suscipit placeat similique in laboriosam?
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum laudantium quaerat non
            voluptas recusandae ullam nam, qui blanditiis.
            Natus magni quos, asperiores aut facilis perferendis
            suscipit placeat similique in laboriosam?
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum laudantium quaerat non
            voluptas recusandae ullam nam, qui blanditiis.
            Natus magni quos, asperiores aut facilis perferendis
            suscipit placeat similique in laboriosam?
          </p>

        </div>
        <div className="flex items-center justify-center">
          <img src={aboutImage} alt="" className='w-[550px] h-[550px] object-cover' />
        </div>
      </div>
    </div>
  )
}