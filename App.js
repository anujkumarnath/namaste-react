import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Palnning of our app:
 *    Header
 *     - Logo
 *     - Nav Items
 *    Body
 *     - Seacrch Bar
 *     - Restaurant Container
 *         - Restaurant Cart
 *            - Image
 *            - Start Rating
 *            - Name of the restaurant
 *    Footer
 *     - Copyright
 *     - Links
 *     - Address
 *     - Contacts
 */

const restaurants = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "678813",
      "name": "Thali Express",
      "uuid": "441c6f25-c79b-4c3d-bb6f-e227bb523c4a",
      "city": "10459",
      "area": "Sector 50",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "41d01adbd2c44b1cac2e8a1d7df9d11e",
      "cuisines": [
        "Thalis",
        "Indian",
        "Chinese",
        "Biryani"
      ],
      "tags": [],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 6.599999904632568,
      "slugs": {
        "restaurant": "thali-express-sector-50-sector-50",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "Shop No-8, Village Sarfabad, SECTOR-73 NOIDA, Uttar Pradesh - 201301",
      "locality": "Sector-73",
      "parentId": 10007,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 7600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 7600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7395064~p=1~eid=00000189-277c-a621-343c-fb900060012b~srvts=1688584627745",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "6.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "678813",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 6.599999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.5",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "594715",
      "name": "Big Bowl",
      "uuid": "c00b38fd-d721-4b07-8584-a2fa88307add",
      "city": "10459",
      "area": "Sector 110",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "992f217c2f122c0d8fc385855ca30722",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "tags": [],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 14,
      "minDeliveryTime": 14,
      "maxDeliveryTime": 14,
      "slaString": "14 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "big-bowl-company-noida-expressway-noida-expressway",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "First Floor, Plot No- 3, Block- A-3,Sector- 110, Noida, NOIDA CITYZONE-1, Gautam Buddha Nagar ,Uttar Pradesh, 201304",
      "locality": "Block- A",
      "parentId": 434792,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "594715",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.6",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "594685",
      "name": "Chinese Wok",
      "uuid": "b489bf51-db8c-4696-852b-af0ada970413",
      "city": "10459",
      "area": "Sector 110",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "58ee0c742e8d56c3475db9ced65d2d47",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "tags": [],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 14,
      "minDeliveryTime": 14,
      "maxDeliveryTime": 14,
      "slaString": "14 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "chinese-wok---wok-express-noida-expressway-noida-expressway",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "First Floor, Plot No- 3, Block- A-3, Sector- 110, Noida, NOIDA CITY ZONE-1, Gautam Buddha Nagar , Uttar Pradesh, 201304",
      "locality": "Gautam Buddha Nagar",
      "parentId": 61955,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "594685",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "583088",
      "name": "Simple Burger",
      "uuid": "74ef06da-45d5-4159-afa7-efbf9ae20ef4",
      "city": "10459",
      "area": "Sector 51",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "d3to7amcs0pu8jwauayb",
      "cuisines": [
        "Burgers",
        "Snacks",
        "Beverages",
        "Asian",
        "Italian"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 7.599999904632568,
      "slugs": {
        "restaurant": "simple-burger-sector-50-sector-50",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "Shop No. 2, Inside Simple Bazaar, Metro Station, Block E, Sector 51, Noida, Uttar Pradesh 201301, India",
      "locality": "E Block",
      "parentId": 349369,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 8600,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7250522~p=4~eid=00000189-277c-a621-343c-fb9100600469~srvts=1688584627745",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "7.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "583088",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 7.599999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "314442",
      "name": "Natural Ice Cream",
      "uuid": "e865a56d-eedd-40ee-bd49-76a2b6625770",
      "city": "10459",
      "area": "Sector 83",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "ihfhw9umlilffphilf6d",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "tags": [],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 15,
      "minDeliveryTime": 15,
      "maxDeliveryTime": 15,
      "slaString": "15 MINS",
      "lastMileTravel": 2.299999952316284,
      "slugs": {
        "restaurant": "natural-ice-cream-sector-83-noida-expressway",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "Ground  Floor, Property No. B-57, Sec. 83, Noida, Disst Gautam Budh Nagar Uttar Pradesh - 201305",
      "locality": "B Block",
      "parentId": 2093,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "2.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "314442",
        "deliveryTime": 15,
        "minDeliveryTime": 15,
        "maxDeliveryTime": 15,
        "lastMileTravel": 2.299999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.5",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "415596",
      "name": "Keventers Ice Cream",
      "uuid": "279a4ec2-711d-43c7-b8d4-0d52646061a1",
      "city": "10459",
      "area": "Sector 93",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "5220cf2d5049dd54b0fb98bbb3d5a652",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 16,
      "minDeliveryTime": 16,
      "maxDeliveryTime": 16,
      "slaString": "16 MINS",
      "lastMileTravel": 2.9000000953674316,
      "slugs": {
        "restaurant": "keventers-ice-creamery-sector-92-noida-expressway-2",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "B 395,sec 92, Noida",
      "locality": "B Block",
      "parentId": 272044,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "2.9 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "415596",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "lastMileTravel": 2.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "562781",
      "name": "The Burger Club",
      "uuid": "b54c250a-a23d-418c-992c-158d92d72e32",
      "city": "10459",
      "area": "Sector 141",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "h4ppdoav5fdi0gsswpab",
      "cuisines": [
        "American",
        "Desserts",
        "Beverages"
      ],
      "tags": [],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 6,
      "slugs": {
        "restaurant": "the-burger-club-noida-expressway-noida-expressway",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "KPMG, GROUND FLOOR, KHASARA NO 254, Ch Nitin Khari Marg, Sector 141, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201305",
      "locality": "Ch Nitin Khari Marg",
      "parentId": 2285,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 7600,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 7600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7366896~p=7~eid=00000189-277c-a621-343c-fb920060075d~srvts=1688584627745",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "562781",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 6,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "435237",
      "name": "Giani Ice Cream",
      "uuid": "505f9c05-36b8-4efa-bb72-f4a6a2fb1e21",
      "city": "10459",
      "area": "Noida Expressway",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "ki8hsmbka7zrs1v9xjt3",
      "cuisines": [
        "Ice Cream",
        "Beverages"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 4.599999904632568,
      "slugs": {
        "restaurant": "giani-ice-cream-noida-expressway-noida-expressway",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "Hazipur, Sector 104, Noida, Gautam Buddha Nagar, Uttar Pradesh, India",
      "locality": "Sector 104",
      "parentId": 6577,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 5600,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹159",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "435237",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 4.599999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "353956",
      "name": "Bakingo",
      "uuid": "4833ebcc-b6de-4e2a-9978-b4258d99d5c7",
      "city": "10459",
      "area": "Sector 83",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "zs0ykyuwfoxblrpz3n0v",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Snacks"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 1.600000023841858,
      "slugs": {
        "restaurant": "bakingo-noida-expressway-noida-expressway",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "A- 200, Sector 83, Noida, Gautam Buddha Nagar , Uttar Pradesh-201305",
      "locality": "A Block",
      "parentId": 3818,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "1.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "353956",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 1.600000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "651291",
      "name": "Mister Kiyoshi",
      "uuid": "3ac33665-d40a-4be9-b83f-279b60c3648f",
      "city": "10459",
      "area": "Sector 51",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "cec4b4ddaa729659b5f8d407ce7a07d6",
      "cuisines": [
        "Chinese"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 7.599999904632568,
      "slugs": {
        "restaurant": "mister-kiyoshi-sector-50-sector-50",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "SHOP NO 2, SECTOR 51 METRO STATION, NOIDA CITY ZONE-4, Gautam Buddha Nagar , Uttar Pradesh-201301",
      "locality": "",
      "parentId": 391952,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7250534~p=10~eid=00000189-277c-a621-343c-fb9300600a3d~srvts=1688584627745",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "7.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "651291",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 7.599999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.9",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "307485",
      "name": "Mad Over Donuts",
      "uuid": "12c06d03-be5f-4456-8f44-7edfc93c9e46",
      "city": "10459",
      "area": "Sector 83",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "06944797a7dfa9b66142efd6b6f1e8b2",
      "cuisines": [
        "Desserts",
        "Sweets",
        "Bakery"
      ],
      "tags": [],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 1.7999999523162842,
      "slugs": {
        "restaurant": "mad-over-donuts-sector-83-noida-expressway",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "Rebel foods Pvt ltd , plot no 175 1st floor , sector 83 noida , 201305",
      "locality": "A Block",
      "parentId": 611,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "307485",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 1.7999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "322324",
      "name": "Biryani Blues",
      "uuid": "39978f7d-442b-4e07-ab4c-71fcc52021e3",
      "city": "10459",
      "area": "Sector 72",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "aid8xbkoxozzaxje8hap",
      "cuisines": [
        "Biryani",
        "Hyderabadi",
        "Lucknowi",
        "Kebabs",
        "Desserts",
        "Beverages"
      ],
      "tags": [],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 6.699999809265137,
      "slugs": {
        "restaurant": "biryani-blues-sector-50-sector-50",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "Shop no. 4, Ground Floor, Sunder Farm House  & Shopping Complex, Sarafabad Village, Noida Sector -73",
      "locality": "Sarfabad",
      "parentId": 13813,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 7600,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 7600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7375793~p=16~eid=00000189-277c-a621-343c-fb9500601043~srvts=1688584627745",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "6.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "322324",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 6.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "22132",
      "name": "Al Nawab Restaurant",
      "uuid": "460db3a0-f476-4d64-bb9d-2b5080158bf7",
      "city": "10459",
      "area": "Hajipur",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "lczmmddifkbobtccrpue",
      "cuisines": [
        "Biryani",
        "Mughlai",
        "North Indian"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 4.5,
      "slugs": {
        "restaurant": "al-nawab-sector-110-noida-expressway",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "SHOP NO 1, RESTAURANT VILLAGE HAJIPUR , SECTOR 104, NOIDA ,NOIDA CITY ZONE-5,Gautam Buddha Nagar ,Uttar Pradesh-201301",
      "locality": "Sector 104",
      "parentId": 29345,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 5600,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "22132",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 4.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "219179",
      "name": "Al Nawab Biryani",
      "uuid": "98f083b4-d4e6-4c59-bddc-87b38c260636",
      "city": "10459",
      "area": "Sector 72",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "zxr8ukrkau8mt5jqfamy",
      "cuisines": [
        "Indian",
        "Biryani",
        "Mughlai",
        "North Indian"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 4.699999809265137,
      "slugs": {
        "restaurant": "al--nawab-restaurant-golf-course-golf-course-2",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "Shop No 51 Amrapali Princely Main Market Sector 76 Pin code 201306",
      "locality": "",
      "parentId": 29341,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "ABOVE ₹900",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "219179",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 4.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "715927",
      "name": "Gianis Ice Cream Shakes & Sundaes",
      "uuid": "022b36db-4407-4e25-b566-4ef1bfc43425",
      "city": "10459",
      "area": "Noida Expressway",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "56fc63b2d9d8ee1b4a13b0d55cc9760f",
      "cuisines": [
        "Ice Cream"
      ],
      "tags": [],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 4.099999904632568,
      "slugs": {
        "restaurant": "gianis---ice-cream,-shakes-&-sundaes-noida-expressway-noida-expressway",
        "city": "noida-1"
      },
      "cityState": "10459",
      "address": "SHOP NO.G-16A GROUND FLOOR ,TOWER - A ,NOIDA WORLD ONE ,PLOT NO.01 SECTOR -90,NOIDA , GautamBudh Nagar Tahsil-I, Gautam Buddha Nagar , Uttar Pradeshnoi",
      "locality": "GautamBudh Nagar",
      "parentId": 380244,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "715927",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 4.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": true
    },
    "subtype": "basic"
  }
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://cdn.imgbin.com/6/1/14/imgbin-recipe-cooking-chef-dish-food-cooking-Zp7NcJCQt7fhEgHNx2NyVg18r.jpg" />
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const RestaurantCard = ({ name, cuisines, rating, imageId }) => {
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`} />
      <p>{name}</p>
      <p>Cuisines: {cuisines?.join(', ')}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="app-body">
      <div className="search-bar">
        <input />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {
          restaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.data.id}
                name={restaurant.data.name}
                cuisines={restaurant.data.cuisines}
                rating={restaurant.data.avgRating}
                imageId={restaurant.data.cloudinaryImageId}
              />
            );
          })
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);