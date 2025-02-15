import React, { useEffect, useState } from "react";
const restaurant = {
  id: "11091",
  name: "Pizza Hut",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ea1daf5-b64e-43d2-80db-b460ed92e05c_11091.jpg",
  locality: "Attapur",
  areaName: "Attapur",
  costForTwo: "₹350 for two",
  cuisines: ["Pizzas"],
  avgRating: 4.2,
  parentId: "721",
  avgRatingString: "4.2",
  totalRatingsString: "20K+",
  sla: {
    deliveryTime: 36,
    lastMileTravel: 2.2,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "2.2 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2025-02-16 04:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "50% OFF",
    subHeader: "UPTO ₹100",
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
    aggregatedRating: {
      rating: "3.9",
      ratingCount: "1.6K+",
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
};

function Header() {
  return (
    <div className="shadow">
      <div className="flex justify-between mx-[100px] h-[70px] items-center">
        <div className="w-[180px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW91-cIAIp0c7Bne3kPYS3tAuFjsoqsVviAg&s"
            alt="logo"
          />
        </div>
        <div>
          <ul className="flex gap-5 text-xl items-center cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="mt-8 flex justify-between">
      <input
        className="px-5 py-3 w-[90%] border-2 border-slate-300 rounded-md"
        type="search"
        placeholder="Search restaurant"
      />
      <button className="px-6 py-3 text-[18px] text-slate-50 rounded-md bg-orange-500 ">
        Search
      </button>
    </div>
  );
}

function Body() {
  return (
    <div className="mx-[100px]">
      <Search />
      <div className="">
        <div className="my-8 grid grid-cols-4">
          <div className="rounded">
            <div className="rounded">
              <img
                className="rounded-md"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`}
                alt=""
              />
            </div>
            <div className="mt-3 px-3 py-2">
              <h2>{restaurant.name}</h2>
              <p>
                ⭐{restaurant.avgRatingString} - {restaurant.sla.slaString}
              </p>
              <p>{restaurant.cuisines[0]}</p>
              <p>{restaurant.areaName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  [count, setCount] = useState(0);
  // console.log(count);
  // console.log(setCount);

  function handleCount() {
    // setCount((count) => count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      {/* <h1 className="text-3xl">{count}</h1>
      <button onClick={handleCount} className="px-6 py-3 bg-slate-300 mt-3">
        Increment
      </button> */}
      <Header />
      <Body />
    </div>
  );
}

export default App;
