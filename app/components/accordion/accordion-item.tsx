export default function AccordionItem({ title, content, isOpen, onClick} ) {
    return (
      <div className="ozgs-accordion__item">
        <button className={`ozgs-accordion__title ${isOpen ? 'open' : ''}`} onClick={onClick}>
          <h3>{title}</h3>
          <span className={`ozgs-accordion__arrow ${isOpen ? 'rotate-90' : 'rotate-270'}`}>
              <svg viewBox="0 0 532 532"><path fill="currentColor" d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"></path></svg>
          </span>
        </button>
        <div
          className={`ozgs-accordion__content ${isOpen ? 'open' : ''}`}
          style={{ maxHeight: isOpen ? '200px' : '0px' }}
        >
          <p>{content}</p>
        </div>
      </div>
    );
  };