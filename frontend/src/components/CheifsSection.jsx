export default function ChefsSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Chef 1 */}
          <div className="flex flex-col items-center">
            <div className="w-52 h-52 rounded-full overflow-hidden mb-6">
              <img
                src="./chef1.jpg"
                alt="Head Chef"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Chef Aarav Sharma</h3>
            <p className="text-sm text-gray-500 mb-3">Head Chef</p>
            <p className="text-gray-600 text-sm max-w-xs">
              Bringing refined technique and creative vision to every plate.
            </p>
          </div>

          {/* Chef 2 */}
          <div className="flex flex-col items-center">
            <div className="w-52 h-52 rounded-full overflow-hidden mb-6">
              <img
                src="./chef2.jpg"
                alt="Sous Chef"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Chef Maya Khadka</h3>
            <p className="text-sm text-gray-500 mb-3">Sous Chef</p>
            <p className="text-gray-600 text-sm max-w-xs">
              Focused on balance, consistency, and modern comfort flavors.
            </p>
          </div>

          {/* Chef 3 */}
          <div className="flex flex-col items-center">
            <div className="w-52 h-52 rounded-full overflow-hidden mb-6">
              <img
                src="./chef3.jpg"
                alt="Pastry Chef"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Chef Rohan Patel</h3>
            <p className="text-sm text-gray-500 mb-3">Pastry Chef</p>
            <p className="text-gray-600 text-sm max-w-xs">
              Crafting desserts that bring elegance and indulgence together.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
