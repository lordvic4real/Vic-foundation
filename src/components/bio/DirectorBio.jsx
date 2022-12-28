import React from 'react'
import styled from 'styled-components'

const DirectorBio = () => {
  return (
    <Container>
        <div className='info'>
            <div className=''>1</div>
            <div className=''>
                <h1>about the founder</h1>
                <p>
     Amb. Zubair Nasiru Temidire (OMOBA) a native of Osi Ekiti LG Kwara State. 
     Born on the 2nd of February 1992 to a Royal Family of OLOSI Ile-Ohun, ALOWOLODU of OLOSI OF
      OSI KWARA STATE. Own Certificate in Financial Management Technology Advanced, NCE in 
      Business Education, Bsc. Ed. Economics University of Abuja. Founder/CEO of Voice of
       the Voiceless Foundation, Omoba Integrated services Limited, Former SSA Media 
       & Publicity NYCSRF Nigeria Youth Hq Abuja, Member Global Citizen, Member UN1FY,
        Certified Global Media Campaigners (GMC/FGM) Champion Walk to End FGM Naija 2021,
         Member World Youth Forum, Member African Youth Forum, Peace Ambassador and Former
          Coordinator of North Central under Youth Crisis Awareness Peace Forum of Nigeria,
           Serve as volunteers with local and international organizations, and earn Awards as 
           Best Intern Students Niger State House of Assembly 2016, Best YOSA Speaker 2014,
            Best Vice President NAOS Hq 2018, Best PRO Nakss 2019, Best Ag. Secretary NAEKS 2017,
             Best Chief Organizer of the Year AMSISOVE COE Minna 2017, Author of Osi the Ancient Town 
             in kwara state 2019. AIESEC 
     Participant Youth Speak 2014. And many certificate of excellence and awards.
     </p>
            </div>
        </div>

    </Container>
  )
}

export default DirectorBio

const Container = styled.div `
  .info{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding: 40px 5%;
    min-height: 400px;
  }   
 


`