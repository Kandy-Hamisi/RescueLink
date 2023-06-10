import { FaRegClipboard, FaRegHeart, FaUsers } from "react-icons/fa";

export const dashboardNavItems = [
  {
    id: 1,
    itemName: "Dashboard",
    icon: "faCoffee",
    dropdown: [
      {
        id: 1,
        riskFactor: "Floods",
      },
      {
        id: 2,
        riskFactor: "Fires",
      },
      {
        id: 3,
        riskFactor: "Traffic Accidents",
      },
    ],
  },
  {
    id: 2,
    itemName: "Programs",
    icon: "faCoffee",
    dropdown: [
      {
        id: 1,
        riskFactor: "Humanitarian Coding Club",
      },
      {
        id: 2,
        riskFactor: "Dissemination",
      },
      {
        id: 3,
        riskFactor: "Lucid Talks",
      },
    ],
  },
  {
    id: 3,
    itemName: "Donations",
    icon: "faCoffee",
    dropdown: [
      {
        id: 1,
        riskFactor: "All Donations",
      },
      {
        id: 2,
        riskFactor: "Donate",
      },
      {
        id: 3,
        riskFactor: "All Donors",
      },
    ],
  },
  {
    id: 4,
    itemName: "Volunteers",
    icon: "faCoffee",
    dropdown: [
      {
        id: 1,
        riskFactor: "All Volunteers",
      },
      {
        id: 2,
        riskFactor: "Register",
      },
    ],
  },
  {
    id: 5,
    itemName: "Settings",
    icon: "faCoffee",
    dropdown: [
      {
        id: 1,
        riskFactor: "Floods",
      },
      {
        id: 2,
        riskFactor: "Fires",
      },
      {
        id: 3,
        riskFactor: "Traffic Accidents",
      },
    ],
  },
];

export const bottomNavigation = [
  {
    id: 1,
    itemName: "Help Center",
  },
  {
    id: 2,
    itemName: "Contact us",
  },
  {
    id: 3,
    itemName: "Logout",
  },
];

export const SummaryData = [
  {
    id: 1,
    title: "Volunteers",
    figure: 100,
  },
  {
    id: 2,
    title: "Donors",
    figure: 100,
    icon: "",
  },
  {
    id: 3,
    title: "Programs",
    figure: 100,
  },
];
export const SummaryIcons = [
  <FaUsers style={{ marginTop: "auto", marginBottom: "auto" }} />,
  <FaRegClipboard
    key={1}
    style={{ marginTop: "auto", marginBottom: "auto" }}
  />,
  <FaRegHeart key={2} style={{ marginTop: "auto", marginBottom: "auto" }} />,
];
