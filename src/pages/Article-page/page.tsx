
// import Article from "./article"
// import Hero from "./hero"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import NArticle from "./NewArticle"

const Page = () => {
  return (
    <div className="mt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className=" px-6"
      >
      {/* <UnderMaintenance/> */}
      <Navbar/>
      {/* <Hero/> */}
      {/* <Article/> */}
     <NArticle />
      </motion.div>
    </div>
  )
}

export default Page