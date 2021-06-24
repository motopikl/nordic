// This is the configuration file for Kanji startpage. Basic settings are here.

var data = {

    // -------------------------------------------------
    // Greetings config. Change greetings from here

    g1: "Спокойной ночи", // From 23:00 to 5:00
    g2: "Доброе утро", // Until 12:00
    g3: "Привет", // Until 17:00
    g4: "Ты снова тут. Чем займёмся?", // Rest of the time

    // Font size of the greeting
    greeting_fontsize: "40px",
    // Foreground color of the greeting
    greeting_fgcolor: "#fff",

    // -------------------------------------------------
    // Clock config

    // Enable/disable clock
    clock: false,
    // Foreground color of the clock
    clock_fgcolor: "#79acf3",
    // Font size of the clock
    clock_fontsize: "20px",

    // -------------------------------------------------
    // Change image proprieties from here

    // Border radius: set it to 50% to create a circle
    image_radius: "100%",
    // Border for the image
    image_border: "10px",
    // Color of the border
    image_bordercolor: "#eceff4",
    // Filters for the image.
    image_filter: "grayscale(36%) brightness(100%)",
    // Width/height for the image
    image_width: "300px",
    // Image source: you can use local files, or a link
    // Ex.: image_source: "/img/kanji.jpg"
    image_source: "https://i.imgur.com/5nL98RF.jpg",

    // -------------------------------------------------
    // Enable/disable site icons
    enable_icons: false,
    links_hover: true,

    // -------------------------------------------------
    // Page title
    title: "Byrjaðu hér",

    // -------------------------------------------------
    // Change search bar proprietis from here
    // Search bar placeholder
    search_placeholder: "Искать в Google ...",
    // Search engine
    // Possible choices: (case sensitive)
    // google
    // duckduckgo
    // qwant
    // startpage
    // ecosia
    // youtube
    search_engine: "google",

}