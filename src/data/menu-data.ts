import HomeSvg from "@/svg/HomeSvg";
import PeopleLogo from "@/svg/PeopleLogo";
import SettingSvg from "@/svg/SettingSvg";
import ProductIcon from "@/svg/Products";
import TeamIcon from "@/svg/TeamIcon";
import BlogIcon from "@/svg/BlogIcon";
import UserIcon from "@/svg/UserIcon";
import RefundIcon from "@/svg/RefundIcon";
import PdfIcon from "@/svg/PdfIcon";
import OrderIcon from "@/svg/OrderSvg";

interface MenuItem {
  id: number;
  text: string;
  icon: () => JSX.Element;
  link?: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  text: string;
  link: string;
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    text: "Asosiy",
    icon: HomeSvg,
    link: "/",
  },
  // {
  //   id: 2,
  //   text: "Hotel",
  //   icon: ProductIcon,
  //   submenu: [
  //     {
  //       text: "Hamma mehmonxonalar",
  //       link: "/services",
  //     },
  //     {
  //       text: "Mehmonxona qo'sish",
  //       link: "/create-service",
  //     },
  //   ],
  // },

  {
    id: 7,
    text: "Katalog",
    icon: BlogIcon,
    submenu: [
      {
        text: "Kataloglar",
        link: "/categories",
      },
      {
        text: "Katalog Yaratish",
        link: "/create-categories",
      },
    ],
  },

  {
    id: 8,
    text: "Mahsulotlar",
    icon: BlogIcon,
    submenu: [
      {
        text: "Mahsulotlar",
        link: "/products",
      },
      {
        text: "Mahsulot yaratish",
        link: "/create-products",
      },
    ],
  },
  // {
  //   id: 3,
  //   text: "Курсы",
  //   icon: BlogIcon,
  //   submenu: [
  //     {
  //       text: "Курсы",
  //       link: "/services",
  //     },
  //     {
  //       text: "Курсы Создавать",
  //       link: "/create-service",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   text: "Yangiliklar",
  //   icon: PdfIcon,
  //   submenu: [
  //     {
  //       text: "Hamma yangiliklar",
  //       link: "/news",
  //     },
  //     {
  //       text: "Yangiliklar yaratish",
  //       link: "/create-news",
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   text: "Tourlar",
  //   icon: OrderIcon,
  //   submenu: [
  //     {
  //       text: "Hamma Tourlar",
  //       link: "/sources",
  //     },
  //     {
  //       text: "Tourlar yaratish",
  //       link: "/create-source",
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   text: "Ichki Tourlar",
  //   icon: OrderIcon,
  //   submenu: [
  //     {
  //       text: "Hamma Tourlar",
  //       link: "/tours-product",
  //     },
  //     {
  //       text: "Tourlar yaratish",
  //       link: "/create-tours",
  //     },
  //   ],
  // },
];
