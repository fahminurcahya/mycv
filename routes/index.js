var express = require("express");
const fs = require("fs");
const ejs = require("ejs");
const puppeteer = require("puppeteer");
const path = require("path");

const filePath = "data/portfolio-detail.json";

var router = express.Router();

const dataCV = {
  name: "Fahmi Nurcahya",
  title: "Software Engineer",
  img: "/assets/img/profile2.jpg",
  address: "Karawang, Indonesia.",
  email: "fahminurcahya@gmail.com",
  phone: "6285718456591",
  profile: [
    "3+ years of experience as a Software Engineer, I excel in designing, developing, and managing efficient and reliable software solutions.",
    "I possess a profound understanding of modern programming languages, software architecture, and best practices in application development.",
    "I have actively contributed to high-quality, complex software development projects that meet client needs.",
    "Furthermore, I am committed to continuous learning and growth within the realm of technology.",
  ],
  social: [
    {
      className: "bxl-github",
      url: "https://github.com/fahminurcahya",
      username: "fahminurcahya",
    },
    {
      className: "bxl-gitlab",
      url: "https://gitlab.com/fahminurcahya",
      username: "fahminurcahya",
    },
    {
      className: "bxl-instagram",
      url: "https://www.instagram.com/fahminurcahya/",
      username: "@fahminurcahya",
    },
  ],
  education: {
    title: "Bechelor of Informatic Engineering",
    studies: "University Of Singaperbangsa Karawang",
    year: "2015-2019",
  },
  experience: [
    {
      position: "MIDDLEWARE DEVELOPER",
      period: "July 2021 - July 2023",
      client: "PT Xsis Mitra Utama, placement at PT Bank Rakyat Indonesia",
      jobdesk: [
        "Created RestAPI service in ESB to integrate the requirements between BRI channels and third-party entities.",
        "Integrated applications with various formats such as JSON, ISO, and WSDL.",
        "Developed stored procedures in SQL Server.",
        "Acted as a dedicated middleware programmer for the BRI insurance platform (BRISURF).",
        "Designed the system's application flow, created API specification documentation, and conducted testing.",
        "Developed dashboard applications using React.js and Express.js.",
        "Conducted problem-solving and monitored services using Kibana.",
        "Implemented technologies such as Redis, Kafka, Elasticsearch, Bitbucket, and Bamboo.",
      ],
    },
    {
      position: "FRONTEND DEVELOPER",
      period: "July 2020 - Juni 2021",
      client:
        "PT Xsis Mitra Utama, placement at PT AZEC Indonesia Management Service",
      jobdesk: [
        "Developed several dashboard applications using Golang, AngularJS, and Docker as containers for the applications.",
        "Enhanced new features on existing dashboards using Java.",
        "Created API services using Golang as the programming language on the server side, with PostgreSQL as the database.",
      ],
    },
    {
      position: "BOOTCAMP JAVA DEVELOPER",
      period: "December 2019 - Juni 2020",
      client: "PT Xsis Mitra Utama",
      jobdesk: ["Bootcamp as a java developer"],
    },
  ],
  skills: [
    {
      title: "Web Apps",
      detail: [
        "HTML5 / CSS / Boostrap",
        "Javascript / Typescript / ReactJs / AngularJS ",
        "Node Js / Express Js (ES5/ES6)",
        "PHP (Laravel) / Golang / Java (Spring Boot)",
        "RDBMS(MySQL, SQL Server, PostgreSQL) / MongoDB / Redis",
      ],
    },
    {
      title: "Mobile Apps",
      detail: ["Dart / Flutter framework", "Kotlin / Java"],
    },
    {
      title: "Others",
      detail: [
        "Git, Docker, Microservices, Product Software AG, Figma / Canva / Adobe Ilustrator, Firebase, Push Notofication, Adsanse Mobile",
      ],
    },
  ],
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/cv", (req, res) => {
  const baseUrl = req.protocol + "://" + req.get("host");
  res.render("cv", { baseUrl: baseUrl, data: dataCV });
});

router.get("/cvv", (req, res) => {
  const baseUrl = req.protocol + "://" + req.get("host");
  res.render("template", { baseUrl: baseUrl, data: dataCV });
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

router.get("/pdf", async (req, res) => {
  const paramValue = req.query.theme;

  const baseUrl = req.protocol + "://" + req.get("host");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  const templatePath = "views/template.ejs";
  const templateContent = await ejs.renderFile(templatePath, {
    baseUrl: baseUrl,
    data: dataCV,
    theme: paramValue == "dark" ? "dark-theme" : "",
  });
  const compiledTemplate = ejs.compile(templateContent);

  const html = compiledTemplate();

  await page.setContent(html);

  const pdfPath = "CV-FahmiNurcahya.pdf";
  const pdf = await page.pdf({
    path: pdfPath,
    format: "A4",
    margin: 0,
    printBackground: true,
  });

  console.log(`PDF generated at ${pdfPath}`);

  await browser.close();

  res.contentType("application/pdf");
  res.send(pdf);

  // res.render("cv");
});

module.exports = router;
