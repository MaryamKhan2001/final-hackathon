import React from 'react'






import Header from './components/Header'
import Herosection from './components/Herosection'
import Editors from './components/Editors'
import Greencard from './components/Greencard'
import Couples from './components/Couples'
import FeaturedPosts from './components/Featuredpost'
import Shop from './components/Shop'
import PRODUCTUI from './productui/page'


const page = () => {
  return (
 <div>
<Header/>
<Herosection/>
<Editors/>
<PRODUCTUI/>
<Greencard/>
<Couples/>
<FeaturedPosts/>
<Shop/>
  </div>
  )
}

export default page

