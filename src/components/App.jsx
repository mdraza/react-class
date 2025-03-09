import React, { useEffect, useState } from "react";
import { LOGO } from "../utils/constant";
import { API_URL } from "../utils/constant";

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
  const [login, setLogin] = useState(true);
  function UserLogin() {
    setLogin((user) => !user);
  }
  return (
    <div className="shadow">
      <div className="flex justify-between mx-[100px] h-[70px] items-center">
        <div className="w-[180px]">
          <img src={LOGO} alt="logo" />
        </div>
        <div>
          <ul className="flex gap-5 text-xl items-center cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button
              onClick={UserLogin}
              className="px-4 py-2 bg-orange-700 rounded-md text-white"
            >
              {login ? "Login" : "Logout"}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Search({
  onSearch,
  inputSearch,
  setInputSearch,
  onRating,
  onDelivery,
}) {
  return (
    <div className="">
      <form
        action=""
        className="mt-8 flex justify-between"
        onClick={(e) => e.preventDefault()}
      >
        <input
          className="px-5 py-3 w-[70%] border-2 border-slate-300 rounded-md"
          type="search"
          placeholder="Search restaurant"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button
          onClick={onSearch}
          className="px-6 py-3 text-[18px] text-slate-50 rounded-md bg-orange-500"
        >
          Search
        </button>
        <button
          onClick={onRating}
          className="px-6 py-3 text-[18px] text-slate-50 rounded-md bg-orange-500"
        >
          Rating 4+
        </button>
        <button
          onClick={onDelivery}
          className="px-6 py-3 text-[18px] text-slate-50 rounded-md bg-orange-500"
        >
          Fast Delivery
        </button>
      </form>
    </div>
  );
}

function Body() {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState("false");
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(API_URL);
      const result = await response.json();
      console.log(result);
      setRestaurant(
        result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    fetchData();
    setIsLoading(false);
  }, []);

  const handleSearch = () => {
    const filteredRes = restaurant.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setFilteredRestaurant(filteredRes);
    console.log(filteredRes);
    setInputSearch("");
  };

  const handleMostRating = () => {
    const filteredRating = restaurant.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    console.log(filteredRating);
    setFilteredRestaurant(filteredRating);
  };

  const handleFastDelivery = () => {
    const filteredDelivery = restaurant.filter(
      (restaurant) => restaurant.info.sla.deliveryTime < 35
    );
    console.log(filteredDelivery);
    setFilteredRestaurant(filteredDelivery);
  };

  console.log("Body");
  if (isLoading)
    return <h1 className="m-10 text-2xl text-slate-900">Loading...</h1>;
  return (
    <div className="mx-[100px]">
      <Search
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        onSearch={handleSearch}
        onRating={handleMostRating}
        onDelivery={handleFastDelivery}
      />
      <div className="">
        <div className="my-8 grid grid-cols-4 gap-5">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RestaurantCard({ restaurant }) {
  return (
    <div className="rounded">
      <div className="rounded h-[300px]">
        <img
          className="rounded-xl card-img"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
          alt=""
        />
      </div>
      <div className="mt-2 px-3 py-2">
        <h2 className="font-medium text-xl mb-1">{restaurant.info.name}</h2>
        <p className="font-medium">
          ⭐{restaurant.info.avgRatingString} -{" "}
          {restaurant.info.sla.lastMileTravel}km
        </p>
        <p className="font-light text-slate-950">
          {restaurant.info.cuisines[0]}
        </p>
        <p className="font-light text-slate-950">{restaurant.info.areaName}</p>
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
