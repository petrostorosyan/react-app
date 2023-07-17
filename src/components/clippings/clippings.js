import BuildPortfolio from './build-portfolio/build-portfolio';
import css from'./clippings.module.css';
import Footer from './footer/footer';
import ClippingHeader from './heading/heading';
import HowItWorks from './how-does-it-work/how-it-works';
import PortfolioContent from './portfolio/portfolio';
import ProudWork from './proud-work/proud-work';
import Recommended from './recommended/recommended';
import WhyHost from './why-host/why-host';
import WritingPortfolio from './writing-portfolio/writing-portfolio';

const Clippings = () => {
    return (
        <div className={css.clippingsContainer}>
            <ClippingHeader />
            <PortfolioContent />
            <WhyHost />
            <HowItWorks /> 
            <BuildPortfolio />
            <Recommended />
            <WritingPortfolio />
            <ProudWork />
            <Footer />
        </div>
    )
}


export default Clippings;