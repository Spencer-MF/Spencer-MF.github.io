const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add('inveiw');
		observer.unobserve(entry.target); // Stop observing after animating
	  }
	});
  });
  
  const elements = document.querySelectorAll('.animate');
  elements.forEach(element => {
	observer.observe(element);
  });