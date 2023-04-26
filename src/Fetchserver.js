// base fetch point
export default async function convert(request) {
  
    const debug = true;
    
    try {
      const fetchResult = await fetch(request); //Making the req
      const result = await fetchResult.json(); // parsing the response
  
      if (debug) {
        console.log("=== " + request + " ====");
        console.dir(result);
        console.log("=============================================");
      }
  
      return result; // return success object
  
    } catch {
      // No success => we stop everything
      console.log("Connection error");
    }
};
  
  