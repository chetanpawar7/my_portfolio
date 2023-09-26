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
        image:'https://media.licdn.com/dms/image/D4D2DAQGKVDQJ9IdgbQ/profile-treasury-image-shrink_800_800/0/1694671295364?e=1696215600&v=beta&t=X51ivqqgs9dfC3O4wz3HtcFGWJMtMGH99T7NmDofpJk',
        tags:['Sql','Database'],
        link:'https://www.hackerrank.com/certificates/fd9ca4ecab23'
    },
    {
        id: 3,
        title :"Css",
        description :'by HackerRank',
        image:'https://media.licdn.com/dms/image/D4D2DAQGSWsi24F_cWg/profile-treasury-image-shrink_800_800/0/1694671234872?e=1696215600&v=beta&t=JYAMfSyuWqaDst8FldrDuw8f1MH51pugmotMBf5U6QU',
        tags:['Css'],
        link:'https://www.hackerrank.com/certificates/591d598e78f5'
    },
    {
        id: 4,
        title :"C++",
        description :'by Spoken Tutorial',
        image:'https://media.licdn.com/dms/image/D4D2DAQH3C6ZU1wvAjA/profile-treasury-image-shrink_800_800/0/1695611444055?e=1696219200&v=beta&t=aVXa2QjVXwusiNrHe1b1NIPSXOLD3qPeDVSYeS-cZro',
        tags:['C++,OOPS'],
        link:''
    },
    {
        id: 5,
        title :"PHP & MYSQL",
        description :'by Spoken Tutorial',
        image:'https://media.licdn.com/dms/image/D4D2DAQGf0vrPde7FQQ/profile-treasury-image-shrink_800_800/0/1695611515211?e=1696219200&v=beta&t=VGU7ZzG00MEQVZc08lci2rqAdfafNvqR1qVFrf7C950',
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