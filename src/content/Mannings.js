import { CardGiftcardTwoTone, CelebrationTwoTone, HistoryEduTwoTone, RestaurantMenuTwoTone, WineBarTwoTone } from "@mui/icons-material";
import video from "../img/ManningsVideo.mp4";

export const Mannings = {
  fullName: "Manning's Steaks & Spirits",
  hours: "Tuesday - Sunday. 11am - 9:30pm<br/>Closed Monday",
  address: "11100 W Alameda Ave<br />Lakewood, Colorado 80226",
  phone: "(720) 484-6567",
  lat: 39.71043,
  long: -105.12297,
  reservationLink:
    "https://resy.com/cities/lkw/mannings-steaks-and-spirits?date=2023-08-26&seats=2",
  takeoutLink:
    "https://order.toasttab.com/online/mannings-steaks-and-spirits#!/",
  noveltyLink: "https://www.toasttab.com/mannings-steaks-and-spirits/giftcards",
  mainLogo: require("../img/Mannings_Logo_Manning's Dark_edited_edited.png"),
  navLogo: require("../img/Mannings_Logo_One Color White.png"),
  heroImg: `url(${require("../img/Food12.png")})`,
  heroVideo: video,
  heroVideoPoster: require("../img/Sign1.jpg"),
  content: [
    {
      title: "Manning's Steaks & Spirits",
      content: `Where culinary excellence meets a vibrant and inviting atmosphere. Our menu boasts a variety of delights for all palates, from a tender filet to a bold Buffalo Tomahawk, hearty seafood pastas, and creative burgers & sandwiches. Whatever your occasion, Manning's welcomes you into our fun, friendly, family-owned dining experience. Follow us on${" "}
    <a
      href="https://www.facebook.com/manningssteaks"
      target="_blank"
      rel="noreferrer"
    >
      Facebook
    </a>${" "}
    and${" "}
    <a
      href="https://www.instagram.com/mannings_steaks_and_spirits"
      target="_blank"
      rel="noreferrer"
    >
      Instagram
    </a>${" "}
    for updates and irresistible glimpses into the world of
    Manning's Steaks and Spirits. Bon appétit!`,
      contentImg: `url(${require("../img/Menu2.jpg")})`,
      cta: "menu",
      ctaLink: "./mannings-food.pdf",
      ctaDownload: true,
    },
    {
      title: "The Bar",
      titleIcon: <WineBarTwoTone />,
      content: `Manning's Steaks and Spirits sets an unparalleled standard with its top-notch bar program, elevating the art of mixology and beverage selection to remarkable heights. Renowned for its hand-crafted cocktails that blend innovation with timeless classics, the bar program is a true testament to the dedication of skilled mixologists who craft each drink with meticulous attention to detail. Moreover, Manning's boasts an exquisite collection of the finest wines, whiskeys, and tequilas, curated to cater to the most discerning palates. With an exceptional array of choices, patrons are invited to indulge in a sensory journey that celebrates the epitome of taste and refinement.`,
      contentImg: `url(${require("../img/Bar5.jpg")})`,
      cta: "cocktails",
      ctaLink: "./mannings-cocktails.jpeg",
      ctaDownload: true,
      cta2: "beers",
      cta2Link: "./mannings-beer.jpeg",
      cta2Download: true,
      cta3: "wine",
      cta3Link: "./mannings-wine.jpeg",
      cta3Download: true,
    },
  {
    title: "Happy Hour",
    titleIcon: <CelebrationTwoTone />,
    content: `Manning's Steaks and Spirits invites you to our unbeatable Happy Hour from 2 PM to 5 PM daily. Enjoy $3.50 Coors Banquet and Outlaw Light Lager, $4 House Spirits with a mixer of your choice, and $5 specials on wines, craft beer, and cocktails like the House Manhattan and Moscow Mule. Pair your drinks with $7 appetizers, including Crab Cakes and loaded Potato Skins. Join us and make your evenings happier!`,
    contentImg: `url(${require("../img/Cocktail21.jpg")})`,
    cta: "happy hour",
    ctaLink: "./mannings-happy-hour.jpeg",
    ctaDownload: true,
  },
    {
      title: "Manning's To Go",
      titleIcon: <RestaurantMenuTwoTone />,
      content: `Experience Manning's Steaks in the comfort of your own home with
      our convenient takeout ordering service. Indulge in the same
      exceptional flavors and quality you love, now available for
      pickup. Click the link below to start your order or give us a call at 720.484.6567 and we can place the order for you. Elevate your evening at home with Manning's take out`,
      contentImg: `url(${require("../img/Food23.jpg")})`,
      cta: "Order Now",
      ctaLink:
        "https://www.toasttab.com/mannings-steaks-and-spirits/v2/online-order#!",
      ctaDownload: false,
    },
    {
      title: "Manning's Gift Cards",
      titleIcon: <CardGiftcardTwoTone />,
      content: `Express your appreciation for exceptional dining experiences by sending the gift of Manning's Steaks and Spirits through our E-Gift Cards. Whether it's for a special occasion, a gesture of gratitude, or simply to share the joy of indulgence, our E-Gift Cards are a wonderful way to spread the love of remarkable cuisine and hand-crafted cocktails. Let your friends, family, or colleagues discover the delight of Manning's and create cherished memories. Share the love today by sending an E-Gift Card their way.`,
      contentImg: `url(${require("../img/Food27.jpg")})`,
      cta: "Order E-Gift Card",
      ctaLink: "https://www.toasttab.com/mannings-steaks-and-spirits/giftcards",
      ctaDownload: false,
    },
    {
      title: "About Manning’s",
      titleIcon: <HistoryEduTwoTone/>,
      content: `Manning’s Steaks and Spirits opened on December 5, 2018 by owners Diane Manning
      and her son Michael Manning.
      Diane got her start in hospitality at age 15 at a coffee shop cafe in a Days Inn hotel. By
      age 23, she had graduated to regional manager of 4 hotel locations. Her dad Tom,
      seeing that she had a knack for the business, suggested that she go into business for
      herself. In 1990, Diane and Tom teamed up and together opened Fiddlesticks Bar and
      Grill on Kipling and Jewel. Fiddlesticks is a Cheers-style sports bar with regulars who
      have been frequenting the location as long as it has been open.
      When Mike was about 27 years old, he began planting the seed that the family should
      open a second location. At the time, neither Mike nor Diane knew what type of
      restaurant they wanted to open- tacos, BBQ, or steaks. They purchased the location on
      Alameda and began construction while deciding on a concept. After considering what
      the Lakewood community needed, as well as what looked good on a sign, family friend
      Lisa H. suggested that the best name for the restaurant would be Manning’s. Since
      Manning’s Tacos and Manning’s BBQ didn’t sound quite right, they decided Manning’s
      Steaks and Spirits was the way to go!
      The concept behind Manning’s was to offer a mid-range steak house with a come-as-
      you-are atmosphere. The owners wanted it to be neighborhood and family friendly,
      affordable, comfortable, and a much-needed addition to the Lakewood community.
      Since opening in December 2018, Manning’s has hit the ground running. Offering
      delicious, made from scratch food, quality meats, and a high-end cocktail and wine list
      at reasonable prices, Manning’s has enjoyed busy dinners every night and a warm and
      welcome reception from our neighbors and community. The Manning family is thrilled
      to offer an alternative to the abundance of chain restaurants in the area. Also, we are
      proud to have an all-star staff who care about the quality of food and service provided.
      Mike is a hands-on manager/owner who enjoys motocross, mountain sports, golfing,
      and running the daily operations of the restaurant. You will often find him working at
      the restaurant and having conversations with patrons. His larger-than-life personality
      makes him a hospitality natural, and he truly loves being a part of the Lakewood
      restaurant community.`,
      contentImg: `url(${require("../img/Decor2.jpg")})`,
    },
  ],
};
