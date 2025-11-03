import "../assets/css/serviceCard.css";

const ServiceCard = ({ title, description, image, cover, tags = [] }) => {
  return (
    <div className="service-card-container">
      <img src={image} alt={title} className="service-img" />

      <h1 className="service-title">{title}</h1>
      <p className="service-description">{description}</p>

      <div>
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>

      {cover && <img src={cover} alt="cover" className="cover" />}
    </div>
  );
};

export default ServiceCard;
