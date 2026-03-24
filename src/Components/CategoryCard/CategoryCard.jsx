export default function CategoryCard({ categories, toggle }) {
  const { name, image } = categories;
  
  return (
    <>
      <section>
        {toggle === "Grip" ? (
          <div className="relative shadow-md rounded-lg overflow-hidden">
            <img src={image} alt="" className="h-48 w-full object-cover" />
            <h3 className="absolute z-40 bottom-4 left-6 text-white text-xl font-semibold">
              {name}
            </h3>
            <div className="absolute z-30 top-0 left-0 right-0 bottom-0  bg-gradient-to-t from-black/70 to-black/10 "></div>
          </div>
        ) : (
          <div className=" shadow-md rounded-lg overflow-hidden">
            <div className="bg-white flex gap-8 shadow-md rounded-lg overflow-hidden">
              <div className="w-50">
                <img src={image} className="h-56 p-6 object-cover" />
              </div>{" "}
              <h3 className="text-black text-xl font-semibold pt-8">{name}</h3>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
