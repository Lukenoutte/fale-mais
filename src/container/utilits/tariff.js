function tariff(origin, destination){
    let moneyPerMinute = 0;
    
    const cities = {
        "011_016": origin === "011" && destination === "016",
        "016_011": origin === "016" && destination === "011",
        "011_017": origin === "011" && destination === "017",
        "017_011": origin === "017" && destination === "011",
        "011_018": origin === "011" && destination === "018",
        "018_011": origin === "018" && destination === "011",
      }
  
      switch (true) {
  
        case cities["011_016"] || cities["018_011"]:
          moneyPerMinute = 1.90;
          break;
        case cities["016_011"]:
          moneyPerMinute = 2.90;
          break;
        case cities["011_017"]:
          moneyPerMinute = 1.70;
          break;
        case cities["017_011"]:
          moneyPerMinute = 2.70;
          break;
        case cities["011_018"]:
          moneyPerMinute = 0.90;
          break;
  
        default:
      }

      return moneyPerMinute;
}

export default tariff;