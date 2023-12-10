
function News(){
    
    return (
        <div className="news">

        <h1 className="heading1"> Latest Travel News</h1>
        <hr className="bg"/>
        <div className="newsGrid">
    
          <div>
            <div className="newsGrid1">
    
              <div className="newsImages">
                <img src="/images/orvile.jpg" alt=""/>
              </div>
              <div className="text">
                <p>This popular destination will increase its tourist tax in 2024</p>
                <p className="color">13 october <span> <button className="btn2 bg">Read more</button></span></p>
              </div>
    
    
            </div>
            <div className="newsGrid1">
    
              <div className="newsImages">
                <img src="/images/orvile.jpg" alt=""/>
              </div>
              <div className="text">
                <p>This popular destination will increase its tourist tax in 2024</p>
                <p className="color">13 october <span> <button className="btn2 bg">Read more</button></span></p>
             </div>
         
     
         </div>
         <div className=" newsGrid1">
    
                      <div className="newsImages">
                        <img src="/images/orvile.jpg" alt=""/>
                      </div>
                      <div className="text">
                        <p>This popular destination will increase its tourist tax in 2024</p>
                        <p className="color">13 october <span> <button className="btn2 bg">Read more</button></span></p>
                      </div>
    
    
              </div>
              <div className="newsGrid1">
    
                <div className="newsImages">
                  <img src="/images/orvile.jpg" alt=""/>
                </div>
                <div className="text">
                  <p>This popular destination will increase its tourist tax in 2024</p>20 october
                  <p className="color">13 october <span> <button className="btn2 bg">Read more</button></span></p>
                </div>
    
    
              </div>
            </div>
            <div className="newsGrid2">
              <div className="newsImages2">
    
                <img src={"/images/indiagate.jpg"} alt="" className="newsImages3" />
                <div className="heading7">
                  <h1> Australia most famous attraction turns 50</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, vero fugiat! Quia officiis deleniti, cum
                    consectetur corrupti, at, sit voluptate dolorum dolore in voluptatibus quidem dolor aliquid officia
                    asperiores similique?</p>
                  <p> <a className="color" href="#">Read All Article <i className="fa-solid fa-arrow-right"></i> </a> </p>
                </div>
    
    
              </div>
    
    
            </div>
          </div>
        </div>
            


    )
}
export default News;