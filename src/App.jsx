
import './App.css'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills/Skills.jsx'
import Services from './components/Services/Services.jsx'
import Container from './components/Container.jsx'
import Testimonials from './components/Testimonials.jsx'
import Hire from './components/Hire.jsx'

import Figma from './components/Skills/Figma.png'
import Node from './components/Skills/Node.png'
import Python from './components/Skills/Python.png'
import Reactlogo from './components/Skills/React.png'
import Sketch from './components/Skills/Sketch.png'
import Adobe from './components/Skills/AdobePhotoshop.png'

import Desinging from './components/Services/Designing.png'
import Photoshop from './components/Services/Photoshop.png'
import WebDevelopment from './components/Services/WebDevelopment.png'

function App() {

  return (
    <>
    <Home/>
    {/* Skills */}
    <Container title={'Skills'} subtitle={'My Top Skills'} isback={true}>
    <div className='pb-36 px-36 flex flex-row flex-wrap gap-4 bg-none justify-center w-screen h-max'>
      <Skills logo={Figma} name={'Figma'}/>
      <Skills logo={Node} name={'Node JS'}/>
      <Skills logo={Adobe} name={'Adobe Photoshop'}/>
      <Skills logo={Reactlogo} name={'React JS'}/>
      <Skills logo={Sketch} name={'Sketch'}/>
      <Skills logo={Python} name={'Python'}/>
      </div>
    </Container>
    {/* Services */}
    <Container title={'Services'} subtitle={'WHAT I OFFER'}>
    <div className=' pb-36 mt-10 flex flex-row flex-wrap  gap-4 bg-none justify-center w-screen h-max'>
    <Services title={'Web Development'} image={WebDevelopment}/>
    <Services title={'UI/UX Designing'} image={Desinging}/>
    <Services title={'PhotoShop Editing'} image={Photoshop}/>
    </div>
    </Container>
    {/* Projects */}
    <Container title={'Projects'} subtitle={'My Top Skills'} isback={true}>
    <Projects/>
    </Container>
    {/* Testimonials */}
    <Container title={'Testimonials'} subtitle={'My Top Skills'}>
    <Testimonials/>
    </Container>
    {/* Projects */}
    <Container title={'Hire Me'} subtitle={'My Top Skills'} isback={true}>
    <Hire/>
    </Container>
    {/* Contact */}
    <Container title={'Contact Me'} subtitle={'My Top Skills'} isback={true} istextcolor={true} defaultback='bg-blue-950' >
    <Contact/>
    </Container>
 

    </>
  )
}

export default App
