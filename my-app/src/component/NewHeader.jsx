import React from 'react';

class NewHeader extends React.Component{
    render(){
        return(
            <>

            <div>


            <header>
    {/* <div className=""> */}

    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <strong class="sl-main-header__logo">
               <a href="index-2.html"><img src="assets/images/main-logo.png" alt="Logo" /></a>
            </strong>

    <div class="collapse navbar-collapse sl-navigation" id="slMainNavbar">
                            <ul class="navbar-nav mr-auto sl-navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="aboutus.html">About</a>
                                </li>
                            

                            </ul>
                        </div>



      <div className="d-flex sl-user sl-userdropdown">
      <li className="nav-item dropdown">
      <a href="/">
          <img src="assets/images/insight/user-img.jpg" alt=" Description" />
              <span class="sl-user__description dropdown-toggle sl-navactive menu-item-has-mega-menu"><em class="d-block">Evening!</em>Stephnie</span>
                 {/* <i class="ti-angle-down"></i> */}
                        </a>
          {/* <a className="nav-link dropdown-toggle sl-navactive menu-item-has-mega-menu" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a> */}
          <ul className="dropdown-menu sl-usermenu" aria-labelledby="navbarScrollingDropdown">

          <li>
                                <a href="dashboard-insight.html">
                                    <i class="ti-dashboard"></i><span>Insights</span>
                                </a>
                            </li>
                            <li>
                                <a href="dashboard-insight.html">
                                    <i class="ti-dashboard"></i><span>Insights</span>
                                </a>
                            </li>
            {/* <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li> */}
          </ul>
        </li>
      </div>
    </div>
</nav>
</header>




























            {/* <header>

    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <strong class="sl-main-header__logo">
               <a href="index-2.html"><img src="assets/images/main-logo.png" alt="Logo" /></a>
            </strong>

    <div class="collapse navbar-collapse sl-navigation" id="slMainNavbar">
                            <ul class="navbar-nav mr-auto sl-navbar-nav">
                                <li class="nav-item sl-navactive menu-item-has-mega-menu">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="aboutus.html">About</a>
                                </li>
                            

                            </ul>
                        </div>



      <div className="d-flex">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            {/* <li><hr className="dropdown-divider" /></li> 
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </div>
    </div>
</nav>
</header> */}

            </div>
            </>
        )
    }
}

export default NewHeader;