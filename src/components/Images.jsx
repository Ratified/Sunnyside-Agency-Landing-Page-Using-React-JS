import milkbottles from '../images/desktop/image-gallery-milkbottles.jpg';
import orange from '../images/desktop/image-gallery-orange.jpg';
import cone from '../images/desktop/image-gallery-cone.jpg';
import sugarcubes from '../images/desktop/image-gallery-sugarcubes.jpg';

const Images = () => {
  return (
    <section className="images" id="images">
        <picture>
            <source media="(max-width: 650px)" srcset={milkbottles} />
            <img src={milkbottles} alt="MilkBottles Image" />
        </picture>
        <picture>
            <source media="(max-width: 650px)" srcset={orange} />
            <img src={orange} alt="Orange Image" />
        </picture>
        <picture>
            <source media="(max-width: 650px)" srcset={cone} />
            <img src={cone} alt="Gallery Cone Image" />
        </picture>
        <picture>
            <source media="(max-width: 650px)" srcset={sugarcubes} />
            <img src={sugarcubes} alt="Sugarcubes Image" />
        </picture>
    </section>
  )
}

export default Images
