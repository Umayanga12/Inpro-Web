import React from 'react';
import { Printer, FileText, Image, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Customise Year Planer',
      image: 'https://images.unsplash.com/photo-1589041127168-9b1915731dc9?auto=format&fit=crop&q=80',
    },
    {
      icon: Image,
      title: 'Table Calender',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80',
    },
    {
      icon: Package,
      title: 'Spiral binding',
      image: 'https://images.unsplash.com/photo-1574279606130-09958dc756f7?auto=format&fit=crop&q=80',
    },
    {
      icon: Printer,
      title: 'Hard Cover making',
      image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80',
    },
    {
      icon: FileText,
      title: 'PVC Stationery',
      image: 'https://images.unsplash.com/photo-1589041127168-9b1915731dc9?auto=format&fit=crop&q=80',
    },
    {
      icon: Image,
      title: 'Laminating',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80',
    },
    {
      icon: Package,
      title: 'Foiling',
      image: 'https://images.unsplash.com/photo-1574279606130-09958dc756f7?auto=format&fit=crop&q=80',
    },
    {
      icon: Printer,
      title: 'Customise Notebook',
      image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80',
    },
    {
      icon: Printer,
      title: 'Cake Boards',
      image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;