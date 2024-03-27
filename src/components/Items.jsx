import imageTransform from '../images/desktop/image-transform.jpg'
import imageStandOut from '../images/desktop/image-stand-out.jpg'
import graphicDesign from '../images/desktop/image-graphic-design.jpg'
import photography from '../images/desktop/image-photography.jpg'

const Items = () => {
  return (
    <section className="items">
        <div className="item">
            <div className="item__descriptionDiv">
                    <h2>Transform your brand</h2>
                    <p> We are a full-service creative agency specializing in helping brands grow fast. 
                        Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <a href="#">LEARN MORE</a>
            </div>
            <picture>
                <source media="(max-width: 500px)" srcSet={imageTransform} />
                <img src={imageTransform} alt="StandOut Image" />
            </picture>
        </div>

        <div className="item">
            <picture>
                <source media="(max-width: 500px)" srcset={imageStandOut} />
                <img src={imageStandOut} alt="StandOut Image" />
            </picture>
            <div class="item__descriptionDiv">
                <h2>Stand out to the right audience</h2>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
                </p>
                <a href="#">LEARN MORE</a>
            </div>
        </div>

        <div class="item item3">
            <div class="item__div">
                <picture>
                    <source media="(max-width: 500px)" srcset={graphicDesign} />
                    <img src={graphicDesign} alt="Graphics Design Image" />
                </picture>

                <div class="item__text design">
                    <h2>Graphic design</h2>
                    <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </div>
            </div>
            <div class="item__div">
                <picture>
                    <source media="(max-width: 500px)" srcset={photography} />
                    <img src={photography} alt="Photography Image" />
                </picture>

                <div class="item__text photography">
                    <h2>Photography</h2>
                    <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Items
