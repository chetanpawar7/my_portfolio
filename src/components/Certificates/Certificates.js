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
        image:'https://media.licdn.com/dms/image/D4D22AQEDvAZe8KBtUw/feedshare-shrink_2048_1536/0/1692527698042?e=1697673600&v=beta&t=aMadpsYhjBvGPzqigbY5Q02eobjANjil0XQaa4ZhI84',
        tags:['python','oops'],
        link:'https://www.credly.com/badges/5c620add-e166-409e-b0bf-b690419aa809/linked_in_profile'
    },
    {
        id: 1,
        title :"Python Essential2",
        description :'by Cisco Networking Academy',
        image:'https://media.licdn.com/dms/image/D4D22AQE_FcZDcVxgDg/feedshare-shrink_800/0/1692527752581?e=1697673600&v=beta&t=UWPKUbl0Sym2w9rvF_pSrsVnt5U2dVWABrKv2CA2f_A',
        tags:['python','oops'],
        link:'https://www.credly.com/badges/57b2ba35-58c6-48aa-8e4d-4d03ae352f19/linked_in_profile'
    },
    {
        id: 2,
        title :"Sql",
        description :'by HackerRank',
        image:'/images/sql_cert.jpg',
        tags:['Sql','Database'],
        link:'https://www.hackerrank.com/certificates/fd9ca4ecab23'
    },
    {
        id: 3,
        title :"Css",
        description :'by HackerRank',
        image:'images/css_cert.jpg',
        tags:['Css'],
        link:'https://www.hackerrank.com/certificates/591d598e78f5'
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