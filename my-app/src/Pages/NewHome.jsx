import React from "react";

class NewHome extends React.Component{
    render(){
        return(
            <>
            <div>
                    {/* <!-- Preloader Start --> */}
    {/* <div class="preloader-outer">
        <div class="sl-preloader-holder">
            <img src="assets/images/loader.png" alt="loader img" />
            <div class="sl-loader"></div>
        </div>
    </div> */}
    {/* <!-- Preloader End --> */}

   {/* <!-- BANNER START --> */}
    <div class="sl-main-banner">
        <div id="slBannerOwl" class="owl-carousel owl-theme">
            <div class="item"><img src="images/index/main-banner/img-01.jpg" alt=" Description" /></div>
            <div class="item"><img src="images/index/main-banner/img-02.jpg" alt=" Description" /></div>
            <div class="item"><img src="images/index/main-banner/img-03.jpg" alt=" Description" /></div>
            <div class="item"><img src="images/index/main-banner/img-04.jpg" alt=" Description" /></div>
            <div class="item"><img src="images/index/main-banner/img-05.jpg" alt=" Description" /></div>
            <div class="item"><img src="images/index/main-banner/img-06.jpg" alt=" Description" /></div>
            <div class="item"><img src="images/index/main-banner/img-07.jpg" alt=" Description" /></div>
            <div class="item"><img src="images/index/main-banner/img-08.jpg" alt=" Description" /></div>
        </div>  
        {/* <div class="sl-main-banner__content">
            <h1><span>Search more than 10 million</span>Trendy Service Providers</h1>
            <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt utna labore etnalorale magna aliqua enim ad minim veniam quis nostrud exercite.</p>
            <div class="sl-main-banner__btn">
                <a href="/" class="btn sl-btn">Show All</a>
                <a href="/" class="btn sl-btn sl-btn-active">Buy Now</a>
            </div> */}
            <img src="images/index/main-banner/img-01.png" alt=" Description" />
        </div>

    {/* <!-- BANNER END -->
    <!-- MAIN START --> */}
    <main class="sl-main">
        {/* <!-- CATEGORY START --> */}
        <section class="sl-main-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-xl-8">
                        <div class="sl-sectionHead">
                            <div class="sl-sectionHead__title sl-below-line sl-below-line__active">
                                <h2>Most Visited Categories</h2>
                            </div>
                            <div class="sl-sectionHead__description">
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sl-category sl-row">
                    <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div class="sl-category__service">
                            <img src="images/index/category/img-01.jpg" alt=" Description" />
                            <div class="sl-category__description">
                                <h5>Accounts & Audit</h5>
                                <span>12,568 Providers</span>
                            </div>
                            <a href="/" class="sl-category__icon"><i class="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div class="sl-category__service">
                            <img src="images/index/category/img-02.jpg" alt=" Description" />
                            <div class="sl-category__description">
                                <h5>IT Services</h5>
                                <span>11,756 Providers</span>
                            </div>
                            <a href="/" class="sl-category__icon"><i class="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div class="sl-category__service">
                            <img src="images/index/category/img-03.jpg" alt=" Description" />
                            <div class="sl-category__description">
                                <h5>Networking</h5>
                                <span>11,125 Providers</span>
                            </div>
                           <a href="/" class="sl-category__icon"><i class="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div class="sl-category__service">
                            <img src="images/index/category/img-04.jpg" alt=" Description" />
                            <div class="sl-category__description">
                                <h5>Plumbing</h5>
                                <span>10,045 Providers</span>
                            </div>
                            <a href="/" class="sl-category__icon"><i class="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div class="sl-category__service">
                            <img src="images/index/category/img-05.jpg" alt=" Description" />
                            <div class="sl-category__description">
                                <h5>Learning & Driver</h5>
                                <span>10,575 Providers</span>
                            </div>
                            <a href="/" class="sl-category__icon"><i class="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div class="sl-category__service">
                            <img src="images/index/category/img-06.jpg" alt=" Description" />
                            <div class="sl-category__description">
                                <h5>Law & Finance</h5>
                                <span>9,245 Providers</span>
                            </div>
                            <a href="/" class="sl-category__icon"><i class="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div class="sl-category__service">
                            <img src="images/index/category/img-07.jpg" alt=" Description" />
                            <div class="sl-category__description">
                                <h5>Medical</h5>
                                <span>9,421 Providers</span>
                            </div>
                            <a href="/" class="sl-category__icon"><i class="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div class="sl-category__service">
                            <img src="images/index/category/img-08.jpg" alt=" Description" />
                            <div class="sl-category__description">
                                <h5>Handyman Services</h5>
                                <span>7,123 Providers</span>
                            </div>
                            <a href="/" class="sl-category__icon"><i class="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div class="sl-category__service">
                            <img src="images/index/category/img-09.jpg" alt=" Description" />
                            <div class="sl-category__description">
                                <h5>Print & Publishing</h5>
                                <span>5,058 Providers</span>
                            </div>
                            <a href="/" class="sl-category__icon"><i class="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div class="sl-category__service">
                            <img src="images/index/category/img-10.jpg" alt=" Description" />
                            <div class="sl-category__description">
                                <h5>House Cleaning</h5>
                                <span>4,982 Providers</span>
                            </div>
                            <a href="/" class="sl-category__icon"><i class="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <!-- CATEGORY END -->
        <!-- COMMUNITY START --> */}

        <section>
            <div class="sl-community">
                <div class="sl-overlay">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-10">
                                <div class="sl-community__content sl-main-section">
                                    <div class="sl-community__description">
                                        <h5>We’re Spreading Day by Day</h5>
                                        <h2>Join Our Friendy Community</h2>
                                        <p>Consectetur adipisicing elit sed dotiane eiusmod tempor incididunt utna labore etnalorale magna aliqua enim ad minim veniam quis nostrud exerciteon ullamco.</p>
                                    </div>
                                    <div class="sl-community__btn">
                                        <a href="/" class="btn sl-btn sl-btn-active">Register Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       {/*  <!-- COMMUNITY END -->
        <!-- SERVICE PROVIDER START --> */}
        <section class="sl-main-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-xl-8">
                        <div class="sl-sectionHead">
                            <div class="sl-sectionHead__title sl-below-line sl-below-line__active">
                                <h2>Top Service Provider</h2>
                            </div>
                            <div class="sl-sectionHead__description">
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slCategoryOwl" class="owl-carousel owl-theme sl-owl-nav">
                <div class="item">
                    <div class="sl-slider">
                        <figure>
                            <a href="/"><img src="images/index/service-provider/img-01.jpg" alt=" Description" /></a>
                            <a href="/"><img src="images/index/service-provider/user-icon/img-01.jpg" alt=" Description" /></a>
                            <a href="/" class="sl-like"><i class="far fa-heart"></i></a>
                        </figure>
                        <div class="sl-slider__content">
                            <div class="sl-slider__header">
                                <div class="sl-slider__tags">
                                    <a href="/" class="sl-bg-red-orange">Featured</a>
                                    <a href="/" class="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">Medical</a>
                                <h5><a href="/">A Place Where We Care Life</a></h5>
                                <div class="sl-featureRating">
                                    <span class="sl-featureRating__stars"><span></span></span>
                                    <em>(1887 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Life Care Clinic & Hospital</a></em>
                            </div>
                            <div class="sl-slider__footer">
                                <em>Leeds, UK (<a href="/">Directions</a>)</em>
                                <div class="sl-shareHolder">
                                    <a href="/" class="slShareHolder" ><i class="ti-more-alt"></i></a>
                                    <div class="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul class="sl-socialicons">
                                            <li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                                            <li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li>
                                            <li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li>
                                            <li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="sl-slider">
                        <figure>
                            <a href="/"><img src="images/index/service-provider/img-02.jpg" alt=" Description" /></a>
                            <a href="/"><img src="images/index/service-provider/user-icon/img-02.jpg" alt=" Description" /></a>
                           <a href="/" class="sl-like"><i class="far fa-heart"></i></a>
                        </figure>
                        <div class="sl-slider__content">
                            <div class="sl-slider__header">
                                <div class="sl-slider__tags">
                                    <a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">IT Services</a>
                                <h5><a href="/">Let’s Make Your Event Great</a></h5>
                                <div class="sl-featureRating">
                                    <span class="sl-featureRating__stars"><span></span></span>
                                    <em>(1642 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Triona Buckley</a></em>
                            </div>
                            <div class="sl-slider__footer">
                                <em>Manchester, UK (<a href="/">Directions</a>)</em>
                                <div class="sl-shareHolder">
                                    <a href="/" class="slShareHolder" ><i class="ti-more-alt"></i></a>
                                    <div class="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul class="sl-socialicons">
                                            <li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                                            <li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li>
                                            <li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li>
                                            <li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="sl-slider">
                        <figure>
                            <a href="/"><img src="images/index/service-provider/img-03.jpg" alt=" Description" /></a>
                            <a href="/"><img src="images/index/service-provider/user-icon/img-03.jpg" alt=" Description" /></a>
                            <a href="/" class="sl-like sl-liked"><i class="far fa-heart"></i></a>
                        </figure>
                        <div class="sl-slider__content">
                            <div class="sl-slider__header">
                                <div class="sl-slider__tags">
                                    <a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">IT Services</a>
                                <h5><a href="/">We Plan, Manage and Enjoy</a></h5>
                                <div class="sl-featureRating">
                                    <span class="sl-featureRating__stars"><span></span></span>
                                    <em>(1586  Feedback)</em>
                                </div>
                                <em>By: <a href="/">New York Conference Dude</a></em>
                            </div>
                            <div class="sl-slider__footer">
                                <em>Birmingham, UK (<a href="/">Directions</a>)</em>
                                <div class="sl-shareHolder">
                                    <a href="/" class="slShareHolder" ><i class="ti-more-alt"></i></a>
                                    <div class="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul class="sl-socialicons">
                                            <li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                                            <li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li>
                                            <li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li>
                                            <li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="sl-slider">
                        <figure>
                            <a href="/"><img src="images/index/service-provider/img-04.jpg" alt=" Description" /></a>
                            <a href="/"><img src="images/index/service-provider/user-icon/img-04.jpg" alt=" Description" /></a>
                            <a href="/" class="sl-like sl-liked"><i class="far fa-heart"></i></a>
                        </figure>
                        <div class="sl-slider__content">
                            <div class="sl-slider__header">
                                <div class="sl-slider__tags">
                                    <a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">IT Services</a>
                                <h5><a href="/">Give Your Day a New Start</a></h5>
                                <div class="sl-featureRating">
                                    <span class="sl-featureRating__stars"><span></span></span>
                                    <em>(1485 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Candice Krikorian</a></em>
                            </div>
                            <div class="sl-slider__footer">
                                <em>Newcastle, UK (<a href="/">Directions</a>)</em>
                                <div class="sl-shareHolder">
                                    <a href="/" class="slShareHolder" ><i class="ti-more-alt"></i></a>
                                    <div class="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul class="sl-socialicons">
                                            <li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                                            <li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li>
                                            <li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li>
                                            <li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="sl-slider">
                        <figure>
                            <a href="/"><img src="images/index/service-provider/img-05.jpg" alt=" Description" /></a>
                            <a href="/"><img src="images/index/service-provider/user-icon/img-05.jpg" alt=" Description" /></a>
                            <a href="/" class="sl-like"><i class="far fa-heart"></i></a>
                        </figure>
                        <div class="sl-slider__content">
                            <div class="sl-slider__header">
                                <div class="sl-slider__tags">
                                    <a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">Handyman Services</a>
                                <h5><a href="/">Professional Plumbers</a></h5>
                                <div class="sl-featureRating">
                                    <span class="sl-featureRating__stars"><span></span></span>
                                    <em>(1242 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Markus Wickman</a></em>
                            </div>
                            <div class="sl-slider__footer">
                                <em>Sheffield , UK (<a href="/">Directions</a>)</em>
                                <div class="sl-shareHolder">
                                    <a href="/" class="slShareHolder" ><i class="ti-more-alt"></i></a>
                                    <div class="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul class="sl-socialicons">
                                            <li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                                            <li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li>
                                            <li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li>
                                            <li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="sl-slider">
                        <figure>
                            <a href="/"><img src="images/index/service-provider/img-06.jpg" alt=" Description" /></a>
                            <a href="/"><img src="images/index/service-provider/user-icon/img-06.jpg" alt=" Description" /></a>
                            <a href="/" class="sl-like"><i class="far fa-heart"></i></a>
                        </figure>
                        <div class="sl-slider__content">
                            <div class="sl-slider__header">
                                <div class="sl-slider__tags">
                                    <a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">DIY & Lifestyle</a>
                                <h5><a href="/">Spread Love With Flowers</a></h5>
                                <div class="sl-featureRating">
                                    <span class="sl-featureRating__stars"><span></span></span>
                                    <em>(1206 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Love Sign - Flower Shop</a></em>
                            </div>
                            <div class="sl-slider__footer">
                                <em>Southampton, UK (<a href="/">Directions</a>)</em>
                                <div class="sl-shareHolder">
                                    <a href="/" class="slShareHolder" ><i class="ti-more-alt"></i></a>
                                    <div class="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul class="sl-socialicons">
                                            <li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                                            <li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li>
                                            <li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li>
                                            <li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="sl-slider">
                        <figure>
                            <a href="/"><img src="images/index/service-provider/img-06.jpg" alt=" Description" /></a>
                            <a href="/"><img src="images/index/service-provider/user-icon/img-06.jpg" alt=" Description" /></a>
                            <a href="/" class="sl-like"><i class="far fa-heart"></i></a>
                        </figure>
                        <div class="sl-slider__content">
                            <div class="sl-slider__header">
                                <div class="sl-slider__tags">
                                    <a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">DIY & Lifestyle</a>
                                <h5><a href="/">Spread Love With Flowers</a></h5>
                                <div class="sl-featureRating">
                                    <span class="sl-featureRating__stars"><span></span></span>
                                    <em>(1206 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Love Sign - Flower Shop</a></em>
                            </div>
                            <div class="sl-slider__footer">
                                <em>Southampton, UK (<a href="/">Directions</a>)</em>
                                <div class="sl-shareHolder">
                                    <a href="/" class="slShareHolder" ><i class="ti-more-alt"></i></a>
                                    <div class="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul class="sl-socialicons">
                                            <li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                                            <li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li>
                                            <li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li>
                                            <li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       {/*  <!-- SERVICE PROVIDER END -->
        <!-- STATS START --> */}
        <section>
            <div class="sl-statsBanner">
                <div class="sl-overlay">
                    <div class="container">
                        <div id="counter" class="sl-stats sl-main-section">
                            <div class="sl-stats__content">
                                <i class="ti-face-smile"></i>
                                <div class="sl-stats__description">
                                    <h3 data-from="0" data-to="35125" data-speed="8000" data-refresh-interval="50">35,125</h3>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div class="sl-stats__content">
                                <i class="ti-user"></i>
                                <div class="sl-stats__description">
                                    <h3 data-from="0" data-to="12556" data-speed="8000" data-refresh-interval="50">12,556</h3>
                                    <p>Active Members</p>
                                </div>
                            </div>
                            <div class="sl-stats__content">
                                <i class="ti-shopping-cart"></i>
                                <div class="sl-stats__description">
                                    <h3 data-from="0" data-to="41856" data-speed="8000" data-refresh-interval="50">41,856</h3>
                                    <p>Products For Sale</p>
                                </div>
                            </div>
                            <div class="sl-stats__content">
                                <i class="ti-cup"></i>
                                <div class="sl-stats__description">
                                    <h3 data-from="0" data-to="14753" data-speed="8000" data-refresh-interval="50">14,753</h3>
                                    <p>Cup Of Coffee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       {/*  <!-- STATS END -->
        <!-- PACKAGES START --> */}
        <section class="sl-main-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-xl-8">
                        <div class="sl-sectionHead">
                            <div class="sl-sectionHead__title sl-below-line sl-below-line__active">
                                <h2>Price You Can Afford</h2>
                            </div>
                            <div class="sl-sectionHead__description">
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sl-packagePlan">
                    <div class="row">
                        <div class="col-md-6 col-xl-4">
                            <div class="sl-package">
                                <div class="sl-package__title">
                                    <img src="images/index/packages/img-01.jpg" alt=" Description" />
                                    <h3>Basic Plan</h3>
                                    <em>Starter Plan For Newbie</em>
                                </div>
                                <div class="sl-package__deal sl-bg-blue">
                                    <div class="sl-package__price">
                                        <h3><sup>$</sup>37</h3>
                                        <p>\ Month</p>
                                    </div>
                                    <em>Includes all taxes*</em>
                                </div>
                                <div class="sl-package__footer">
                                    <ul class="sl-package__details">
                                        <li>
                                            <p>No. Of Offer To Post</p>
                                            <p>10</p>
                                        </li>
                                        <li>
                                            <p>No. Of Featured Jobs</p>
                                            <p class="sl-red-orange"><i class="ti-na"></i></p>
                                        </li>
                                        <li>
                                            <p>Package Duration</p>
                                            <p>30 Days</p>
                                        </li>
                                        <li>
                                            <p>Best Freelancer Search</p>
                                            <p>Yes</p>
                                        </li>
                                        <li>
                                            <p>Professional Offer Template</p>
                                            <p class="sl-red-orange"><i class="ti-na"></i></p>
                                        </li>
                                        <li>
                                            <p>Free 07 Days Extension</p>
                                            <p class="sl-red-orange"><i class="ti-na"></i></p>
                                        </li>
                                    </ul>
                                    <a href="/" class="btn sl-btn">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="sl-package">
                                <div class="sl-package__title">
                                    <img src="images/index/packages/img-02.jpg" alt=" Description" />
                                    <h3>Standard</h3>
                                    <em>Populor Plan For Professionals</em>
                                    <div class="sl-tag"><h6>Best Deal</h6></div>
                                </div>
                                <div class="sl-package__deal sl-bg-green">
                                    <div class="sl-package__price">
                                        <h3><sup>$</sup>79</h3>
                                        <p>\ Month</p>
                                    </div>
                                    <em>Includes all taxes*</em>
                                </div>
                                <div class="sl-package__footer">
                                    <ul class="sl-package__details">
                                        <li>
                                            <p>No. Of Offer To Post</p>
                                            <p>10</p>
                                        </li>
                                        <li>
                                            <p>No. Of Featured Jobs</p>
                                            <p class="sl-green"><i class="ti-check"></i></p>
                                        </li>
                                        <li>
                                            <p>Package Duration</p>
                                            <p>30 Days</p>
                                        </li>
                                        <li>
                                            <p>Best Freelancer Search</p>
                                            <p>Yes</p>
                                        </li>
                                        <li>
                                            <p>Professional Offer Template</p>
                                            <p class="sl-red-orange"><i class="ti-na"></i></p>
                                        </li>
                                        <li>
                                            <p>Free 07 Days Extension</p>
                                            <p class="sl-green"><i class="ti-check"></i></p>
                                        </li>
                                    </ul>
                                    <a href="/" class="btn sl-btn">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="sl-package">
                                <div class="sl-package__title">
                                    <img src="images/index/packages/img-01.jpg" alt=" Description" />
                                    <h3>Extended</h3>
                                    <em>Extended Plan For Managerial</em>
                                </div>
                                <div class="sl-package__deal sl-bg-red-orange">
                                    <div class="sl-package__price">
                                        <h3><sup>$</sup>199</h3>
                                        <p>\ Month</p>
                                    </div>
                                    <em>Includes all taxes*</em>
                                </div>
                                <div class="sl-package__footer">
                                    <ul class="sl-package__details">
                                        <li>
                                            <p>No. Of Offer To Post</p>
                                            <p>10</p>
                                        </li>
                                        <li>
                                            <p>No. Of Featured Jobs</p>
                                            <p class="sl-green"><i class="ti-check"></i></p>
                                        </li>
                                        <li>
                                            <p>Package Duration</p>
                                            <p>30 Days</p>
                                        </li>
                                        <li>
                                            <p>Best Freelancer Search</p>
                                            <p>Yes</p>
                                        </li>
                                        <li>
                                            <p>Professional Offer Template</p>
                                            <p class="sl-green"><i class="ti-check"></i></p>
                                        </li>
                                        <li>
                                            <p>Free 07 Days Extension</p>
                                            <p class="sl-green"><i class="ti-check"></i></p>
                                        </li>
                                    </ul>
                                    <a href="/" class="btn sl-btn">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       {/*  <!-- PACKAGES END -->
        <!-- FEEDBACK START --> */}
        <section class="sl-feedbackBanner">
            <div class="sl-overlay">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-9 col-xl-8">
                            <div class="sl-sectionHead">
                                <div class="sl-sectionHead__title sl-below-line sl-below-line__active">
                                    <h2>Feedback That Matters</h2>
                                </div>
                                <div class="sl-sectionHead__description">
                                    <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="slFeedbackOwl" class="owl-carousel owl-theme">
                        <div class="item">
                            <div class="sl-feedback">
                                <div class="sl-feedback__title">
                                    <img src="images/index/feedback/user-icon/img-01.jpg" alt=" Description" />
                                    <div class="sl-feedback__title__text">
                                        <h5>Amenda Wigh</h5>
                                        <p><em>United Arab Emirates</em></p>
                                    </div>
                                </div>
                                <div class="sl-feedback__description">
                                    <p><em>“Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud”</em></p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="sl-feedback">
                                <div class="sl-feedback__title">
                                    <img src="images/index/feedback/user-icon/img-02.jpg" alt=" Description" />
                                    <div class="sl-feedback__title__text">
                                        <h5>Stuart Loney</h5>
                                        <p><em>New york</em></p>
                                    </div>
                                </div>
                                <div class="sl-feedback__description">
                                    <p><em>“Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud”</em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      {/*   <!-- FEEDBACK END -->
        <!-- FEATURED PRODUCTS START --> */}
        <section class="sl-main-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-xl-8">
                        <div class="sl-sectionHead">
                            <div class="sl-sectionHead__title sl-below-line sl-below-line__active">
                                <h2>Featured Products</h2>
                            </div>
                            <div class="sl-sectionHead__description">
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sl-featuredProducts">
                    <div class="row">
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="sl-featuredProducts--post">
                                <figure>
                                    <img src="images/index/featured-products/img-01.jpg" alt=" Description" />
                                    <figcaption>
                                        <div class="sl-slider__tags">
                                            <span class="sl-bg-red-orange">25% OFF</span>
                                        </div>
                                        <a href="/"><i class="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div class="sl-featuredProducts--post__content">
                                    <div class="sl-featuredProducts--post__title">
                                        <h6>Phanteks 614LTG special edition</h6>
                                    </div>
                                    <div class="sl-featuredProducts--post__price">
                                        <h5>$212.30</h5>
                                        <h6>$220.30</h6>
                                    </div>
                                    <div class="sl-featureRating">
                                        <span class="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Onfleek Gaming Zone</a></em>
                                    <button class="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="sl-featuredProducts--post">
                                <figure>
                                    <img src="images/index/featured-products/img-02.jpg" alt=" Description" /> 
                                    <figcaption>
                                        <div class="sl-slider__tags">
                                            <span class="sl-bg-red-orange">10% OFF</span>
                                        </div>
                                        <a href="/" class="sl-liked"><i class="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div class="sl-featuredProducts--post__content">
                                    <div class="sl-featuredProducts--post__title">
                                        <h6>Linkwow 3 Outlet Power Strip</h6>
                                    </div>
                                    <div class="sl-featuredProducts--post__price">
                                        <h5>$12.19</h5>
                                        <h6>$19.99</h6>
                                    </div>
                                    <div class="sl-featureRating">
                                        <span class="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Techsol Bros.</a></em>
                                    <button class="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="sl-featuredProducts--post">
                                <figure>
                                    <img src="images/index/featured-products/img-03.jpg" alt=" Description" />
                                    <figcaption>
                                        <div class="sl-slider__tags">
                                            <span class="sl-bg-red-orange">50% OFF</span>
                                        </div>
                                        <a href="/" class="sl-liked"><i class="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div class="sl-featuredProducts--post__content">
                                    <div class="sl-featuredProducts--post__title">
                                        <h6>Nub's Adventures Jailbreak</h6>
                                    </div>
                                    <div class="sl-featuredProducts--post__price">
                                        <h5>$26.40</h5>
                                        <h6>$30.50</h6>
                                    </div>
                                    <div class="sl-featureRating">
                                        <span class="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Catepilar Fleet</a></em>
                                    <button class="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="sl-featuredProducts--post">
                                <figure>
                                    <img src="images/index/featured-products/img-04.jpg" alt=" Description" />
                                    <figcaption>
                                        <div class="sl-slider__tags">
                                            <span class="sl-bg-red-orange">12% OFF</span>
                                        </div>
                                        <a href="/"><i class="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div class="sl-featuredProducts--post__content">
                                    <div class="sl-featuredProducts--post__title">
                                        <h6>Kensington Contour 2.0 Backpack</h6>
                                    </div>
                                    <div class="sl-featuredProducts--post__price">
                                        <h5>$12.19</h5>
                                        <h6>$19.99</h6>
                                    </div>
                                    <div class="sl-featureRating">
                                        <span class="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Bags & Bags Co.</a></em>
                                    <button class="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="sl-featuredProducts--post">
                                <figure>
                                    <img src="images/index/featured-products/img-05.jpg" alt=" Description" />
                                    <figcaption>
                                        <div class="sl-slider__tags">
                                            <span class="sl-bg-red-orange">25% OFF</span>
                                        </div>
                                        <a href="/"><i class="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div class="sl-featuredProducts--post__content">
                                    <div class="sl-featuredProducts--post__title">
                                        <h6>Digitus USB2.0 Serial Adapter</h6>
                                    </div>
                                    <div class="sl-featuredProducts--post__price">
                                        <h5>$8.50</h5>
                                        <h6>$19.99</h6>
                                    </div>
                                    <div class="sl-featureRating">
                                        <span class="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Connecto Zolio</a></em>
                                    <button class="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="sl-featuredProducts--post">
                                <figure>
                                    <img src="images/index/featured-products/img-06.jpg" alt=" Description" />
                                    <figcaption>
                                        <div class="sl-slider__tags">
                                            <span class="sl-bg-red-orange">25% OFF</span>
                                        </div>
                                        <a href="/"><i class="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div class="sl-featuredProducts--post__content">
                                    <div class="sl-featuredProducts--post__title">
                                        <h6>Poppin Mouse Pad - Lime Green</h6>
                                    </div>
                                    <div class="sl-featuredProducts--post__price">
                                        <h5>$19.79</h5>
                                        <h6>$30.50</h6>
                                    </div>
                                    <div class="sl-featureRating">
                                        <span class="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Office Mentor</a></em>
                                    <button class="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="sl-featuredProducts--post">
                                <figure>
                                    <img src="images/index/featured-products/img-07.jpg" alt=" Description" />
                                    <figcaption>
                                        <div class="sl-slider__tags">
                                            <span class="sl-bg-red-orange">50% OFF</span>
                                        </div>
                                        <a href="/"><i class="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div class="sl-featuredProducts--post__content">
                                    <div class="sl-featuredProducts--post__title">
                                        <h6>Fractal Design Define R6 PC Case</h6>
                                    </div>
                                    <div class="sl-featuredProducts--post__price">
                                        <h5>$171.51</h5>
                                        <h6>$180.99</h6>
                                    </div>
                                    <div class="sl-featureRating">
                                        <span class="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Die Hard Gaming</a></em>
                                    <button class="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="sl-featuredProducts--post">
                                <figure>
                                    <img src="images/index/featured-products/img-08.jpg" alt=" Description" />
                                    <figcaption>
                                        <div class="sl-slider__tags">
                                            <span class="sl-bg-red-orange">12% OFF</span>
                                        </div>
                                        <a href="/" class="sl-liked"><i class="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div class="sl-featuredProducts--post__content">
                                    <div class="sl-featuredProducts--post__title">
                                        <h6>Thermaltake Pure ARGB Sync Case</h6>
                                    </div>
                                    <div class="sl-featuredProducts--post__price">
                                        <h5>$44.36</h5>
                                        <h6>$19.99</h6>
                                    </div>
                                    <div class="sl-featureRating">
                                        <span class="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Infloz Corporation</a></em>
                                    <button class="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
        </main>
       {/*  <!-- FEATURED PRODUCTS END --> */}
    
   {/*  <!-- MAIN END --> */}
    
    <script src="js/vendor/jquery.min.js"></script>
    <script src="js/vendor/popper.min.js"></script>
    <script src="js/vendor/jquery-library.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/vendor/appear.js"></script>
    <script src="js/vendor/countTo.js"></script>
    <script src="js/vendor/gmap3.min.js"></script>
    <script src="js/vendor/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/vendor/select2.min.js"></script>
    <script src="js/vendor/readmore.js"></script>
    <script src="js/vendor/jquery-ui.js"></script>
    <script src="js/vendor/lightpick.js"></script>
    <script src="js/vendor/tipso.js"></script>
    <script src="js/vendor/owl.carousel.min.js"></script>
    <script src="js/vendor/jquery.ui.touch-punch.js"></script>
    <script src="js/main.js"></script>
            </div>

            </>
        )
    }
}

export default NewHome;