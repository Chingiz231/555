import React, { useState, useEffect } from 'react';
import { Phone, Calculator, MessageSquare, MapPin, Mail, Clock, Package, Truck, ShieldCheck, Warehouse, Instagram, Train, Navigation, Star, Users, Award, TrendingUp, Box, FileCheck, Forklift, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fromCity, setFromCity] = useState('Алматы');
  const [toCity, setToCity] = useState('Актау');
  const [weight, setWeight] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'tariffs', 'addresses', 'contacts'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculatePrice = () => {
    const pricePerKg = 30;
    const pricePerCubicMeter = 9000;
    const price = (weight * pricePerKg) + (volume * pricePerCubicMeter);
    setCalculatedPrice(price);
  };

  const cities = ['Актау', 'Атырау', 'Актобе'];

  const tariffs = [
    { from: 'Алматы', to: 'Актау', price: 'от 30 тг/кг' },
    { from: 'Алматы', to: 'Атырау', price: 'от 30 тг/кг' },
    { from: 'Алматы', to: 'Актобе', price: 'от 30 тг/кг' }
  ];

  const addresses = [
    { 
      city: 'Алматы', 
      address: 'станция Алматы 1, жд тупик 31',
      mapLink: 'https://2gis.kz/almaty/firm/70000001019367952'
    },
    { 
      city: 'Атырау', 
      address: 'Проспект Аззаттык 116, бывшая торговая база',
      mapLink: 'https://2gis.kz/atyrau/search/Проспект%20Аззаттык%20116'
    },
    { 
      city: 'Актау', 
      address: 'База ОРСа, Склад 5000/1',
      mapLink: 'https://2gis.kz/aktau'
    },
    { 
      city: 'Актобе', 
      address: '41-ый разъезд, 597',
      mapLink: 'https://2gis.kz/aktobe'
    }
  ];

  const contacts = [
    { title: 'Алматы склад', phone: '8 700 422 88 81', name: 'Жанна' },
    { title: 'Алматы-Актау', phone: '8 778 442 80 33', name: 'Нуржан' },
    { title: 'Алматы-Атырау', phone: '8 701 872 66 88', name: 'Галина' },
    { title: 'Алматы-Актобе', phone: '8 771 216 47 07', name: 'Жаксат' },
    { title: 'Китай-Казахстан', phone: '8 702 782 29 60', name: 'Айдос' }
  ];

  const services = [
    'погрузочно-разгрузочные работы',
    'комплектация и маркировка грузов',
    'обработка товара в соответствии с требованиями Заказчика',
    'перевозка грузов с формированием маршрутов',
    'экспедирование груза',
    'хранение и размещение продукции',
    'сопутствующие услуги для транспортировки груза Заказчика'
  ];

  const testimonials = [
    {
      name: "ТОО «KazMetalProm»",
      text: "Сотрудничаем с ABKTRANS уже более 2 лет. Всегда точная и быстрая доставка, профессиональный подход к работе.",
      position: "Директор по логистике"
    },
    {
      name: "ТОО «АлматыСтрой»",
      text: "Надежный партнер в сфере грузоперевозок. Особенно ценим их оперативность и качество обслуживания.",
      position: "Генеральный директор"
    },
    {
      name: "ТОО «TechnoPlus»",
      text: "Благодарим за отличный сервис и индивидуальный подход к каждой перевозке.",
      position: "Руководитель отдела снабжения"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1e40af] to-[#22c55e] text-white fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="flex items-center space-x-3 text-lg mb-4 md:mb-0"
          >
            <Phone size={24} className="text-white" />
            <span className="font-semibold">+7-700-422-88-81</span>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#addresses" 
              className="flex items-center space-x-2 hover:text-white/80 transition-colors"
            >
              <MapPin size={24} />
              <span className="font-medium">Наши адреса</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="flex items-center space-x-2 hover:text-white/80 transition-colors"
            >
              <Mail size={24} />
              <span className="font-medium">info@abktrans.kz</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://www.instagram.com/abktrans.kz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 hover:text-white/80 transition-colors"
            >
              <Instagram size={24} />
              <span className="font-medium">Instagram</span>
            </motion.a>
          </div>
        </div>
      </header>

      {/* Navigation with logo */}
      <nav className="bg-white shadow-lg fixed w-full top-[88px] md:top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-4 md:mb-0"
            >
              <img src="/logo.png" alt="ABKTRANS" className="h-12" />
            </motion.div>
            <div className="flex flex-wrap justify-center md:flex-row space-x-4 md:space-x-8">
              {[
                { name: 'Главная', id: 'home' },
                { name: 'Услуги', id: 'services' },
                { name: 'Тарифы', id: 'tariffs' },
                { name: 'Контакты', id: 'contacts' }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  whileHover={{ scale: 1.1 }}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-48 md:pt-36">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div 
          className="h-[600px] bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Железнодорожные перевозки по Казахстану
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white mb-12 max-w-2xl"
            >
              Надежная и быстрая доставка грузов с города Алматы до городов Актау, Атырау, Актобе
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a 
                href="https://wa.me/77004228881" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gradient-button bg-[#25D366]"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-3 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Связаться через WhatsApp
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="gradient-button"
              >
                <Package className="mr-3" size={24} />
                Рассчитать доставку
              </button>
              <a 
                href="tel:+77004228881" 
                className="gradient-button"
              >
                <Phone className="mr-3" size={24} />
                Позвонить нам
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp size={32} />, number: "1000+", label: "Успешных доставок" },
              { icon: <Users size={32} />, number: "500+", label: "Довольных клиентов" },
              { icon: <Award size={32} />, number: "5", label: "Лет на рынке" },
              { icon: <Star size={32} />, number: "98%", label: "Положительных отзывов" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-gradient-to-br from-[#1e40af]/5 to-[#22c55e]/5 rounded-xl"
              >
                <div className="text-[#1e40af] mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#1e40af] mb-2">{stat.number}</div>
                <div className="text-gray-600 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
          <div className="flex items-center">
            <Package className="text-white mr-3" size={28} />
            <h2 className="text-2xl font-bold text-white">Расчет стоимости доставки</h2>
          </div>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="text-white hover:text-white/80 text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="calculator-label">Откуда</label>
              <select 
                className="calculator-input"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                disabled
              >
                <option value="Алматы">Алматы</option>
              </select>
            </div>

            <div>
              <label className="calculator-label">Куда</label>
              <select 
                className="calculator-input"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
              >
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="calculator-label">Вес груза (кг)</label>
              <input 
                type="number"
                className="calculator-input"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                min="0"
                placeholder="30 тг за кг"
              />
            </div>

            <div>
              <label className="calculator-label">Объем груза (м³)</label>
              <input 
                type="number"
                className="calculator-input"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                min="0"
                placeholder="9000 тг за м³"
              />
            </div>
          </div>

          <div>
            <label className="calculator-label">Количество мест</label>
            <input 
              type="number"
              className="calculator-input"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculatePrice}
            className="w-full bg-white text-[#1e40af] font-bold py-4 px-6 rounded-lg flex items-center justify-center hover:bg-white/90 transition-all duration-300 text-lg"
          >
            <Calculator className="mr-3" size={24} />
            Рассчитать стоимость
          </motion.button>

          {calculatedPrice !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 bg-white rounded-lg"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <p className="text-[#1e40af] text-lg mb-2">Маршрут:</p>
                  <p className="font-semibold text-[#1e40af] text-xl">{fromCity} → {toCity}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-[#1e40af] text-lg mb-2">Стоимость:</p>
                  <p className="text-3xl font-bold text-[#1e40af]">{calculatedPrice.toLocaleString()} тг</p>
                </div>
              </div>
              <div className="mt-4 text-base text-gray-600">
                <p className="font-semibold mb-2">Расчет стоимости:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Вес: {weight} кг × 30 тг = {(weight * 30).toLocaleString()} тг</li>
                  <li>Объем: {volume} м³ × 9000 тг = {(volume * 9000).toLocaleString()} тг</li>
                  <li>Количество мест: {quantity}</li>
                </ul>
                <p className="mt-4 text-[#1e40af] text-sm">* Окончательная стоимость может отличаться. Для точного расчета свяжитесь с нами.</p>
              </div>
            </motion.div>
          )}
        </div>
      </Modal>

      {/* Services Section */}
      <section id="services" className="feature-section bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Наши услуги
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Train size={32} />,
                title: "Железнодорожные перевозки",
                description: "Перевозка грузов по железной дороге с города Алматы до городов Актау, Атырау, Актобе."
              },
              {
                icon: <Forklift size={32} />,
                title: "Погрузочно-разгрузочные работы",
                description: "Профессиональная погрузка и разгрузка грузов любой сложности."
              },
              {
                icon: <Globe size={32} />,
                title: "Экспедирование груза",
                description: "Полное сопровождение груза от отправителя до получателя."
              },
              {
                icon: <Box size={32} />,
                title: "Хранение и размещение",
                description: "Временное хранение грузов на наших складах с соблюдением всех норм."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-[#1e40af] hover:border-[#22c55e]"
              >
                <div className="bg-gradient-to-br from-[#1e40af] to-[#22c55e] w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white transform transition-transform duration-300 hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1e40af] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#1e40af] mb-8 text-center">Полный перечень услуг</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Package size={24} />,
                  title: "Комплектация и маркировка",
                  description: "Профессиональная подготовка грузов к транспортировке"
                },
                {
                  icon: <FileCheck size={24} />,
                  title: "Обработка по требованиям",
                  description: "Индивидуальный подход к требованиям каждого клиента"
                },
                {
                  icon: <Train size={24} />,
                  title: "Формирование маршрутов",
                  description: "Оптимальное планирование железнодорожных перевозок"
                },
                {
                  icon: <Globe size={24} />,
                  title: "Экспедирование",
                  description: "Полное сопровождение грузов по всему маршруту"
                },
                {
                  icon: <Box size={24} />,
                  title: "Складское хранение",
                  description: "Ответственное хранение грузов любого объема"
                },
                {
                  icon: <ShieldCheck size={24} />,
                  title: "Дополнительные услуги",
                  description: "Индивидуальные решения под ваши задачи"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1e40af] hover:border-[#22c55e]"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-[#1e40af] to-[#22c55e] p-3 rounded-lg text-white mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#1e40af]">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Отзывы наших клиентов
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-[#1e40af]">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="feature-section bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Тарифы
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <motion.div 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#1e40af] to-[#22c55e] p-8 rounded-xl shadow-xl text-white"
              >
                <Train className="mb-4" size={32} />
                <h3 className="text-2xl font-semibold mb-4">
                  {tariff.from} - {tariff.to}
                </h3>
                <p className="text-3xl font-bold">{tariff.price}</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 w-full bg-white text-[#1e40af] font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
                >
                  <Calculator className="mr-2" size={20} />
                  Рассчитать стоимость
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Addresses Section */}
      <section id="addresses" className="feature-section bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Адреса складов
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addresses.map((address, index) => (
              <motion.div 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#1e40af] hover:border-[#22c55e] transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="text-[#1e40af] mr-2" size={24} />
                  <h3 className="text-xl font-semibold text-[#1e40af]">{address.city}</h3>
                </div>
                <p className="text-gray-600 mb-4">{address.address}</p>
                <a 
                  href={address.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#22c55e] hover:text-[#1e40af] transition-colors duration-300"
                >
                  <Navigation className="mr-2" size={20} />
                  Открыть в 2ГИС
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="feature-section bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Контакты
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <motion.div 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#1e40af] hover:border-[#22c55e] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#1e40af] mb-2">{contact.title}</h3>
                <p className="text-gray-600 mb-4">{contact.name}</p>
                <a 
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center text-[#22c55e] hover:text-[#1e40af] transition-colors duration-300 text-lg font-semibold"
                >
                  <Phone className="mr-2" size={20} />
                  {contact.phone}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-[#1e40af] to-[#22c55e] p-8 rounded-xl shadow-xl text-white"
          >
            <h3 className="text-2xl font-semibold mb-4">График работы:</h3>
            <div className="flex items-center text-lg">
              <Clock className="mr-3" size={24} />
              <div>
                <p>Пн-Сб: 09:00-17:00</p>
                <p>Выходной: Воскресенье</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e40af] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">О компании</h4>
              <p>ABKTRANS - ваш надежный партнер в сфере железнодорожных перевозок по Казахстану.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-[#22c55e] transition-colors">Услуги</a></li>
                <li><a href="#tariffs" className="hover:text-[#22c55e] transition-colors">Тарифы</a></li>
                <li><a href="#contacts" className="hover:text-[#22c55e] transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <a href="tel:+77004228881" className="flex items-center hover:text-[#22c55e] transition-colors">
                  <Phone className="mr-2" size={20} />
                  +7 700 422 88 81
                </a>
                <a href="mailto:info@abktrans.kz" className="flex items-center hover:text-[#22c55e] transition-colors">
                  <Mail className="mr-2" size={20} />
                  info@abktrans.kz
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>© {new Date().getFullYear()} ABKTRANS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;