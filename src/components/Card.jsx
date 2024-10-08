const Card = ({ icon, title, description, link }) => (
  <div className="rounded-3xl border-t border-color-1/30 p-6 shadow-cardShadow lg:p-8">
    <img src={icon} alt={title} className="size-12" />
    <h5 className="h5 py-4 text-color-2">{title}</h5>
    <p className="pb-4 text-color-2/80">{description}</p>
    <a href="/" className="underline underline-offset-2 hover:animate-pulse">
      {link}
    </a>
  </div>
);

export default Card;
