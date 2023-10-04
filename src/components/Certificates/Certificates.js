import React from 'react'
import { useState } from 'react'
import CertificateCards from './cards'
// import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import { Container, Wrapper, Title, Desc, CardContainer} from './Certificatestyle'

const certificates =[
    {
        id: 0,
        title :"Python Essential1",
        description :'by Cisco Networking Academy',
        image:'https://github.com/chetanpawar7/my_portfolio/blob/main/public/Photos/Python%20es1.jpeg?raw=true',
        tags:['python','oops'],
        link:'https://www.credly.com/badges/5c620add-e166-409e-b0bf-b690419aa809/linked_in_profile'
    },
    {
        id: 1,
        title :"Python Essential2",
        description :'by Cisco Networking Academy',
        image:'https://github.com/chetanpawar7/my_portfolio/blob/main/public/Photos/Python%20es2.jpeg?raw=true',
        tags:['python','oops'],
        link:'https://www.credly.com/badges/57b2ba35-58c6-48aa-8e4d-4d03ae352f19/linked_in_profile'
    },
    {
        id: 2,
        title :"Sql",
        description :'by HackerRank',
        image:'https://github.com/chetanpawar7/my_portfolio/blob/main/public/Photos/sql_certificate.jpeg?raw=true',
        tags:['Sql','Database'],
        link:'https://www.hackerrank.com/certificates/fd9ca4ecab23'
    },
    {
        id: 3,
        title :"Css",
        description :'by HackerRank',
        image:'https://github.com/chetanpawar7/my_portfolio/blob/main/public/Photos/Css_certificate.jpeg?raw=true',
        tags:['Css'],
        link:'https://www.hackerrank.com/certificates/591d598e78f5'
    },
    {
        id: 4,
        title :"C++",
        description :'by Spoken Tutorial',
        image:'https://github.com/chetanpawar7/my_portfolio/blob/main/public/Photos/Cpp_certificate.jpeg?raw=true',
        tags:['C++,OOPS'],
        link:''
    },
    {
        id: 5,
        title :"PHP & MYSQL",
        description :'by Spoken Tutorial',
        image:'https://github.com/chetanpawar7/my_portfolio/blob/main/public/Photos/PHP_certificate.jpeg?raw=true',
        tags:['PHP,MYSQL'],
        link:''
    }
]
function Certificates({openModal2,setOpenModal2}) {
    const [toggle, setToggle] = useState('all');
    
  return (
    <>
    <Container id="certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc>
          Here are my some Certificates
        </Desc>
        <CardContainer>
          {toggle === 'all' && certificates
            .map((certificate) => (
              <CertificateCards certificate={certificate} openModal2={openModal2} setOpenModal2={setOpenModal2}/>
            ))}
          {certificates
            .filter((item) => item.category == toggle)
            .map((certificate) => (
              <CertificateCards certificate={certificate} openModal2={openModal2} setOpenModal2={setOpenModal2}/>
            ))}
        </CardContainer>
        </Wrapper>
    </Container>
    </>
  )
}

export default Certificates