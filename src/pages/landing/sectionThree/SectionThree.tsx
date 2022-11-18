import './SectionThree.css'
import {motion} from 'framer-motion'

const SectionThree = () => {
  return (
    <div className='sectionThree-container'>
      <motion.a initial={{ opacity: 0, y: 0 }}
      whileInView={{
        opacity: 1,
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
      }}
      transition={{ duration: 1.5 }}
      style={{ fontSize: "6rem" }}
      href="#section-two"
      id="arrow">
      ↑
      </motion.a>
      <div style={{width: '100%'}} className='sectionThree-content'>
        <iframe frameBorder={0} height={380}
          src="https://giphy.com/embed/S2nZ8XQZcHkIvpwEhZ/video" width={380}></iframe>
          <iframe src="https://giphy.com/embed/hRAYRzdLvsvtatOltA" width={380} height={380} frameBorder={0}></iframe>
          <iframe src="https://giphy.com/embed/9uIHalS7eykJjhojkg" width={380} height={380} frameBorder={0}></iframe>
      </div>
      <motion.a initial={{ opacity: 0, y: 0 }}
      whileInView={{
        opacity: 1,
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
      }}
      transition={{ duration: 1.5 }}
      style={{ fontSize: "6rem" }}
      href="#section-four"
      id="arrow">
      ↓
      </motion.a>
    </div>
  )
}

export default SectionThree;
