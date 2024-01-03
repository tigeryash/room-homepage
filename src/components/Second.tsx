import aboutDark from '../assets/image-about-dark.jpg'
import aboutLight from '../assets/image-about-light.jpg'


export default function Second() {
  return (
    <>
        <section className='bot'>
            <article>
                <img className='bot-images' src={aboutDark} alt=''/>
            </article>
            <article className='bot-block'>
                <h2 className='bot-title'>
                    About our furniture
                </h2>
                <p className='bot-desc'>
                Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </article>
            <article>
                <img className="bot-images" src={aboutLight} alt=''/>
            </article>
        </section>
    </>
  )
}
