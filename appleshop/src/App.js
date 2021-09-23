import leftBlackArrow from './assets/img/blackLeft.png';
import rightBlackArrow from './assets/img/blackRight.png';

import './App.css';
import TopProduct from './components/TopProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import BigCard from './components/BigCard';
import Slider from './components/Slider';


function App() {
    return (
        <div className="container">
            <Header/>
            <main className="main">
                <div className="inner">

                    <Slider/>


                    <section className="top">
                        <div className="title">
                            <div className="title-text">Топ &#128293;</div>
                            <div className="title-pick"/>
                        </div>
                        <div className="top-content">
                            <div className="lef-arrow">
                                <img src={leftBlackArrow} alt="arrow" className="left-pick"/>
                            </div>

                            <TopProduct price={325325346}/>
                            <TopProduct price={46436436}/>
                            <TopProduct price={374558}/>
                            <TopProduct price={46457547}/>
                            <TopProduct price={464754754757}/>
                            <div className="right-arrow">
                                <img src={rightBlackArrow} alt="arrow" className="right-pick"/>
                            </div>
                        </div>
                    </section>


                    <section className="catalog">
                        <div className="catalog-wrap">
                            <div className="catalog-title">
                                <div className="catalog-title-name">Товары</div>

                                <div className="catalog-filter"/>
                                <div className="sortPopup">
                                    <ul>
                                        <li className="active">
                                            <p>Цена</p>
                                        </li>
                                        <li>
                                            <p>Рейтинг</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="catalog-line">

                                <BigCard price={54756888}/>

                                <BigCard price={9967976}/>

                                <BigCard price={734645}/>

                                <BigCard price={4364643}/>

                            </div>
                            <div className="catalog-line">

                                <BigCard/>

                                <BigCard/>

                                <BigCard/>

                                <BigCard/>

                            </div>
                            <div className="catalog-button-wrap">
                                <button className="catalog-button cancel">Больше</button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer/>
        </div>
    );
}

export default App;
