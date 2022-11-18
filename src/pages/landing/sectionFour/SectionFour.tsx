import './SectionFour.css'
import {motion} from 'framer-motion'
import {vynilsCategory} from './vynils'

// import {useNavigate} from 'react-router-dom'
const SectionFour = () => {

  // const navigate = useNavigate();

  const categoryHandler = (category: any):void => {
    // navigate(`/${category}`)
  }
  return (
    <div className='sectionFour-container'>
    <motion.a
      initial={{ opacity: 0, y: 0 }}
      whileInView={{
        opacity: 1,
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
      }}
      transition={{ duration: 1 }}
      style={{
        fontSize: "6rem",
        width: "max-content",
        margin: "0 auto",
      }}
      href="#section-three"
      id="arrow"
    >
      ↑
    </motion.a>
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className='sectionFour-content'>
    <h1 style={{color: '#fff', margin: 0, padding: 0, fontSize: "2.5rem"}}>Embrace the pure sound of vinyl</h1>
    <div className='sectionFour-category'>
      {vynilsCategory.map((category,i) =>{
        return <span onClick={categoryHandler} key={i}>{category}</span>
      })}
    </div>
    </motion.div>
    </div>
  )
}

export default SectionFour;
