
/* Note From GeeksforGeeks:
 * The dns.resolve4() method is an inbuilt application programming interface of the dns module
 * which is used to resolve IPv4 address (‘A’ record) for the specified hostname using DNS protocol. 
 */
const dns = require("dns");

const domainName = "www.miu.edu";

dns.resolve4(domainName, (err, addresses) => {
    console.log(addresses);
    if (err) {
        console.error(
          `Error resolving IP address for ${domainName}: ${err.message}`
        );
      } else {
        console.log(`IP address for ${domainName}: ${addresses[0]}`);
      }
});
