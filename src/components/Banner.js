import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import down from '../assets/img/down.png'
// import { ArrowRightCircle } from 'react-bootstrap-icons';

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Hey I'm Rajat", " A WebDeveloper", " A Programmer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(400 - Math.random() * 100);
  const period = 2000;
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    return () => { clearInterval(ticker) };
  }, [text])
  return (
    <div>
      <section className='banner' id='home'>
        <Container>
          <Row >
            <Col xs={12} md={10} xl={8}>
              {/* <span className='tagline'>Welcome Rajat Garg</span> */}
              <h1 className='text-center'><span style={{ visibility: 'hidden' }} >{` hey `}</span><span className='wrap'>{text}</span></h1>



            </Col>
            <Col xs={12} md={10} xl={9} className='text-center'>
              <p>I develop ideas and help build <br />a better world through software.</p>
              {/* <img src={} alt="poster"/> */}
              {/* <div>
              <button onClick={() => console.log("connect")} className='text-center btn btn-dark'>Let's Connect</button>
              </div> */}
            </Col>
          </Row>


          <div className='button'>
            <a href="https://publuu.com/flip-book/211346/507651" target='_blank'><button  onClick={() => console.log("connect")} className='  btn btn-dark'>Resume </button>
            </a>
            
          </div>

        </Container>
      </section>

    </div>
  )
}



