import Section1BG from "../assets/Innovation-amico.svg"
import Section2BG from "../assets/Outer space-cuate.svg"
import SectionItem from "./SectionItem"

const MainSection = () => {
  return (
    <section className='bg-white container-fluid main-outter mx-auto'>
      <SectionItem
        className='section-1'
        image={Section1BG}
        title='Bringing your ideas to life'
        subtitle='100% Guaranteed satisfaction'
        link='https://twitch.tv/'
        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, recusandae.
            non cumque dolor tempora laborum libero, recusandae illum magnam ratione?'
      />
      <SectionItem
        className='section-2'
        image={Section2BG}
        title='Bringing your ideas to life'
        subtitle='100% Guaranteed satisfaction'
        link='https://twitch.tv/'
        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, recusandae.
            non cumque dolor tempora laborum libero, recusandae illum magnam ratione?'
      />
    </section>
  )
}

export default MainSection
