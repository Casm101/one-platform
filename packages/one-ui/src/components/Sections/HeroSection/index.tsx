import './styles.scss';

export interface HeroSectionProps {
  thing: string;
}

/**
 * User HeroSection component
 */
export const HeroSection = ({
  thing
}: HeroSectionProps) => {

  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))];

  // Get the width of the container
  const containerWidth = document.querySelector('.herosection-styled').clientWidth;

  // Create an invisible element with the same font properties
  let testElement = document.createElement('div');
  testElement.style.position = 'absolute';
  testElement.style.visibility = 'hidden';
  testElement.style.whiteSpace = 'nowrap';
  document.body.appendChild(testElement);

  let charCount = 0;
  while (testElement.clientWidth < containerWidth) {
    testElement.textContent += randomChar();
    charCount++;
  }

  // Clean up
  document.body.removeChild(testElement);

  const randomString = (length: number) => Array.from(Array(length)).map(randomChar).join("");

  return (
    <section className="herosection-styled">
      {randomString(charCount)}
      {thing}
    </section>
  );
};
