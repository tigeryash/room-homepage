import { useState } from 'react'
import arrow from '../assets/icon-arrow.svg'
import left from '../assets/icon-angle-left.svg'
import right from '../assets/icon-angle-right.svg'


const data = [
    {
        id: 1,
        title: 'Discover innovative ways to decorate',
        desc: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        mobile:"./images/mobile-image-hero-1.jpg",
        desktop:"./images/desktop-image-hero-1.jpg"
    },
    {
        id: 2,
        title: 'We are available all across the globe',
        desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        mobile:"./images/mobile-image-hero-2.jpg",
        desktop:"./images/desktop-image-hero-2.jpg"
    },
    {
        id: 3,
        title: 'Manufactured with the best materials',
        desc: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        mobile:"./images/mobile-image-hero-3.jpg",
        desktop:"./images/desktop-image-hero-3.jpg"
    }
]

export default function Page() {
    const [page, setPage] = useState(1)

    function nextPage(){
        if(page !== data.length){
            setPage(prevPage => prevPage + 1)
        }else if(page == data.length){
            setPage(1)
        }
    }

    function prevPage(){
        if(page == 1){
            setPage(3)
        }else if(page !== 1){
            setPage(prevPage => prevPage - 1)
        }
    }

  return (
    <>
        <section>
            {data.map((item, idx) => (
                <article className={page === idx + 1 ? 'top' : 'hide' } key={item.id}>
                    <div className='cover'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet={item.desktop} />
                            <img className='hero' src={item.mobile} alt={item.title} />
                        </picture>

                        <div className='button-container'>
                                <button 
                                    onClick={prevPage}
                                    className='buttons'>
                                    <img src={left} alt='' />
                                </button>
                                <button 
                                    onClick={nextPage}
                                    className='buttons'>
                                    <img src={right} alt=''/>
                                </button>
                            </div>
                    </div>
                
                    <div className='block'>
                        <h1 className='title'>{item.title}</h1>
                        <p className='desc-1'>{item.desc}</p>
                        <button className='shop'>Shop Now <img src={arrow} alt="" /></button>
                    </div>
                </article>
            ))}
        </section>
    </>
  )
}
