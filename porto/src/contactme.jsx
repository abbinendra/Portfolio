import './contactme.css'

export default function Contactme(){
    return (
        <div className="contactme">
            <div className="container">
                <p className='git'>Get in touch</p>
                <form action="https://formspree.io/f/xdkdnagp" method="POST">
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
                            </div>
                            <div className="col">
                                <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
                    <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
                </form>
            </div>
        </div>
    )
}