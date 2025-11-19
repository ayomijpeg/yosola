import React from 'react';

const images = [
  "/imgs/ICT Pratical-5.jpg",
  "/imgs/extra-curricular-activities.jpg",
  "/imgs/SS3 Graduants 2.jpg",
  "/imgs/RM2.jpeg"
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Life at Yosola</h2>
             <p className="mt-4 text-slate-600 max-w-lg">From the classroom to the playing field, experience the vibrant community that makes our school unique.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[500px]">
            {/* Masonry-style grid using standard CSS grid */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl h-64 md:h-auto">
                <img src={images[0]} alt="Classroom" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white font-medium">ICT Learning</div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl h-64 md:h-auto">
                <img src={images[1]} alt="Sports" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white font-medium">Sports & Athletics</div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl h-64 md:h-auto">
                <img src={images[2]} alt="Arts" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                 <div className="absolute bottom-4 left-4 text-white font-medium">Graduation Ceremony</div>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-2xl h-64 md:h-auto">
                <img src={images[3]} alt="Library" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white font-medium">Skills & Vocational Studies</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
