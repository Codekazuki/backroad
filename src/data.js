import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 1, href: "https://www.linkedin.com", icon: "fab fa-linkedin" },
];
export const servicesData = [
  {
    id: 1,
    message:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia ",
    icon: "fas fa-wallet fa-fw",
    text: "Saving Money",
  },
  {
    id: 2,
    message:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia ",
    icon: "fas fa-tree fa-fw",
    text: "endless hiking",
  },
  {
    id: 3,
    message:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia ",
    icon: "fas fa-socks fa-fw",
    text: "amazing comfort",
  },
];

export const tourData = [
  {
    id: 1,
    imag: tour1,
    date: "August 26th, 2020",
    title: "Tibet Adventure",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country: " China",
    text1: "6 days",
    text2: "From $2100",
  },
  {
    id: 2,
    imag: tour2,
    date: "October 26th, 2022",
    title: "Baraccuda Adventure",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime repre",
    icon: "fas fa-map",
    country: " Korea",
    text1: "5 days",
    text2: "From $3100",
  },
  {
    id: 3,
    imag: tour3,
    date: "October 5th, 2022",
    title: "Badagry Adventure",
    message:
      "Myself and david started it but lekan did not allow it to manifest because he is scared of water",
    icon: "fas fa-map",
    country: " Liberia",
    text1: "8 days",
    text2: "From $800",
  },
  {
    id: 4,
    imag: tour4,
    date: "October 5th, 2022",
    title: "Badagry Adventure",
    message:
      "Myself and david started it but lekan did not allow it to manifest because he is scared of water",
    icon: "fas fa-map",
    country: " Liberia",
    text1: "8 days",
    text2: "From $800",
  },
];
