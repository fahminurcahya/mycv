var express = require("express");
const fs = require("fs");

const filePath = "data/portfolio-detail.json";

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/cv", (req, res) => {
  res.render("cv");
});

router.get("/portfolio/:name", (req, res) => {
  try {
    const param = req.params.name;
    console.log(param);

    // Parse the JSON data
    const jsonData = [
      {
        title: "E-Ticketing",
        description:
          "This is a project for e-ticketing for participants of the funwalk and funrun organized by Kementrian Investasi/BKPM in order to commemorate the 50th anniversary",
        category: "Project",
        client: "Kementrian Investasi/BKPM",
        year: "2023",
        pathName: "e-ticketing",
        url: "The URL is no longer available",
        technology: ["Node Js (Express Js)", "Mysql", "Nginx"],
        img: ["/images/bkpm/1.png", "/images/bkpm/2.png"],
        features: [
          "Participant registration for funwalk and funrun",
          "Send Email (registration success notification and ticket)",
          "Participant login page to display barcode and participant information",
          "List table of all participants",
          "Committee/administrator login",
          "Scan barcode & verify data",
        ],
      },
      {
        title: "Full-Stack JavaScript Developer: Website Travel",
        description: "Application for booking places for holidays",
        category: "Web Apps",
        client: "Online Course - Build with Angga",
        year: "2022",
        pathName: "staycation",
        url: "-",
        technology: ["Node Js (Express Js)", "React Js", "MongoDB"],
        img: [
          "/images/staycation/1.png",
          "/images/staycation/2.png",
          "/images/staycation/3.png",
        ],
        features: [
          "Dashboard backoffice (management product, transaction)",
          "Booking book a place",
        ],
      },
      {
        title:
          "Bootcamp Full-Stack Website Developer: Website Doctor Appointment",
        description:
          "Application for appointments along with a dashboard for data management",
        category: "Web Apps",
        client: "Online Course - Build with Angga",
        year: "2023",
        pathName: "appointment",
        url: "-",
        technology: ["PHP (Laravel 8)", "MySQl"],
        img: [
          "/images/appointment/1.png",
          "/images/appointment/2.png",
          "/images/appointment/3.png",
        ],
        features: [
          "Dashboard backoffice (management user, master data, operational)",
          "Create appointment",
        ],
      },
      {
        title:
          "Flutter App Developer: Make a Tinder Application to Find a Match",
        description:
          "A multi-platform application like Tinder and implementing bloc as state management",
        category: "Mobile Apps",
        client: "Online Course - Build with Angga",
        year: "2023",
        pathName: "sarangapps",
        url: "-",
        technology: ["Flutter"],
        img: [
          "/images/tinder/1.png",
          "/images/tinder/2.png",
          "/images/tinder/3.png",
        ],
        features: ["Login & Register", "Find & Add People"],
      },
      {
        title: "Whatsapp Sitcker Apps",
        description:
          "Application for adding WhatsApp stickers and implementing several AdMob such as, interstitial, native and banner, this application is also integrated with Google Firebase analytics to analyze application users, there are many applications that have been published on Playstore and have more than 100k installers",
        category: "Mobile Apps",
        client: "My Project",
        year: "2020",
        pathName: "stickerwa",
        url: "https://play.google.com/store/search?q=pub%3Amiddleearth%20dev&c=apps&hl=id-ID",
        technology: ["Java", "Admob", "Firebase Analytics"],
        img: [
          "/images/stickerwa/1.png",
          "/images/stickerwa/2.png",
          "/images/stickerwa/3.png",
        ],
        features: ["Add sticker packs to WhatsApp"],
      },
      {
        title: "KasirBersama",
        description:
          "This is an online cashier application project built for product and point of sale management needs",
        category: "Mobile Apps",
        client: "My Project",
        year: "2020",
        pathName: "kasir",
        url: "-",
        technology: [
          "Kotlin",
          "PHP (Code Igniter)",
          "PHP (Lumen)",
          "MySql",
          "3rd party (midtrans)",
        ],
        img: ["/images/kasir/1.png", "/images/kasir/2.png"],
        features: [
          "Web Dashboard",
          "Store Management",
          "Product Management",
          "Cashier Management",
          "Transaction Report (Pdf Export, Chart)",
          "Custom Receipt",
          "POS",
          "Print Receipt",
          "Premium application Subscription Package",
        ],
      },
      {
        title: "Dart Programming to Prepare to Learn Flutter",
        description: "",
        category: "Basic programming language",
        client: "Online Course",
        year: "2023",
        pathName: "basic1",
        url: "",
        technology: ["Dart"],
        img: ["/images/course/1.png"],
        features: [],
      },
      {
        title: "Adobe Illustration: How To Create Icon For UI",
        description: "",
        category: "Basic Design",
        client: "Online Course",
        year: "2023",
        pathName: "basic2",
        url: "",
        technology: ["Adobe Ilustration"],
        img: ["/images/course/2.png"],
        features: [],
      },
      {
        title: "Learn Adobe Illustrator: How to Become a Design Artist",
        description: "",
        category: "Basic Design",
        client: "Online Course",
        year: "2023",
        pathName: "basic3",
        url: "",
        technology: ["Adobe Ilustration"],
        img: ["/images/course/3.png"],
        features: [],
      },
      {
        title: "CSS Website Design",
        description: "",
        category: "Basic programming language",
        client: "Online Course",
        year: "2023",
        pathName: "basic4",
        url: "",
        technology: ["CSS", "HTML"],
        img: ["/images/course/4.png"],
        features: [],
      },

      // Company profile ssc karawang,
      // Game Pengenalan huruf hijaiyah,
      // platform undangan digital,
      // kasir mobile
    ];

    const filteredData = jsonData.filter((item) => item.pathName === param);
    if (filteredData[0]) {
      res.render("portfolio-detail", {
        data: filteredData[0],
      });
    } else {
      res.redirect("/");
    }

    // Now you can work with the JavaScript objects
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});

module.exports = router;
