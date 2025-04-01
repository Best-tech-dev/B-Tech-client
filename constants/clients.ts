/**
 * @fileoverview This file contains a constant array of client information used in the application.
 * Each client object includes details such as the client's name, logo URL, and website URL.
 *
 * The `CLIENTS` array can be used to dynamically display client information, such as logos
 * and links, on the website or other parts of the application.
 *
 * @constant
 * @type {Array<{name: string, logo: string, url: string}>}
 * @example
 * // Example usage:
 * CLIENTS.forEach(client => {
 *   console.log(client.name); // Logs the name of each client
 * });
 */

export const CLIENTS = [
  {
    name: "Accessible Publishers",
    logo: "/clients/accessible-publishers-logo.png",
    url: "https://accessiblepublishers.com",
  },
  {
    name: "Best in Print Academy",
    logo: "/clients/best-in-print-academy-logo.png",
    url: "https://bestinprintacademy.com",
  },
  {
    name: "Fresh Pro Real Estate",
    logo: "/clients/freshpro-logo.png",
    url: "https://freshpro.com",
  },
  {
    name: "Access Study",
    logo: "/clients/accessstudy-logo.png",
    url: "https://accessstudy.com",
  },
  {
    name: "Universal Basic Education",
    logo: "/clients/universal-basic-education-ubec-logo.png",
    url: "https://ubec.gov.ng",
  },
  {
    name: "Sectra",
    logo: "/clients/sectra-logo.png",
    url: "https://sectra.com",
  },
  {
    name: "University of Nigeria, Nsukka",
    logo: "/clients/university-of-nigeria-nsukka-logo.png",
    url: "https://unn.edu.ng",
  },
  // Add more clients here
];
