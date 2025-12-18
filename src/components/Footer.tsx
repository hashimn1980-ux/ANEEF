'use client';

const negatives = [
  {
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    id: 'KODAK PORTRA 400',
    exp: '24',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    id: 'ILFORD HP5',
    exp: '25',
  },
  {
    src: 'https://images.unsplash.com/photo-1556742044-5934a3f4e245?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    id: 'CINESTILL 800T',
    exp: '26',
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#05070c] border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-rose-gold text-lg font-normal tracking-widest uppercase mb-8">
          Recent Negatives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {negatives.map((neg, i) => (
            <div key={i} className="relative bg-black p-1 group cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 border border-white/5">
              <div className="relative overflow-hidden aspect-[4/5] border-x-[12px] border-black">
                <img
                  alt={`Negative film strip image ${i + 1}`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  src={neg.src}
                />
              </div>
              <div className="absolute bottom-2 right-4 text-[10px] font-mono text-rose-gold font-bold tracking-widest rotate-90 origin-right translate-x-4 opacity-90">
                {neg.id}
              </div>
              <div className="absolute top-2 left-4 text-[10px] font-mono text-rose-gold font-bold tracking-widest -rotate-90 origin-left -translate-x-4 opacity-90">
                EXP. {neg.exp}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-cool-silver/40 text-xs">
          <p>© {new Date().getFullYear()} Aneef Photography. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-rose-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rose-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
