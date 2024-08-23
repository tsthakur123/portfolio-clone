import Image from "next/image";

// Define props interface for the component
interface iconProps {
  isDarkMode: boolean; // Indicates whether dark mode is active
}

// SocialIcon component to render social media icons
const SocialIcon: React.FC<iconProps> = ({ isDarkMode }) => {

  // Array of icon data including paths for dark and light mode icons and alt text
  const iconData = [
    {
      id: 1,
      darkIcon: "/icons/Facebook-dark.svg", // Path to the dark mode Facebook icon
      lightIcon: "/icons/Facebook.svg",      // Path to the light mode Facebook icon
      altText: "fb",                        // Alt text for accessibility
    },
    {
      id: 2,
      darkIcon: "/icons/Twitter-dark.svg",  // Path to the dark mode Twitter icon
      lightIcon: "/icons/Twitter.svg",      // Path to the light mode Twitter icon
      altText: "twitter",                  // Alt text for accessibility
    },
    {
      id: 3,
      darkIcon: "/icons/Instagram-dark.svg", // Path to the dark mode Instagram icon
      lightIcon: "/icons/Instagram.svg",     // Path to the light mode Instagram icon
      altText: "instagram",                 // Alt text for accessibility
    },
    {
      id: 4,
      darkIcon: "/icons/Linkedin-dark.svg", // Path to the dark mode LinkedIn icon
      lightIcon: "/icons/Linkedin.svg",     // Path to the light mode LinkedIn icon
      altText: "linkedin",                 // Alt text for accessibility
    },
  ];

  return (
    <>
      {/* Map through iconData array and render Image components */}
      {iconData.map((icon) => (
        <Image
          key={icon.id}                            // Unique key for each image element
          src={isDarkMode ? icon.darkIcon : icon.lightIcon} // Choose icon based on dark mode status
          alt={icon.altText}                      // Alt text for each icon
          width={30}                              // Width of the icon
          height={30}                             // Height of the icon
          className="revealIcon opacity-0 scale-0 cursor-pointer transition-all"       // Styling and cursor for the icon
        />
      ))}
    </>
  );
};

export default SocialIcon;
