const path = require("path");
var expr = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

var app = expr();

const content = path.join(__dirname, "./template/views");
const components = path.join(__dirname, "./template/partials");
const csspath = path.join(__dirname, "./template/partials");
const imgpath = path.join(__dirname, "./template/partials/images");

app.set("view engine", "hbs");
app.set("views", content);

hbs.registerPartials(components);
app.use(expr.static(csspath));
app.use(expr.static(imgpath));

app.get("", (req, res) => {
  res.render("index", {
    title: "House Of Yoga - Home",
    page_name: "home",
  });
});

app.get("/courses", (req, res) => {
  res.render("courses", {
    title: "iDestiny – Courses",
    course1Name: "Yoga Teacher Training",
    course2Name: "Chakra Immersion Course",
    course3Name: "Womens Yoga Wellness Course",
    course4Name: "Kids TTC",
    course5Name: "Advanced Course",
    course6Name: "Yoga Therapy Course",
    course7Name: "Pre & Post Natal Yoga TTC",
    course8Name: "Yoga Psychology Course",
    course9Name: "Ayurvedic Yoga Massage Course",
    month1: "May",
    month2: "June",
    month3: "July",
    month4: "August",
  });
});

app.get("/events", (req, res) => {
  res.render("events", {
    title: "House Of Yoga - Events",
    event1Name: "Online Post Natal Yoga Teacher Training",
    event1Language: "English",
    event1Date: "18 Apr to 29 May 2021 - Close",
    event1Venue: "Online",
    event2Name: "Yoga Teacher Training",
    event2Language: "Italian",
    event2Date: "1 May to 09 Jan 2022 - Apply",
    event2Venue: "Yoga Joya Italy",
    event3Name: "Online Yoga Therapy Program",
    event3Language: "Hindi",
    event3Date: "6 Jun to 28 Aug 2021 - Close",
    event3Venue: "Online",
    event4Name: "Online Yoga Philosophy and Psychology Program",
    event4Language: "Bengali",
    event4Date: "18 Apr to 29 May 2021 - Apply",
    event4Venue: "Online",
  });
});

app.get("/teachers", (req, res) => {
  res.render("teachers", {
    title: "House Of Yoga - Teachers",
    teacher1Subject: "Meditation",
    teacher2Subject: "Vinyasa Flow",
    teacher3Subject: "Vinyasa Flow",
    teacher4Subject: "Yin Yoga",
    teacher5Subject: "Vinyasa",
    teacher6Subject: "Hatha",
    teacher7Subject: "Meditation",
    teacher8Subject: "Mixed movement",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "House Of Yoga - About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "House Of Yoga - Contact",
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "House Of Yoga - 404",
  });
});

app.listen(port, () => {
  console.log(`Server running succesfully at localhost:${port}`);
});
