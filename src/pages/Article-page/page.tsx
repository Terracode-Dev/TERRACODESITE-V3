
// import Article from "./article"
// import Hero from "./hero"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import NArticle from "./NewArticle"

interface PageProps {
  // Slug of the article to display; omitted on /articles shows the default (first) article
  slug?: string
}

const Page = ({ slug }: PageProps) => {
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
     <NArticle slug={slug} />
      </motion.div>
    </div>
  )
}

export default Page