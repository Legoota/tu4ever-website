/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
    const headers = {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    }
    return {
        headers,
        body: `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://tu4ever.fr</loc>
            </url>
            <url>
                <loc>https://tu4ever.fr/about/</loc>
            </url>
            <url>
                <loc>https://tu4ever.fr/articles/</loc>
            </url>
            <url>
                <loc>https://tu4ever.fr/articles/interior-car-washing/</loc>
            </url>
            <url>
                <loc>https://tu4ever.fr/articles/wheels-repair/</loc>
            </url>
            <url>
                <loc>https://tu4ever.fr/partenariats/</loc>
            </url>
            <url>
                <loc>https://tu4ever.fr/presentation/</loc>
            </url>
        </urlset>`,
        status: 200
    }
  }