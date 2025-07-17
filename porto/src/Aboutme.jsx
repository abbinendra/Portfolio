import './Aboutme.css'
import { useEffect, useRef, useState } from 'react';

export default function Aboutme(){
    const progRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        setAnimate(entry.isIntersecting);
      });
    },
    { threshold: 0.3 }
  );

  if (progRef.current) {
    observer.observe(progRef.current);
  }

  return () => {
    if (progRef.current) {
      observer.unobserve(progRef.current);
    }
  };
}, []);

    return(
        <div className="aboutme">
            <div className='abmbox'>
                <span className='abmhead'>About Me</span>
                <ul className='abmtxt'>
                    <li className='lugafont'>I am a passionate <span className='highlighter'>BCA student</span> , with hands-on experience in building responsive web applications using <span className='highlighter'> React.js</span></li>
                    <li className='lugafont'>Also actively exploring cloud technologies and practicing <span className='highlighter'>Data structures and algorithms</span> , alongside college.</li>
                    <li className='lugafont'> Driven and future-focused, my ultimate goal is to work at Google.</li>
                </ul>
                <div className='abmgrphics'>
                    <div className='ambprgrs' ref={progRef}>
                        <div className='pg'>Html & Css - <div className="progress progress1 bg1">
                            <div className={`progress-value ${animate ? 'progress-value1' : ''}`}></div>
                        </div></div>
                        <div className='pg'>JavaScript - <div className="progress progress2 bg2">
                            <div className={`progress-value ${animate ? 'progress-value2' : ''}`}></div>
                        </div></div>
                        <div className='pg'>React.js - <div className="progress progress3 bg3">
                            <div className={`progress-value ${animate ? 'progress-value3' : ''}`}></div>
                        </div></div>
                    </div>
                    <div className='divider'></div>
                    <div className='abmpoints'>
                        <span className='abmonotxt'><span className='abmno'>8</span><span className='notxt'>Total Projects</span></span>
                        <div className='abmonotxt'>
                          <p className='abmno'>1+</p><span className='notxt'>Years of Experience</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}