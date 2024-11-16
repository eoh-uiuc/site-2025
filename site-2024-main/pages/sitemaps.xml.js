// export default function generateSitemap() {
//   // Define your website URLs and their properties
//   const pages = [
//     {
//       url: 'https://eohillinois.org',
//       lastmod: new Date().toISOString().split('T')[0],
//       changefreq: 'daily',
//       priority: '1.0'
//     },
//     {
//       url: 'https://eohillinois.org/about',
//       lastmod: new Date().toISOString().split('T')[0],
//       changefreq: 'monthly',
//       priority: '0.8'
//     }
//   ];

//   // Generate the XML content
//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${pages.map(page => `
//         <url>
//           <loc>${page.url}</loc>
//           <lastmod>${page.lastmod}</lastmod>
//           <changefreq>${page.changefreq}</changefreq>
//           <priority>${page.priority}</priority>
//         </url>
//       `).join('')}
//     </urlset>`;

//   return new Response(sitemap, {
//     headers: {
//       'Content-Type': 'application/xml',
//       'xml-version': '1.0',
//       'encoding': 'UTF-8'
//     },
//   });
// }

// // Add this configuration to handle the route
// export const dynamic = 'force-dynamic';
// export const revalidate = 0;
// export const contentType = 'application/xml';