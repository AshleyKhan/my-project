import React from "react";

class Home extends React.Component{
    render(){
        return(
            <>
            <div>

              {/* <!-- Preloader Start --> */}
    {/* <div className="preloader-outer">
        <div className="sl-preloader-holder">
            <img src="assets/images/loader.png" alt="loader img" />
            <div className="sl-loader"></div>
        </div>
    </div> */}
    {/* <!-- Preloader End --> */}

    <header>
    {/* <div className=""> */}

    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <strong className="sl-main-header__logo">
               <a href="index-2.html"><img src="assets/images/main-logo.png" alt="Logo" /></a>
            </strong>
            {/* <div class="sl-main-header__lower">
                    <nav class="navbar-expand-lg">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#slMainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="lnr lnr-menu"></i>
                        </button>
                        <div class="collapse navbar-collapse sl-navigation" id="slMainNavbar">
                            <ul class="navbar-nav mr-auto sl-navbar-nav">
                                <li class="nav-item sl-navactive menu-item-has-mega-menu">
                                    <a class="nav-link" href="/">Home</a> </li>
                                    <li class="nav-item  menu-item-has-mega-menu">
                                        <a class="nav-link" href="/">About</a>
                                    </li>
                                    
                            </ul>
                        </div>  
                    </nav>
                   
                                
                </div> */}
                
    <div className="collapse navbar-collapse sl-navigation" id="slMainNavbar">
                            <ul className="navbar-nav mr-auto sl-navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="aboutus.html">About</a>
                                </li>
                            

                            </ul>
                        </div>



      <div className="d-flex sl-user sl-userdropdown">
      <li className="nav-item dropdown">
      {/* <a href="/">
          <img src="assets/images/insight/user-img.jpg" alt=" Description" />
              <span className="sl-user__description dropdown-toggle sl-navactive menu-item-has-mega-menu"><em className="d-block">Evening!</em>Stephnie</span>
                 <i className="ti-angle-down"></i> 
                        </a>
           <a className="nav-link dropdown-toggle sl-navactive menu-item-has-mega-menu" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a> */}

          <div className="sl-user sl-userdropdown float-right">
                        <a href="/">
                            <img src="assets/images/insight/user-img.jpg" alt=" Description" />
                                <span className="sl-user__description"><em className="d-block">Evening!</em>Stephnie</span>
                            <i className="ti-angle-down"></i>
                        </a>
                        <ul className="sl-usermenu">
                            <li>
                                <a href="dashboard-insight.html">
                                    <i className="ti-dashboard"></i><span>Profile</span>
                                </a>
                            </li>
                                <li>
                                <a href="dashboard-vendor.html">
                                    <i className="ti-shopping-cart"></i><span>Vendors</span>
                                </a>
                            </li>
                            {/* <li className="menu-item-has-children page_item_has_children">
                                <a href="/" className="sl-notification sl-noticolor1">
                                    <i className="ti-star"></i><span>Manage Appointments</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="dashboard-appointment-single.html">Appointment Single</a></li>
                                    <li><a href="dashboard-all-appointment.html">All Appointment</a></li>
                                    <li><a href="dashboard-manage-time-slots.html">Manage Time Slots</a></li>
                                    <li><a href="dashboard-manage-services.html">Manage Services &amp; Prices</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="dashboard-profile-settings.html">
                                    <i className="ti-user"></i><span>Profile Settings</span>
                                </a>
                            </li>
                            <li className="menu-item-has-children page_item_has_children">
                                <a href="/">
                                    <i className="ti-bookmark-alt"></i><span>Manage Articles</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="dashboard-article-list.html">Articles List</a></li>
                                    <li><a href="dashboard-add-new-article.html">Add New Articles</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="dashboard-inbox.html">
                                    <i className="ti-email"></i><span>inbox</span>
                                </a>
                            </li>
                            <li className="menu-item-has-children page_item_has_children">
                                <a href="/">
                                    <i className="ti-layers"></i><span>Packages &amp; Payouts</span>
                                </a>
                                <ul className="sub-menu">
                                    <li><a href="dashboard-buy-package.html">Packages</a></li>
                                    <li><a href="dashboard-all-payouts.html">Payouts</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="dashboard-my-favorites.html">
                                    <i className="ti-heart"></i><span>My Favorites</span>
                                </a>
                            </li>
                            <li>
                                <a href="dashboard-notifications.html">
                                    <i className="ti-bell"></i><span>Notifications</span>
                                </a>
                            </li>
                            <li className="sl-active">
                                <a href="dashboard-accountprivacy.html">
                                    <i className="ti-lock"></i><span>Account &amp; Privacy</span>
                                </a>
                            </li> */}
                            <li>
                                <a href="index-2.html">
                                    <i className="ti-key"></i><span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
          {/* <ul className="dropdown-menu sl-usermenu" aria-labelledby="navbarScrollingDropdown">

          <li>
                                <a href="dashboard-insight.html">
                                    <i className="ti-dashboard"></i><span>Insights</span>
                                </a>
                            </li>
                            <li>
                                <a href="dashboard-insight.html">
                                    <i className="ti-dashboard"></i><span>Insights</span>
                                </a>
                            </li>
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul> */}
        </li>
      </div>
    
    
    
   
    
    
    
    
    </div>
</nav>
</header>




{/* ***************************************************************************** */}
<section class="sl-main-section"><div class="container">
    <div class="sl-serviceProvider"><div class="sl-filters">
        <p><a href="/">All Categories</a><i class="ti-angle-right"></i>"Graphic Designer" (104,823 Results)</p>
<div class="sl-filters--sort"><h6>Sort By:</h6><div class="sl-filters--sort__content">
<div class="sl-filters--sort__match"><a href="/" class="btn sl-btn sl-prepend sl-match-active">Best Match</a>
<a href="/" class="btn sl-btn sl-append">Newest<i class="ti-arrows-vertical"></i></a></div><div class="sl-filters--sort__sortbtn"><a href="/" class="btn sl-btn sl-prepend">
<i class="ti-menu"></i></a><a href="/" class="btn sl-btn sl-btn-active sl-append"><i class="ti-layout-grid2"></i></a></div></div><div class="sl-input-group"><a href="/" id="sl-search" class="btn sl-btn sl-btn-active sl-advance-btn"><span>Search Now</span><span class="btn sl-btn sl-btn-active"><span class="sl-advance-icon"><i></i><i></i><i></i></span></span></a></div></div></div><div class="sl-serviceProvider__content"><div class="row"><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-01.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-01.jpg" alt="Description"></a><a href="/" class="sl-like"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></a></div><a href="/">Medical</a><h5><a href="/">A Place Where We Care Life</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1887 Feedback)</em></div><em>By: <a href="/">Life Care Clinic &amp; Hospital</a></em></div><div class="sl-slider__footer"><em>Leeds, UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-02.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-02.jpg" alt="Description"></a><a href="/" class="sl-like"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></a></div><a href="/">IT Services</a><h5><a href="/">Let’s Make Your Event Great</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1642 Feedback)</em></div><em>By: <a href="/">Triona Buckley</a></em></div><div class="sl-slider__footer"><em>Manchester, UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-03.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-03.jpg" alt="Description"></a><a href="/" class="sl-like sl-liked"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></a></div><a href="/">IT Services</a><h5><a href="/">We Plan, Manage and Enjoy</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1586  Feedback)</em></div><em>By: <a href="/">New York Conference Dude</a></em></div><div class="sl-slider__footer"><em>Birmingham, UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-04.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-04.jpg" alt="Description"></a><a href="/" class="sl-like sl-liked"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i></a></div><a href="/">IT Services</a><h5><a href="/">Give Your Day a New Start</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1485 Feedback)</em></div><em>By: <a href="/">Candice Krikorian</a></em></div><div class="sl-slider__footer"><em>Newcastle, UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-05.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-05.jpg" alt="Description"></a><a href="/" class="sl-like"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></a></div><a href="/">Handyman Services</a><h5><a href="/">We’re Professional Plumbers</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1242 Feedback)</em></div><em>By: <a href="/">Markus Wickman</a></em></div><div class="sl-slider__footer"><em>Sheffield , UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-06.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-06.jpg" alt="Description"></a><a href="/" class="sl-like"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></a></div><a href="/">DIY &amp; Lifestyle</a><h5><a href="/">Spread Love With Flowers</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1206 Feedback)</em></div><em>By: <a href="/">Love Sign - Flower Shop</a></em></div><div class="sl-slider__footer"><em>Southampton, UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-07.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-01.jpg" alt="Description"></a><a href="/" class="sl-like"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></a></div><a href="/">Medical</a><h5><a href="/">A Place Where We Care Life</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1887 Feedback)</em></div><em>By: <a href="/">Life Care Clinic &amp; Hospital</a></em></div><div class="sl-slider__footer"><em>Leeds, UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-08.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-02.jpg" alt="Description"></a><a href="/" class="sl-like"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></a></div><a href="/">IT Services</a><h5><a href="/">Let’s Make Your Event Great</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1642 Feedback)</em></div><em>By: <a href="/">Triona Buckley</a></em></div><div class="sl-slider__footer"><em>Manchester, UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-09.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-03.jpg" alt="Description"></a><a href="/" class="sl-like sl-liked"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></a></div><a href="/">IT Services</a><h5><a href="/">We Plan, Manage and Enjoy</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1586  Feedback)</em></div><em>By: <a href="/">New York Conference Dude</a></em></div><div class="sl-slider__footer"><em>Birmingham, UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-10.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-04.jpg" alt="Description"></a><a href="/" class="sl-like sl-liked"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i></a></div><a href="/">IT Services</a><h5><a href="/">Give Your Day a New Start</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1485 Feedback)</em></div><em>By: <a href="/">Candice Krikorian</a></em></div><div class="sl-slider__footer"><em>Newcastle, UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-11.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-05.jpg" alt="Description"></a><a href="/" class="sl-like"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></a></div><a href="/">Handyman Services</a><h5><a href="/">We’re Professional Plumbers</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1242 Feedback)</em></div><em>By: <a href="/">Markus Wickman</a></em></div><div class="sl-slider__footer"><em>Sheffield , UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div><div class="col-sm-6 col-lg-4 col-xl-3"><div class="sl-slider"><figure><a href="/"><img src="assets/images/index/service-provider/img-12.jpg" alt="Description"></a><a href="/"><img src="assets/images/index/service-provider/user-icon/img-06.jpg" alt="Description"></a><a href="/" class="sl-like"><i class="far fa-heart"></i></a></figure><div class="sl-slider__content"><div class="sl-slider__header"><div class="sl-slider__tags"><a href="/" class="sl-bg-red-orange">Featured</a><a href="/" class="sl-bg-green">Verified</a><a href="/" class="sl-slider__tags--dollar"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></a></div><a href="/">DIY &amp; Lifestyle</a><h5><a href="/">Spread Love With Flowers</a></h5><div class="sl-featureRating"><span class="sl-featureRating__stars"><span></span></span><em>(1206 Feedback)</em></div><em>By: <a href="/">Love Sign - Flower Shop</a></em></div><div class="sl-slider__footer"><em>Southampton, UK (<a href="/">Directions</a>)</em><div class="sl-shareHolder"><a href="/" class="slShareHolder"><i class="ti-more-alt"></i></a><div class="sl-shareHolder__option"><span>Share:</span><ul class="sl-socialicons"><li class="sl-facebook"><a href="/"><i class="fab fa-facebook-f"></i></a></li><li class="sl-twitter"><a href="/"><i class="fab fa-twitter"></i></a></li><li class="sl-youtube"><a href="/"><i class="fab fa-youtube"></i></a></li><li class="sl-instagram"><a href="/"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div></div></div><div class="sl-pagination"><div class="sl-pagination__button-left"><a class="btn sl-btn sl-btn-small" href="/"><span class="lnr lnr-chevron-left"></span></a></div><div class="sl-pagination__button-num"><a class="btn sl-btn sl-btn-small" href="/"><span>1</span></a><a class="btn sl-btn sl-btn-small sl-btn-active" href="/"><span>2</span></a><a class="btn sl-btn sl-btn-small" href="/"><span>3</span></a><a class="btn sl-btn sl-btn-small" href="/"><span>4</span></a><a class="btn sl-btn sl-btn-small" href="/"><span class="sl-more">...</span></a><a class="btn sl-btn sl-btn-small" href="/"><span>50</span></a></div><div class="sl-pagination__button-right"><a class="btn sl-btn sl-btn-small sl-btn-active" href="/"><span class="lnr lnr-chevron-right"></span></a></div></div></div></div></section>

   {/* <!-- BANNER START --> */}
    {/* <div className="sl-main-banner">
        <div id="slBannerOwl" className="owl-carousel owl-theme">
            <div className="item"><img src="assets/images/index/main-banner/img-01.jpg" alt=" Description" / /></div>
            <div className="item"><img src="assets/images/index/main-banner/img-02.jpg" alt=" Description" / /></div>
            <div className="item"><img src="assets/images/index/main-banner/img-03.jpg" alt=" Description" / /></div>
            <div className="item"><img src="assets/images/index/main-banner/img-04.jpg" alt=" Description" / /></div>
            <div className="item"><img src="assets/images/index/main-banner/img-05.jpg" alt=" Description" / /></div>
            <div className="item"><img src="assets/images/index/main-banner/img-06.jpg" alt=" Description" /></div>
            <div className="item"><img src="assets/images/index/main-banner/img-07.jpg" alt=" Description" /></div>
            <div className="item"><img src="assets/images/index/main-banner/img-08.jpg" alt=" Description" /></div>
        </div>  
        <div className="sl-main-banner__content">
            <h1><span>Search more than 10 million</span>Trendy Service Providers</h1>
            <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt utna labore etnalorale magna aliqua enim ad minim veniam quis nostrud exercite.</p>
            <div className="sl-main-banner__btn">
                <a href="/" className="btn sl-btn">Show All</a>
                <a href="/" className="btn sl-btn sl-btn-active">Buy Now</a>
            </div>
            <img src="assets/images/index/main-banner/img-01.png" alt=" Description" />
        </div>
</div> */}
    {/* <!-- BANNER END -->
    <!-- MAIN START --> */}
    <main className="sl-main">
        {/* <!-- CATEGORY START --> */}
        <section className="sl-main-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-8">
                        <div className="sl-sectionHead">
                            <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                                <h2>Most Visited Categories</h2>
                            </div>
                            <div className="sl-sectionHead__description">
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sl-category sl-row">
                    <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div className="sl-category__service">
                            <img src="assets/images/index/category/img-01.jpg" alt=" Description" />
                            <div className="sl-category__description">
                                <h5>Accounts & Audit</h5>
                                <span>12,568 Providers</span>
                            </div>
                            <a href="/" className="sl-category__icon"><i className="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div className="sl-category__service">
                            <img src="assets/images/index/category/img-02.jpg" alt=" Description" />
                            <div className="sl-category__description">
                                <h5>IT Services</h5>
                                <span>11,756 Providers</span>
                            </div>
                            <a href="/" className="sl-category__icon"><i className="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div className="sl-category__service">
                            <img src="assets/images/index/category/img-03.jpg" alt=" Description" />
                            <div className="sl-category__description">
                                <h5>Networking</h5>
                                <span>11,125 Providers</span>
                            </div>
                           <a href="/" className="sl-category__icon"><i className="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div className="sl-category__service">
                            <img src="assets/images/index/category/img-04.jpg" alt=" Description" />
                            <div className="sl-category__description">
                                <h5>Plumbing</h5>
                                <span>10,045 Providers</span>
                            </div>
                            <a href="/" className="sl-category__icon"><i className="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div className="sl-category__service">
                            <img src="assets/images/index/category/img-05.jpg" alt=" Description" />
                            <div className="sl-category__description">
                                <h5>Learning & Driver</h5>
                                <span>10,575 Providers</span>
                            </div>
                            <a href="/" className="sl-category__icon"><i className="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div className="sl-category__service">
                            <img src="assets/images/index/category/img-06.jpg" alt=" Description" />
                            <div className="sl-category__description">
                                <h5>Law & Finance</h5>
                                <span>9,245 Providers</span>
                            </div>
                            <a href="/" className="sl-category__icon"><i className="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div className="sl-category__service">
                            <img src="assets/images/index/category/img-07.jpg" alt=" Description" />
                            <div className="sl-category__description">
                                <h5>Medical</h5>
                                <span>9,421 Providers</span>
                            </div>
                            <a href="/" className="sl-category__icon"><i className="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div className="sl-category__service">
                            <img src="assets/images/index/category/img-08.jpg" alt=" Description" />
                            <div className="sl-category__description">
                                <h5>Handyman Services</h5>
                                <span>7,123 Providers</span>
                            </div>
                            <a href="/" className="sl-category__icon"><i className="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div className="sl-category__service">
                            <img src="assets/images/index/category/img-09.jpg" alt=" Description" />
                            <div className="sl-category__description">
                                <h5>Print & Publishing</h5>
                                <span>5,058 Providers</span>
                            </div>
                            <a href="/" className="sl-category__icon"><i className="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                    <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                        <div className="sl-category__service">
                            <img src="assets/images/index/category/img-10.jpg" alt=" Description" />
                            <div className="sl-category__description">
                                <h5>House Cleaning</h5>
                                <span>4,982 Providers</span>
                            </div>
                            <a href="/" className="sl-category__icon"><i className="ti-arrow-right"></i></a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <!-- CATEGORY END -->
        
        <!-- SERVICE PROVIDER START --> */}
        <section className="sl-main-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-8">
                        <div className="sl-sectionHead">
                            <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                                <h2>Top Service Provider</h2>
                            </div>
                            <div className="sl-sectionHead__description">
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slCategoryOwl" className="owl-carousel owl-theme sl-owl-nav">
                <div className="item">
                    <div className="sl-slider">
                        <figure>
                            <a href="/"><img src="assets/images/index/service-provider/img-01.jpg" alt=" Description" /></a>
                            <a href="/"><img src="assets/images/index/service-provider/user-icon/img-01.jpg" alt=" Description" /></a>
                            <a href="/" className="sl-like"><i className="far fa-heart"></i></a>
                        </figure>
                        <div className="sl-slider__content">
                            <div className="sl-slider__header">
                                <div className="sl-slider__tags">
                                    <a href="/" className="sl-bg-red-orange">Featured</a>
                                    <a href="/" className="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">Medical</a>
                                <h5><a href="/">A Place Where We Care Life</a></h5>
                                <div className="sl-featureRating">
                                    <span className="sl-featureRating__stars"><span></span></span>
                                    <em>(1887 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Life Care Clinic & Hospital</a></em>
                            </div>
                            <div className="sl-slider__footer">
                                <em>Leeds, UK (<a href="/">Directions</a>)</em>
                                <div className="sl-shareHolder">
                                    <a href="/" className="slShareHolder" ><i className="ti-more-alt"></i></a>
                                    <div className="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul className="sl-socialicons">
                                            <li className="sl-facebook"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="sl-twitter"><a href="/"><i className="fab fa-twitter"></i></a></li>
                                            <li className="sl-youtube"><a href="/"><i className="fab fa-youtube"></i></a></li>
                                            <li className="sl-instagram"><a href="/"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="sl-slider">
                        <figure>
                            <a href="/"><img src="assets/images/index/service-provider/img-02.jpg" alt=" Description" /></a>
                            <a href="/"><img src="assets/images/index/service-provider/user-icon/img-02.jpg" alt=" Description" /></a>
                           <a href="/" className="sl-like"><i className="far fa-heart"></i></a>
                        </figure>
                        <div className="sl-slider__content">
                            <div className="sl-slider__header">
                                <div className="sl-slider__tags">
                                    <a href="/" className="sl-bg-red-orange">Featured</a><a href="/" className="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">IT Services</a>
                                <h5><a href="/">Let’s Make Your Event Great</a></h5>
                                <div className="sl-featureRating">
                                    <span className="sl-featureRating__stars"><span></span></span>
                                    <em>(1642 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Triona Buckley</a></em>
                            </div>
                            <div className="sl-slider__footer">
                                <em>Manchester, UK (<a href="/">Directions</a>)</em>
                                <div className="sl-shareHolder">
                                    <a href="/" className="slShareHolder" ><i className="ti-more-alt"></i></a>
                                    <div className="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul className="sl-socialicons">
                                            <li className="sl-facebook"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="sl-twitter"><a href="/"><i className="fab fa-twitter"></i></a></li>
                                            <li className="sl-youtube"><a href="/"><i className="fab fa-youtube"></i></a></li>
                                            <li className="sl-instagram"><a href="/"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="sl-slider">
                        <figure>
                            <a href="/"><img src="assets/images/index/service-provider/img-03.jpg" alt=" Description" /></a>
                            <a href="/"><img src="assets/images/index/service-provider/user-icon/img-03.jpg" alt=" Description" /></a>
                            <a href="/" className="sl-like sl-liked"><i className="far fa-heart"></i></a>
                        </figure>
                        <div className="sl-slider__content">
                            <div className="sl-slider__header">
                                <div className="sl-slider__tags">
                                    <a href="/" className="sl-bg-red-orange">Featured</a><a href="/" className="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">IT Services</a>
                                <h5><a href="/">We Plan, Manage and Enjoy</a></h5>
                                <div className="sl-featureRating">
                                    <span className="sl-featureRating__stars"><span></span></span>
                                    <em>(1586  Feedback)</em>
                                </div>
                                <em>By: <a href="/">New York Conference Dude</a></em>
                            </div>
                            <div className="sl-slider__footer">
                                <em>Birmingham, UK (<a href="/">Directions</a>)</em>
                                <div className="sl-shareHolder">
                                    <a href="/" className="slShareHolder" ><i className="ti-more-alt"></i></a>
                                    <div className="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul className="sl-socialicons">
                                            <li className="sl-facebook"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="sl-twitter"><a href="/"><i className="fab fa-twitter"></i></a></li>
                                            <li className="sl-youtube"><a href="/"><i className="fab fa-youtube"></i></a></li>
                                            <li className="sl-instagram"><a href="/"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="sl-slider">
                        <figure>
                            <a href="/"><img src="assets/images/index/service-provider/img-04.jpg" alt=" Description" /></a>
                            <a href="/"><img src="assets/images/index/service-provider/user-icon/img-04.jpg" alt=" Description" /></a>
                            <a href="/" className="sl-like sl-liked"><i className="far fa-heart"></i></a>
                        </figure>
                        <div className="sl-slider__content">
                            <div className="sl-slider__header">
                                <div className="sl-slider__tags">
                                    <a href="/" className="sl-bg-red-orange">Featured</a><a href="/" className="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">IT Services</a>
                                <h5><a href="/">Give Your Day a New Start</a></h5>
                                <div className="sl-featureRating">
                                    <span className="sl-featureRating__stars"><span></span></span>
                                    <em>(1485 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Candice Krikorian</a></em>
                            </div>
                            <div className="sl-slider__footer">
                                <em>Newcastle, UK (<a href="/">Directions</a>)</em>
                                <div className="sl-shareHolder">
                                    <a href="/" className="slShareHolder" ><i className="ti-more-alt"></i></a>
                                    <div className="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul className="sl-socialicons">
                                            <li className="sl-facebook"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="sl-twitter"><a href="/"><i className="fab fa-twitter"></i></a></li>
                                            <li className="sl-youtube"><a href="/"><i className="fab fa-youtube"></i></a></li>
                                            <li className="sl-instagram"><a href="/"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="sl-slider">
                        <figure>
                            <a href="/"><img src="assets/images/index/service-provider/img-05.jpg" alt=" Description" /></a>
                            <a href="/"><img src="assets/images/index/service-provider/user-icon/img-05.jpg" alt=" Description" /></a>
                            <a href="/" className="sl-like"><i className="far fa-heart"></i></a>
                        </figure>
                        <div className="sl-slider__content">
                            <div className="sl-slider__header">
                                <div className="sl-slider__tags">
                                    <a href="/" className="sl-bg-red-orange">Featured</a><a href="/" className="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">Handyman Services</a>
                                <h5><a href="/">Professional Plumbers</a></h5>
                                <div className="sl-featureRating">
                                    <span className="sl-featureRating__stars"><span></span></span>
                                    <em>(1242 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Markus Wickman</a></em>
                            </div>
                            <div className="sl-slider__footer">
                                <em>Sheffield , UK (<a href="/">Directions</a>)</em>
                                <div className="sl-shareHolder">
                                    <a href="/" className="slShareHolder" ><i className="ti-more-alt"></i></a>
                                    <div className="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul className="sl-socialicons">
                                            <li className="sl-facebook"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="sl-twitter"><a href="/"><i className="fab fa-twitter"></i></a></li>
                                            <li className="sl-youtube"><a href="/"><i className="fab fa-youtube"></i></a></li>
                                            <li className="sl-instagram"><a href="/"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="sl-slider">
                        <figure>
                            <a href="/"><img src="assets/images/index/service-provider/img-06.jpg" alt=" Description" /></a>
                            <a href="/"><img src="assets/images/index/service-provider/user-icon/img-06.jpg" alt=" Description" /></a>
                            <a href="/" className="sl-like"><i className="far fa-heart"></i></a>
                        </figure>
                        <div className="sl-slider__content">
                            <div className="sl-slider__header">
                                <div className="sl-slider__tags">
                                    <a href="/" className="sl-bg-red-orange">Featured</a><a href="/" className="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">DIY & Lifestyle</a>
                                <h5><a href="/">Spread Love With Flowers</a></h5>
                                <div className="sl-featureRating">
                                    <span className="sl-featureRating__stars"><span></span></span>
                                    <em>(1206 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Love Sign - Flower Shop</a></em>
                            </div>
                            <div className="sl-slider__footer">
                                <em>Southampton, UK (<a href="/">Directions</a>)</em>
                                <div className="sl-shareHolder">
                                    <a href="/" className="slShareHolder" ><i className="ti-more-alt"></i></a>
                                    <div className="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul className="sl-socialicons">
                                            <li className="sl-facebook"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="sl-twitter"><a href="/"><i className="fab fa-twitter"></i></a></li>
                                            <li className="sl-youtube"><a href="/"><i className="fab fa-youtube"></i></a></li>
                                            <li className="sl-instagram"><a href="/"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="sl-slider">
                        <figure>
                            <a href="/"><img src="assets/images/index/service-provider/img-06.jpg" alt=" Description" /></a>
                            <a href="/"><img src="assets/images/index/service-provider/user-icon/img-06.jpg" alt=" Description" /></a>
                            <a href="/" className="sl-like"><i className="far fa-heart"></i></a>
                        </figure>
                        <div className="sl-slider__content">
                            <div className="sl-slider__header">
                                <div className="sl-slider__tags">
                                    <a href="/" className="sl-bg-red-orange">Featured</a><a href="/" className="sl-bg-green">Verified</a>
                                </div>
                                <a href="/">DIY & Lifestyle</a>
                                <h5><a href="/">Spread Love With Flowers</a></h5>
                                <div className="sl-featureRating">
                                    <span className="sl-featureRating__stars"><span></span></span>
                                    <em>(1206 Feedback)</em>
                                </div>
                                <em>By: <a href="/">Love Sign - Flower Shop</a></em>
                            </div>
                            <div className="sl-slider__footer">
                                <em>Southampton, UK (<a href="/">Directions</a>)</em>
                                <div className="sl-shareHolder">
                                    <a href="/" className="slShareHolder" ><i className="ti-more-alt"></i></a>
                                    <div className="sl-shareHolder__option">
                                        <span>Share:</span>
                                        <ul className="sl-socialicons">
                                            <li className="sl-facebook"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                            <li className="sl-twitter"><a href="/"><i className="fab fa-twitter"></i></a></li>
                                            <li className="sl-youtube"><a href="/"><i className="fab fa-youtube"></i></a></li>
                                            <li className="sl-instagram"><a href="/"><i className="fab fa-instagram"></i></a></li>
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
            <div className="sl-statsBanner">
                <div className="sl-overlay">
                    <div className="container">
                        <div id="counter" className="sl-stats sl-main-section">
                            <div className="sl-stats__content">
                                <i className="ti-face-smile"></i>
                                <div className="sl-stats__description">
                                    <h3 data-from="0" data-to="35125" data-speed="8000" data-refresh-interval="50">35,125</h3>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="sl-stats__content">
                                <i className="ti-user"></i>
                                <div className="sl-stats__description">
                                    <h3 data-from="0" data-to="12556" data-speed="8000" data-refresh-interval="50">12,556</h3>
                                    <p>Active Members</p>
                                </div>
                            </div>
                            <div className="sl-stats__content">
                                <i className="ti-shopping-cart"></i>
                                <div className="sl-stats__description">
                                    <h3 data-from="0" data-to="41856" data-speed="8000" data-refresh-interval="50">41,856</h3>
                                    <p>Products For Sale</p>
                                </div>
                            </div>
                            <div className="sl-stats__content">
                                <i className="ti-cup"></i>
                                <div className="sl-stats__description">
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
        {/* <section className="sl-main-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-8">
                        <div className="sl-sectionHead">
                            <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                                <h2>Price You Can Afford</h2>
                            </div>
                            <div className="sl-sectionHead__description">
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sl-packagePlan">
                    <div className="row">
                        <div className="col-md-6 col-xl-4">
                            <div className="sl-package">
                                <div className="sl-package__title">
                                    <img src="assets/images/index/packages/img-01.jpg" alt=" Description" />
                                    <h3>Basic Plan</h3>
                                    <em>Starter Plan For Newbie</em>
                                </div>
                                <div className="sl-package__deal sl-bg-blue">
                                    <div className="sl-package__price">
                                        <h3><sup>$</sup>37</h3>
                                        <p>\ Month</p>
                                    </div>
                                    <em>Includes all taxes*</em>
                                </div>
                                <div className="sl-package__footer">
                                    <ul className="sl-package__details">
                                        <li>
                                            <p>No. Of Offer To Post</p>
                                            <p>10</p>
                                        </li>
                                        <li>
                                            <p>No. Of Featured Jobs</p>
                                            <p className="sl-red-orange"><i className="ti-na"></i></p>
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
                                            <p className="sl-red-orange"><i className="ti-na"></i></p>
                                        </li>
                                        <li>
                                            <p>Free 07 Days Extension</p>
                                            <p className="sl-red-orange"><i className="ti-na"></i></p>
                                        </li>
                                    </ul>
                                    <a href="/" className="btn sl-btn">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="sl-package">
                                <div className="sl-package__title">
                                    <img src="assets/images/index/packages/img-02.jpg" alt=" Description" />
                                    <h3>Standard</h3>
                                    <em>Populor Plan For Professionals</em>
                                    <div className="sl-tag"><h6>Best Deal</h6></div>
                                </div>
                                <div className="sl-package__deal sl-bg-green">
                                    <div className="sl-package__price">
                                        <h3><sup>$</sup>79</h3>
                                        <p>\ Month</p>
                                    </div>
                                    <em>Includes all taxes*</em>
                                </div>
                                <div className="sl-package__footer">
                                    <ul className="sl-package__details">
                                        <li>
                                            <p>No. Of Offer To Post</p>
                                            <p>10</p>
                                        </li>
                                        <li>
                                            <p>No. Of Featured Jobs</p>
                                            <p className="sl-green"><i className="ti-check"></i></p>
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
                                            <p className="sl-red-orange"><i className="ti-na"></i></p>
                                        </li>
                                        <li>
                                            <p>Free 07 Days Extension</p>
                                            <p className="sl-green"><i className="ti-check"></i></p>
                                        </li>
                                    </ul>
                                    <a href="/" className="btn sl-btn">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="sl-package">
                                <div className="sl-package__title">
                                    <img src="assets/images/index/packages/img-01.jpg" alt=" Description" />
                                    <h3>Extended</h3>
                                    <em>Extended Plan For Managerial</em>
                                </div>
                                <div className="sl-package__deal sl-bg-red-orange">
                                    <div className="sl-package__price">
                                        <h3><sup>$</sup>199</h3>
                                        <p>\ Month</p>
                                    </div>
                                    <em>Includes all taxes*</em>
                                </div>
                                <div className="sl-package__footer">
                                    <ul className="sl-package__details">
                                        <li>
                                            <p>No. Of Offer To Post</p>
                                            <p>10</p>
                                        </li>
                                        <li>
                                            <p>No. Of Featured Jobs</p>
                                            <p className="sl-green"><i className="ti-check"></i></p>
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
                                            <p className="sl-green"><i className="ti-check"></i></p>
                                        </li>
                                        <li>
                                            <p>Free 07 Days Extension</p>
                                            <p className="sl-green"><i className="ti-check"></i></p>
                                        </li>
                                    </ul>
                                    <a href="/" className="btn sl-btn">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
       {/*  <!-- PACKAGES END -->
        <!-- FEEDBACK START --> */}
        {/* <section className="sl-feedbackBanner">
            <div className="sl-overlay">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-xl-8">
                            <div className="sl-sectionHead">
                                <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                                    <h2>Feedback That Matters</h2>
                                </div>
                                <div className="sl-sectionHead__description">
                                    <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="slFeedbackOwl" className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="sl-feedback">
                                <div className="sl-feedback__title">
                                    <img src="assets/images/index/feedback/user-icon/img-01.jpg" alt=" Description" />
                                    <div className="sl-feedback__title__text">
                                        <h5>Amenda Wigh</h5>
                                        <p><em>United Arab Emirates</em></p>
                                    </div>
                                </div>
                                <div className="sl-feedback__description">
                                    <p><em>“Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud”</em></p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="sl-feedback">
                                <div className="sl-feedback__title">
                                    <img src="assets/images/index/feedback/user-icon/img-02.jpg" alt=" Description" />
                                    <div className="sl-feedback__title__text">
                                        <h5>Stuart Loney</h5>
                                        <p><em>New york</em></p>
                                    </div>
                                </div>
                                <div className="sl-feedback__description">
                                    <p><em>“Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud”</em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
      {/*   <!-- FEEDBACK END -->
        <!-- FEATURED PRODUCTS START --> */}
        <section className="sl-main-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-8">
                        <div className="sl-sectionHead">
                            <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                                <h2>Featured Products</h2>
                            </div>
                            <div className="sl-sectionHead__description">
                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim adena minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sl-featuredProducts">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="sl-featuredProducts--post">
                                <figure>
                                    <img src="assets/images/index/featured-products/img-01.jpg" alt=" Description" />
                                    <figcaption>
                                        <div className="sl-slider__tags">
                                            <span className="sl-bg-red-orange">25% OFF</span>
                                        </div>
                                        <a href="/"><i className="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div className="sl-featuredProducts--post__content">
                                    <div className="sl-featuredProducts--post__title">
                                        <h6>Phanteks 614LTG special edition</h6>
                                    </div>
                                    <div className="sl-featuredProducts--post__price">
                                        <h5>$212.30</h5>
                                        <h6>$220.30</h6>
                                    </div>
                                    <div className="sl-featureRating">
                                        <span className="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Onfleek Gaming Zone</a></em>
                                    <button className="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="sl-featuredProducts--post">
                                <figure>
                                    <img src="assets/images/index/featured-products/img-02.jpg" alt=" Description" /> 
                                    <figcaption>
                                        <div className="sl-slider__tags">
                                            <span className="sl-bg-red-orange">10% OFF</span>
                                        </div>
                                        <a href="/" className="sl-liked"><i className="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div className="sl-featuredProducts--post__content">
                                    <div className="sl-featuredProducts--post__title">
                                        <h6>Linkwow 3 Outlet Power Strip</h6>
                                    </div>
                                    <div className="sl-featuredProducts--post__price">
                                        <h5>$12.19</h5>
                                        <h6>$19.99</h6>
                                    </div>
                                    <div className="sl-featureRating">
                                        <span className="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Techsol Bros.</a></em>
                                    <button className="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="sl-featuredProducts--post">
                                <figure>
                                    <img src="assets/images/index/featured-products/img-03.jpg" alt=" Description" />
                                    <figcaption>
                                        <div className="sl-slider__tags">
                                            <span className="sl-bg-red-orange">50% OFF</span>
                                        </div>
                                        <a href="/" className="sl-liked"><i className="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div className="sl-featuredProducts--post__content">
                                    <div className="sl-featuredProducts--post__title">
                                        <h6>Nub's Adventures Jailbreak</h6>
                                    </div>
                                    <div className="sl-featuredProducts--post__price">
                                        <h5>$26.40</h5>
                                        <h6>$30.50</h6>
                                    </div>
                                    <div className="sl-featureRating">
                                        <span className="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Catepilar Fleet</a></em>
                                    <button className="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="sl-featuredProducts--post">
                                <figure>
                                    <img src="assets/images/index/featured-products/img-04.jpg" alt=" Description" />
                                    <figcaption>
                                        <div className="sl-slider__tags">
                                            <span className="sl-bg-red-orange">12% OFF</span>
                                        </div>
                                        <a href="/"><i className="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div className="sl-featuredProducts--post__content">
                                    <div className="sl-featuredProducts--post__title">
                                        <h6>Kensington Contour 2.0 Backpack</h6>
                                    </div>
                                    <div className="sl-featuredProducts--post__price">
                                        <h5>$12.19</h5>
                                        <h6>$19.99</h6>
                                    </div>
                                    <div className="sl-featureRating">
                                        <span className="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Bags & Bags Co.</a></em>
                                    <button className="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="sl-featuredProducts--post">
                                <figure>
                                    <img src="assets/images/index/featured-products/img-05.jpg" alt=" Description" />
                                    <figcaption>
                                        <div className="sl-slider__tags">
                                            <span className="sl-bg-red-orange">25% OFF</span>
                                        </div>
                                        <a href="/"><i className="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div className="sl-featuredProducts--post__content">
                                    <div className="sl-featuredProducts--post__title">
                                        <h6>Digitus USB2.0 Serial Adapter</h6>
                                    </div>
                                    <div className="sl-featuredProducts--post__price">
                                        <h5>$8.50</h5>
                                        <h6>$19.99</h6>
                                    </div>
                                    <div className="sl-featureRating">
                                        <span className="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Connecto Zolio</a></em>
                                    <button className="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="sl-featuredProducts--post">
                                <figure>
                                    <img src="assets/images/index/featured-products/img-06.jpg" alt=" Description" />
                                    <figcaption>
                                        <div className="sl-slider__tags">
                                            <span className="sl-bg-red-orange">25% OFF</span>
                                        </div>
                                        <a href="/"><i className="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div className="sl-featuredProducts--post__content">
                                    <div className="sl-featuredProducts--post__title">
                                        <h6>Poppin Mouse Pad - Lime Green</h6>
                                    </div>
                                    <div className="sl-featuredProducts--post__price">
                                        <h5>$19.79</h5>
                                        <h6>$30.50</h6>
                                    </div>
                                    <div className="sl-featureRating">
                                        <span className="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Office Mentor</a></em>
                                    <button className="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="sl-featuredProducts--post">
                                <figure>
                                    <img src="assets/images/index/featured-products/img-07.jpg" alt=" Description" />
                                    <figcaption>
                                        <div className="sl-slider__tags">
                                            <span className="sl-bg-red-orange">50% OFF</span>
                                        </div>
                                        <a href="/"><i className="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div className="sl-featuredProducts--post__content">
                                    <div className="sl-featuredProducts--post__title">
                                        <h6>Fractal Design Define R6 PC Case</h6>
                                    </div>
                                    <div className="sl-featuredProducts--post__price">
                                        <h5>$171.51</h5>
                                        <h6>$180.99</h6>
                                    </div>
                                    <div className="sl-featureRating">
                                        <span className="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Die Hard Gaming</a></em>
                                    <button className="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="sl-featuredProducts--post">
                                <figure>
                                    <img src="assets/images/index/featured-products/img-08.jpg" alt=" Description" />
                                    <figcaption>
                                        <div className="sl-slider__tags">
                                            <span className="sl-bg-red-orange">12% OFF</span>
                                        </div>
                                        <a href="/" className="sl-liked"><i className="far fa-heart"></i></a>
                                    </figcaption>
                                </figure>
                                <div className="sl-featuredProducts--post__content">
                                    <div className="sl-featuredProducts--post__title">
                                        <h6>Thermaltake Pure ARGB Sync Case</h6>
                                    </div>
                                    <div className="sl-featuredProducts--post__price">
                                        <h5>$44.36</h5>
                                        <h6>$19.99</h6>
                                    </div>
                                    <div className="sl-featureRating">
                                        <span className="sl-featureRating__stars"><span></span></span>
                                        <em>(1887 Feedback)</em>
                                    </div>
                                    <em>By: <a href="/">Infloz Corporation</a></em>
                                    <button className="btn sl-btn">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
        
    {/*<!-- COMMUNITY START --> */}

<section>
    <div className="sl-community">
        <div className="sl-overlay">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="sl-community__content sl-main-section">
                            <div className="sl-community__description">
                                <h5>We’re Spreading Day by Day</h5>
                                <h2>Join Our Friendy Community</h2>
                                <p>Consectetur adipisicing elit sed dotiane eiusmod tempor incididunt utna labore etnalorale magna aliqua enim ad minim veniam quis nostrud exerciteon ullamco.</p>
                            </div>
                            <div className="sl-community__btn">
                                <a href="/" className="btn sl-btn sl-btn-active">Register Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/*  <!-- COMMUNITY END --> */}
        
        
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

export default Home;
