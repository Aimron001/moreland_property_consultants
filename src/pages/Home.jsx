import TopHeader from '../components/TopHeader'
import MainHeader from '../components/MainHeader'
import Hero from '../components/Hero'
import SlidingText from '../components/SlidingText'
import AboutUs from '../components/AboutUs'
import FeaturedProperties from '../components/FeaturedProperties'
import OurQualities from '../components/OurQualities'
import OurServices from '../components/OurServices'
import BlogsHighlight from '../components/BlogsHighlight'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'

export default function Home(){
    return(
        <>
            <div className="header-hero-container">
                <header>
                    <TopHeader />
                    <MainHeader />
                </header>            
                <Hero />
                <SlidingText />
            </div>
            
            <AboutUs />
            <FeaturedProperties />
            <OurQualities />
            <OurServices />
            <BlogsHighlight />
            <GetInTouch />
            <Footer />
        </>
    )
}