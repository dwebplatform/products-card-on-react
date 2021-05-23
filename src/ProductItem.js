import "./product.css";

export const ProductItem = ({ className }) => {
  const finalClass = [className, "product-card"].join(" ");
  return (
    <div className={finalClass}>
      <div className="product-card__image-wrapper">
        <img
          alt="product-card"
          className="product-card__image"
          src="https://sun9-8.userapi.com/impg/Et39jZVy-Xa9KBiSgSpy2CrMLYDW2vSeJUVtdg/Ll5PVs_ioIU.jpg?size=390x220&quality=96&sign=990f033250e6f33557ee7010fe04bc0a&type=album"
        />
      </div>
      <p className="product-card__name">3D Direction Aware Image Slider</p>
      <p className="product-card__description">
        Want a really slick 3D image slider with some really impressive
        direcion-aware hover effect ? Have
      </p>
      <span className="product-card__read-more">READ MORE</span>
      <div className="product-card__other">
        <a className="product-card__other__item">3d</a>
        <a className="product-card__other__item">direcion aware</a>
        <a className="product-card__other__item">epic</a>
        <a className="product-card__other__item">hover animation</a>
        <a className="product-card__other__item">image effects</a>
        <a className="product-card__other__item">image slider</a>
      </div>
    </div>
  );
};
