export default function PageMetadata({
  title = "FreshCard | Online Grocery Shopping",
  description = "Shop fresh groceries, exclusive deals, and quality products delivered to your door with FreshCard.",
  author = "FreshCard Team",
  keywords = "FreshCard, groceries, online shopping, deals, fresh food, delivery"
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </>
  );
}