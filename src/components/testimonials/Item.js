import React from 'react'
import "./Testimonials.css";

const Item = () => {
  return (
    <div class="testimonials-section">

    <input type="radio" name="slider" title="slide1" class="slider__nav"/>
    <input type="radio" name="slider" title="slide2" class="slider__nav"/>
    <input type="radio" name="slider" title="slide3" class="slider__nav"/>
    <input type="radio" name="slider" title="slide4" class="slider__nav"/>
    <input type="radio" name="slider" title="slide5" class="slider__nav"/>
    
  <div className="slider__inner">
    <div className="slider__contents">
      <img src="https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg" alt="" />
      <p className="slider__txt">We love you guys. It's easy to order, we get shipments quick and my rep solves tough problems the right way. We get answers that work.</p>
      <h2 className="slider__caption">Rhonda | NylonCraft</h2>
    </div>
    <div className="slider__contents">
      <img src="https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg" alt="" />
      <p className="slider__txt">You all bend over backwards to get it done. Inside sales and the Account Managers are great! It's your service...you all know that it's not just about taking orders it's about service. Why do we choose you guys - your people, your prices, you're quick and you have a ton of technical knowledge.</p>
      <h2 className="slider__caption">Jared | Rexam</h2>
    </div>
    <div className="slider__contents">
      <img src="https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg" alt="" />
      <p className="slider__txt">It's the long-term relationship we have with Proheat that keeps me calling you guys. I trust you, you're quick, and everybody I've ever spoken to there are all great people. Our CEO, Bill, talks about building relationships. That's exactly what Proheat does, and I couldn't be happier.</p>
      <h2 className="slider__caption">Chris | C&M Fine Pack</h2>
    </div>
    <div class="slider__contents">
      <img src="https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg" alt="" />
      <p className="slider__txt">You answer my questions, always takes care of problems, and I never have a hassle.</p>
      <h2 className="slider__caption">Rex | LNP Engineering Plastics</h2>
    </div>
    <div className="slider__contents">
      <img src="https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg" alt="" />
      <p className="slider__txt">Proheat's staff are all so friendly and everybody goes above and beyond. Everyone is courteous, everything is quick and you get us what we need. I have to shop around for everything and we ALWAYS come back to Proheat.</p>
      <h2 className="slider__caption">Darlene | Russel Stover</h2>
    </div>
  </div>
</div>
  )
}

export default Item
