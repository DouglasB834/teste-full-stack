import logo from "../../public/assets/logo.png";
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";

export const dataFooter = [
  {
    description: [
      {
        logo: logo,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. sobre a ideia ",
        links: [
          {
            img: BiLogoInstagramAlt,
          },
          {
            img: BsFacebook,
          },
          {
            img: AiFillTwitterCircle,
          },
        ],
      },
    ],
  },
  {
    company: [
      {
        title: "Company",
        links: [
          {
            id: "menu",
            text: "Menu",
          },
          {
            id: "aboutUs",
            text: "About Us",
          },
          {
            id: "howitworks",
            text: "How it Works",
          },
        ],
      },
    ],
  },
  {
    Policy: [
      {
        title: "Policy",
        texts: ["Privacy Policy", "FAQ", "Shopping"],
      },
    ],
  },
  {
    "Get In Touch": ["Get In Touch", "+55 21 98300-3101", "food@example.com"],
  },
];
