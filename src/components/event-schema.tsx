export function EventSchema() {
    const eventData = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Game On, Party On – Inter-Uni Edition",
      "startDate": "2025-12-22T12:00:00+01:00",
      "endDate": "2025-12-23T23:59:00+01:00",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Lagos, Nigeria"
      },
      "image": [
        "https://inter-uni-bash.vercel.app/og-image.jpg"
       ],
      "description": "The ultimate university showdown. 2 days of intense sports, music, and unforgettable parties.",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "3000",
        "highPrice": "7500",
        "priceCurrency": "NGN",
        "url": "https://inter-uni-bash.vercel.app/tickets",
        "availability": "https://schema.org/InStock"
      },
      "organizer": {
        "@type": "Organization",
        "name": "ArenaVibes & Detty December",
        "url": "https://inter-uni-bash.vercel.app/"
      }
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
      />
    );
  }
  