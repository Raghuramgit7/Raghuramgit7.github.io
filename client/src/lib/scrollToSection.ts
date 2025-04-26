export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Adjust this value based on the height of your navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
