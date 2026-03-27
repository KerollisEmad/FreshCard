import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import HomeCategories from "../../Components/HomeCategories/HomeCategories";
import HomeDeals from "../../Components/HomeDeals/HomeDeals";
import HomeFeatures from "../../Components/HomeFeatures/HomeFeatures";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import PageMetadata from "../../Components/PageMetadata/PageMetadata";

export default function Home() {
  return (
    <>
      <PageMetadata
        title="Fresh card | home page"
        description="Discover fresh groceries, exclusive deals, and top categories at FreshCard. Shop online for quality products delivered to your door."
        author="FreshCard Team"
        keywords="FreshCard, groceries, online shopping, deals, categories, featured products, fresh food"
      />{" "}
      <HomeSlider />
      <HomeFeatures />
      <HomeCategories />
      <HomeDeals />
      <FeaturedProducts />
      <NewsLetter />
    </>
  );
}
