import { useState, useRef } from "react";
import { PlayArrow, Pause } from "@mui/icons-material";
import './Evolution.css'; // Importing the external CSS

const Evolution = () => {
  const [selectedCategory, setSelectedCategory] = useState("Passenger vehicles");
  const [selectedPart, setSelectedPart] = useState("Complete body");
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Video sources mapping
  const videoSources = {
    "Passenger vehicles": {
      "Complete body": "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/a781/baf7/-bd13-4a3e-81a0-1bd2ddcef3ef?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NV2wQdy1flIngTSSX~vaBBBLfN9dqXgWUlwtcp2Jj2Er1m6VtrqH54Hqdu82JVkAPs-c2RXB8SBJ9A01fhuiBEGrbznN~~dHGez1r2pwISEzFyuQgbJieGQvz92eRJyYxmAHG3Wpt71n4jAugC8mKJczDESeb00jRUAme4Iu2JlaorQ58e~1MQx8D5rZdVxgxnzS6Zez9gnpw-gEJcC16W4xhHLiU0t-Btd2Dh8Pg8JO-UtnUOsQ4IBI6XShhffYE9tKGPBBBVauqk1tTvdu8zFBcImLbbc0oMAwapdbe2gXS8uUGpA8KywT5fKtAaXJO2PsM0svIM9t5WlNC-bojQ__",
      "Front": "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/b026/9297/-1976-4d99-9817-49cf83fc464f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W641UzdhqL~D97TtBsS4iWGWCg6gaNBNEXpUwqbgt0d2pN3A14MdvEJSPCzl6vy1YqtOw14z43jFhsjbzO-VKCi8Mrq7~0hYQce3NCYZ1w-HdDRUOWbjje9UBDQOlSbi2Syckw2oUOu0pWpus3G3J5fVJoYW7Lkc~7VJ45ieFDnw8QDPZzNFAdyW3w0mrMJaYmk7xfx1KgvfBg916geZgJ-cUqOF4DHdPJ349-ow~uDEDt0TT23ysTqRVLD7zs00MGYcOOqHX3SkfUYNi8oRYqd31mcfdez3GSo15KBdVY60wJEcEabW-faVhy-YDQLrUhI5Ijtj2-VPb-gfQ5I-OQ__",
      "Cabin": "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/6761/32c5/-5a7d-4558-aeff-0d93f98334ad?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jn-wvbFromTq8DNtPjV-z8aKe4FC79Bi9Y4L5J7l1C6kKu8dJEUMzHCamfWGIvIayGsLNSm0hVrgnuohLOrfFMaOnpIbH-rHeJ~Fwn9Swxhj5~5uzQgPfqcLndfk2ByK5rt3ZbLkZFV7BvqLwRgkbT73cWmtrfAqz1Cn0oKs5W4v~F-uju~BOYgptDW-YfMhZWTlLoi5-06tkf3o0~led9WSSs7CLdo1RtUl1olB2PIsepN~0D7d~sYKejdMDCPpInlKQBywUNO7nJG0BWVDevmqCnEWXCKZE~DfV9S78MAs~3HOo6V5fz6B9IbLKpWhCt21YmZiQ8w4YmLMdM3uuQ__",
      "Trunk": "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/638d/bf77/-5723-48e0-ad7d-5233a3d2cc40?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fXLYdkycnLz5vg30hMltqzvemO9RLlzd28l8VICShyQ~80Uq6exKYpXEbQXHXSodbGqyVtzVkI9N~jRewhbaWtGY~4BhLxuPDj~1XHwhpR6hZ3gGiGFfJ4XhB8NPvvB090ZW3A5T~hXksOcvVzlrihUgnJqSB~WlgHKqthJlsbwR~BzgmnAG4d~w1O4k6EdpkjUK6lgth--AT47DTf3W50-FEm-tPeLzhT6kEf7aUG--vEvAPvbBcKna5FHG~OpmlTOTaLNvuo5gGzhLFRqUVXRQ0~WIiltK4K~Co-7nnAsYE8zyQ-q6K0Jyve9YpwlsDJ45l~sRE-sSQF47Sj5T1g__",
      "Exterior": "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/5c03/8fd3/-81de-4ba3-8fa6-6b76c1ea6995?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CMKK4L8z~WDHGhVGXzMQTis7YdHBfhaTAFLDZkQl2zsJ6K6bhwP~eILIP8MZKc8JTdVJY3teASavawDZWdW9i1C2QBdiIWwSmhCJKqLfsFZQ1W4auScnuOGoQVc9mz7bhJgiDbbxFiLsSyd08D~uilZNoIeqdro3C-7c1zcV~JY-jwNe1Lq936PmpdCmJd4g-eMJfhsSpQQPkCsE~5G178ko7k9igrqlI1icGeb2GyfryEnDyFbOmtfxTc6Xlngp-3e2kf14PlqjxD0~Uc-Ryg~rDuLSTieYC1fUb7vMfo-Ok5cXn-VzV01kGE87lYij6VS-vvPVCmPO8grq6X7z0A__",
    },
    "Commercial vehicles": {
      "Complete body": "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/a781/baf7/-bd13-4a3e-81a0-1bd2ddcef3ef?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NV2wQdy1flIngTSSX~vaBBBLfN9dqXgWUlwtcp2Jj2Er1m6VtrqH54Hqdu82JVkAPs-c2RXB8SBJ9A01fhuiBEGrbznN~~dHGez1r2pwISEzFyuQgbJieGQvz92eRJyYxmAHG3Wpt71n4jAugC8mKJczDESeb00jRUAme4Iu2JlaorQ58e~1MQx8D5rZdVxgxnzS6Zez9gnpw-gEJcC16W4xhHLiU0t-Btd2Dh8Pg8JO-UtnUOsQ4IBI6XShhffYE9tKGPBBBVauqk1tTvdu8zFBcImLbbc0oMAwapdbe2gXS8uUGpA8KywT5fKtAaXJO2PsM0svIM9t5WlNC-bojQ__",
      "Engine": "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/9795/46ac/-303d-445d-a93e-c25b0e48c495?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hHW~f4Y2LlPU709XXEcuFSjhHRp8a3ELlCLGpsMikQYE4GFXSO8uGgAzanCuZJIBcFk6GOvIANX60wB-TCPVcPiaa98N0jZjzYtm0ePN3-p554Z-Me2oQamhhGiVZ9GmwiYlW8G~OkDPNKpP5lhUZ7mINLrbf6Po--0JZ6RpvrQED7cyl4ZeiiBSZaXr5kOCUWjt51luoIaCHLQXnzQm1WgBFXSVhkfvTOS3KypH35GoxQ~MaliBFKwizjeK7sDu9GCCZNBDwCGVc8yf1kx7LT5-FX1Sol715mVcYzRoxcCMoHI8COOj5MnApfv3WP7fJYyv3cZXhXRfjKZ9WLrXVw__",
      "Cabin": "https://s3-figma-videos-production-sig.figma.com/video/1173956211076479877/TEAM/6761/32c5/-5a7d-4558-aeff-0d93f98334ad?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jn-wvbFromTq8DNtPjV-z8aKe4FC79Bi9Y4L5J7l1C6kKu8dJEUMzHCamfWGIvIayGsLNSm0hVrgnuohLOrfFMaOnpIbH-rHeJ~Fwn9Swxhj5~5uzQgPfqcLndfk2ByK5rt3ZbLkZFV7BvqLwRgkbT73cWmtrfAqz1Cn0oKs5W4v~F-uju~BOYgptDW-YfMhZWTlLoi5-06tkf3o0~led9WSSs7CLdo1RtUl1olB2PIsepN~0D7d~sYKejdMDCPpInlKQBywUNO7nJG0BWVDevmqCnEWXCKZE~DfV9S78MAs~3HOo6V5fz6B9IbLKpWhCt21YmZiQ8w4YmLMdM3uuQ__",
    },
  };

  // Vehicle categories
  const vehicleCategories = [
    { name: "Passenger vehicles", description: "Revving up innovation from interior to exterior.", id: "Passenger" },
    { name: "Commercial vehicles", description: "Advancing engineering for heavy-duty vehicles.", id: "Commercial" },
  ];

  // Vehicle parts
  const vehicleParts = [
    { name: "Passenger vehicles", categories: ["Complete body", "Front", "Cabin", "Trunk", "Exterior"] },
    { name: "Commercial vehicles", categories: ["Complete body", "Engine", "Cabin"] },
  ];

  // Handle play/pause button
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="evolution-container">
      {/* Heading */}
      <div className="evolution-header">
        <h2>
          Evolving the drive with <span className="highlight">360-degree</span>
          <br /> comprehensive solutions
        </h2>
      </div>

      {/* Main section */}
      <div className="evolution-main">
        {/* Left Section - Vehicle Categories */}
        <div className="evolution-categories">
          {vehicleCategories.map((category) => (
            <div
              key={category.id}
              className={`category-item ${selectedCategory === category.name ? 'selected' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <h3>{category.name}</h3>
              <p className="category-description">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Right Section - Video Player */}
        <div className="evolution-video">
          <video ref={videoRef} src={videoSources[selectedCategory][selectedPart]} className="video-player" autoPlay muted loop />
        </div>
      </div>

      {/* Bottom Section - Vehicle Parts Selection */}
      <div className="evolution-parts">
        <div className="parts-selection">
          {vehicleParts.map((part) =>
            selectedCategory === part.name
              ? part.categories.map((item) => (
                  <p
                    key={item}
                    className={`part-item ${selectedPart === item ? 'selected' : ''}`}
                    onClick={() => setSelectedPart(item)}
                  >
                    {item}
                  </p>
                ))
              : null
          )}
        </div>

        {/* Play/Pause Button */}
        <button className="play-pause-btn" onClick={togglePlayPause}>
          {isPlaying ? <Pause sx={{ width: 24, height: 24 }} /> : <PlayArrow sx={{ width: 24, height: 24 }} />}
        </button>
      </div>
    </div>
  );
};

export default Evolution;
