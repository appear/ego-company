import { Wedding, InvitationType } from '$types/wedding'

import IntroCard from './IntroCard'
import GreetingsCard from './GreetingsCard'
import FamilyRelationCard from './FamilyRelationCard'
import Gallery from './Gallery'

interface PinkThemeProps {
  wedding: Wedding
  invitationType?: InvitationType
}

function PinkTheme({ wedding, invitationType }: PinkThemeProps) {
  const {
    bride,
    bridegroom,
    location,
    date,
    image: { intro, gallery },
    message: { greetings },
    parents,
  } = wedding
  return (
    <>
      <IntroCard
        bride={bride}
        bridegroom={bridegroom}
        location={location}
        date={date}
        image={intro}
      />
      <GreetingsCard
        bride={bride}
        bridegroom={bridegroom}
        message={greetings}
      />
      <FamilyRelationCard
        bride={bride}
        bridegroom={bridegroom}
        parents={parents}
      />
      <Gallery images={gallery} />
    </>
  )
}

export default PinkTheme
