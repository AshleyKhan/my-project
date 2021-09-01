import React from 'react';

class Register extends React.Component{

    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
      };
    render(){
        return(
            <>
             <div>

            {/* <!-- MAIN START --> */}
    <main className="sl-main sl-register-main">
        <div className="sl-registerfixed">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sl-register-holder">
                            <div className="sl-registerarea">
                                <div className="sl-registersignarea">
                                    <div className="sl-registersignarea__title">
                                        <h3>Signup For Free</h3>
                                    </div>
                                    <ul className="nav sl-registertabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="sl-signupcustomer" data-toggle="tab" href="#signupcustomer" role="tab" aria-selected="true">
                                                <span><i className="fa fa-check" onClick={this.handleClick}></i></span>
                                                <h4><em>Signup as</em>
                                                </h4>
                                               <i className="ti-info-alt toltip-content" data-tipso="Custome"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="sl-signupprovider" data-toggle="tab" href="#signupprovider" role="tab" aria-selected="false">
                                                <span><i className="fa fa-check" onClick={this.handleClick}></i></span>
                                                <h4><em>Login as</em>
                                                </h4>
                                                <i className="ti-info-alt toltip-content" data-tipso="Provider"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content sl-signup" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="signupcustomer" role="tabpanel" aria-labelledby="sl-signupcustomer">
                                            <form className="sl-formtheme sl-signupform">
                                                <fieldset>
                                                    <div className="sl-signupform-wrap">
                                                        <div className="form-group">
                                                            <input type="text" name="email" value="" className="form-control sl-form-control" placeholder="Email*" required="" />
                                                        </div>
                                                        <div className="form-group form-group-half">
                                                            <input type="text" name="name" value="" className="form-control sl-form-control" placeholder="First Name*" required="" />
                                                        </div>
                                                        <div className="form-group form-group-half">
                                                            <input type="text" name="name" value="" className="form-control sl-form-control" placeholder="Last Name*" required="" />
                                                        </div>
                                                        
                                                        <div className="form-group form-group-half">
                                                            <input type="password" name="password" value="" className="form-control sl-form-control" placeholder="Password*" required="" />
                                                        </div>
                                                        <div className="form-group form-group-half">
                                                            <input type="password" name="password" value="" className="form-control sl-form-control" placeholder="Retype Password*" required="" />
                                                        </div>
                                                        <div className="form-group sl-btnarea">
                                                            <div className="sl-checkbox">
                                                                <input id="terms" type="checkbox" name="category" />
                                                                <label for="terms">
                                                                    <span>I agree to <a href="/">Terms and Conditions</a></span>
                                                                </label>
                                                            </div>
                                                            <button type="submit" className="btn sl-btn">Signup</button>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                        <div className="tab-pane fade" id="signupprovider" role="tabpanel" aria-labelledby="sl-signupprovider">
                                            <form className="sl-formtheme sl-signupform">
                                                <fieldset>
                                                    <div className="sl-signupform-wrap">
                                                     
                                                        <div className="form-group">
                                                            <input type="text" name="email" value="" className="form-control sl-form-control" placeholder="Email*" required="" />
                                                        </div>
                                                       
                                                       
                                                        <div className="form-group form-group-half">
                                                            <input type="password" name="password" value="" className="form-control sl-form-control" placeholder="Password*" required="" />
                                                        </div>
                                                       
                                                        <div className="form-group sl-btnarea">
                                                            <div className="sl-checkbox">
                                                                <input id="terms2" type="checkbox" name="category" />
                                                                <label for="terms2">
                                                                    <span>I agree to <a href="/">Terms and Conditions</a></span>
                                                                </label>
                                                            </div>
                                                            <button type="submit" className="btn sl-btn">Signup</button>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div> 
                                    </div>
                                    
                                    {/* <div className="sl-oroption">
                                        <span>or</span>
                                    </div>
                                    <div className="sl-loginicon">
                                        <ul>
                                            <li><a href="/" className="sl-facebookbox"><i className="fab fa-facebook-f"></i>Signup via facebook</a></li>
                                            <li><a href="/" className="sl-googlebox"><i className="fab fa-google"></i>Signup via google</a></li>
                                        </ul>
                                    </div> */}
                                </div>
                                <div className="sl-registerarea__terms">
                                    <p>By signing up you agree to these <a href="/">Terms &amp; Conditions</a> &amp; consent to <a href="/"> Cookie Policy &amp; Privacy Policy.</a></p>
                                </div>
                                <div className="sl-registerarea__footer">
                                    <p> Already a member? <a href="index-2.html"> Sigin Now</a></p>
                                </div>
                            </div>
                            <div className="sl-registercontent">
                                <figure className="sl-registercontent__img">
                                    <img src="assets/images/register/img-01.jpg" alt="Description" />
                                    <figcaption>
                                        <strong className="sl-registerlogo">
                                            <a href="index-2.html"><img src="assets/images/register/logo.png" alt=" Description" /></a>
                                        </strong>
                                        <div className="sl-registertitle">
                                            <h4>We’re Spreading Day by Day</h4>
                                            <h2>Join Our Growing Team</h2>
                                        </div>
                                        <div className="sl-descritpion">
                                            <p>Consectetur adipisicing elit sed dotiane eiusmod tempor incididunt utna labore etnalorale magna aliqua enim adman minim veniam quis nostrud exerciteon ullamco.</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
     {/* <!-- MAIN END --> */}
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
    <script src="js/vendor/countdown.js"></script>
    <script src="js/vendor/backgroundstretch.js"></script>
    <script src="js/main.js"></script>
    <script>$.backstretch("assets/images/register/main-bg.jpg");</script>
            </div> 


            </>

        )
    }
}

export default Register;