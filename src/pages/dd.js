<Carousel
showThumbs={false}
showStatus={false}
showArrows={false}
showIndicators={false}
selectedItem={currentImageIndex}
onChange={(index) => setCurrentImageIndex(index)}
onClickItem={() => closeCarousel()}
useKeyboardArrows={true}
infiniteLoop={true}
stopOnHover={false}
swipeable={true}
emulateTouch={true}
centerMode={true}
centerSlidePercentage={100}
isOpen={isCarouselOpen}
>
{photos.map((photo, index) => (
  <div key={index} className="carousel-item">
    <img src={photo} alt={`VS${index + 1}`} />
  </div>
))}
</Carousel>