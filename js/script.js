$('.carousel').slick({
    dots: true,
    slidesPerRow: 4,
    rows: 3,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesPerRow: 2,
        rows: 4,
      },
      breakpoint: 768,
      settings: {
        slidesPerRow: 1,
        rows: 1,
      },
    },          
  ]
});

