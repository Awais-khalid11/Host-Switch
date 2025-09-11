import { useState, useEffect } from "react";

const getLocationFromZip = async (zipCode) => {
  if (!zipCode || typeof zipCode !== "string" || zipCode.trim().length < 5) {
    return "N/A";
  }

  const cleanZip = zipCode.trim();

  try {
    const response = await fetch(`https://api.zippopotam.us/us/${cleanZip}`);

    if (!response.ok) {
      throw new Error(`ZIP code ${cleanZip} not found`);
    }

    const data = await response.json();
    const place = data.places[0];

    return `${place["place name"]}, ${place["state abbreviation"]}`;
  } catch (error) {
    console.error(`Error fetching location for ZIP ${cleanZip}:`, error);
    return cleanZip; // Return original ZIP if API fails
  }
};

// Utility function to process a string with multiple ZIP codes
const processMarketString = async (marketString) => {
  if (!marketString) return "N/A";

  const zipCodes = marketString.split(",").map((zip) => zip.trim());
  const locationPromises = zipCodes.map((zip) => getLocationFromZip(zip));
  const locations = await Promise.all(locationPromises);

  return locations.join(", ");
};

// Custom hook
export const useZipCodeConverter = (marketString) => {
  const [location, setLocation] = useState("Loading...");

  useEffect(() => {
    const convertZip = async () => {
      if (!marketString) {
        setLocation("N/A");
        return;
      }

      const result = await processMarketString(marketString);
      setLocation(result);
    };

    convertZip();
  }, [marketString]);

  return location;
};
