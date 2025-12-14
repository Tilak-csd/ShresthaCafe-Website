export default function GetInTouch() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get in Touch
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Whether you have a question, want to make a reservation, or simply say
          hello, we’d love to hear from you. Reach out and our team will get back
          to you shortly.
        </p>

        {/* Contact Info */}
        <div className="grid gap-10 md:grid-cols-3">
          
          <div>
            <h4 className="font-semibold text-lg mb-2">Visit Us</h4>
            <p className="text-gray-600 text-sm">
              MachaPokhari<br />
              Kathmanud, Nepal
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Call Us</h4>
            <p className="text-gray-600 text-sm">
              +977 9845231690
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Email</h4>
            <p className="text-gray-600 text-sm">
              info@shresthacafe.com
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
