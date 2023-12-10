function NewsLetter() {

    return (
        <div className="newsLetter">
            <div className="letterIcon">
                <i className="far fa-envelope-open" id="letterIcon"> </i>
             
            </div>
            <div className="subscribe">
                <p className="color">
                    Get the lestest new and offer
                </p>
                <h1>
                    Subscribe to our newsletter
                </h1>
            </div>
            <div className="subscribeInput">
                <input className="subscribeText color" type="text" placeholder="Enter Your Email Address"/>
                  <input  className="subscribeBtn bg colorWhite" type="button" value="Subscribe"/>
                </div>
            </div>

            )
}

export default NewsLetter