'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Building2, 
  ChevronLeft, 
  Cog, 
  MapPin, 
  PhoneCall, 
  ShieldCheck, 
  Tractor, 
  Truck,
  Wrench,
  Clock,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'الحفارات (Excavators)', icon: Tractor, desc: 'حفارات هيدروليكية بمقاسات مختلفة لتلبية كافة احتياجات الحفر العميق.' },
    { title: 'الرافعات البرجية', icon: Building2, desc: 'رافعات عملاقة لمشاريع البناء الشاهقة وأعمال الهياكل الحديدية.' },
    { title: 'الشاحنات القلابة', icon: Truck, desc: 'أسطول متكامل من الشاحنات لنقل الرمل، الحصى، ومخلفات البناء.' },
    { title: 'المعدات الانزلاقية (Bobcat)', icon: Cog, desc: 'معدات صغيرة וمرنة للأماكن الضيقة والأعمال الخفيفة المدمجة.' },
    { title: 'الرافعات الشوكية', icon: Wrench, desc: 'لتنزيل وتحميل البضائع والمعدات الثقيلة بأمان وسرعة.' },
    { title: 'معدات تسوية الطرق', icon: MapPin, desc: 'ممهدات وحادلات لتهيئة وتسوية الأراضي والطرق بأعلى دقة.' },
  ];

  const features = [
    { title: 'دعم على مدار الساعة', desc: 'فريق طوارئ جاهز للتدخل والصيانة 24/7', icon: Clock },
    { title: 'موثوقية وجودة', desc: 'معدات حديثة تخضع لفحص دوري صارم لضمان السلامة.', icon: ShieldCheck },
    { title: 'تغطية شاملة', desc: 'نخدم كافة مناطق المملكة بكل مرونة واحترافية.', icon: MapPin },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center transform rotate-3">
              <Tractor className="text-slate-900 w-8 h-8 -rotate-3" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">رواسي<span className="text-yellow-500">.</span></h1>
              <p className="text-slate-300 text-xs font-medium">للمعدات الثقيلة</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-white font-medium">
            <a href="#home" className="hover:text-yellow-500 transition-colors">الرئيسية</a>
            <a href="#about" className="hover:text-yellow-500 transition-colors">من نحن</a>
            <a href="#services" className="hover:text-yellow-500 transition-colors">أسطولنا</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">اتصل بنا</a>
          </nav>

          <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-2.5 px-6 rounded-full transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] flex items-center gap-2">
            <PhoneCall className="w-4 h-4" />
            <span className="hidden sm:inline">طلب تسعيرة</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Parallax */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900 z-10" />
          <Image 
            src="/saudi_hero.png" 
            alt="Saudi Arabia Skyline heavy equipment" 
            fill 
            className="object-cover object-center"
            priority
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-sm text-yellow-500 font-medium tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              أقوى المشاريع تبدأ من هنا
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            نحرك <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">الطموح</span>،<br />
            ونبني <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">المستقبل</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            أسطول ضخم من أحدث المعدات الثقيلة لدعم مشاريع البنية التحتية والإنشاءات في كافة أنحاء المملكة العربية السعودية.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-[0_10px_30px_rgba(234,179,8,0.3)]">
              استكشف أسطولنا
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium py-4 px-8 rounded-full text-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
              تواصل معنا
              <ChevronLeft className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Animated Background Machinery */}
        <motion.div 
          animate={{ x: [100, -100], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          className="absolute bottom-10 right-[10%] opacity-20 pointer-events-none z-10 hidden lg:block"
        >
          <Tractor className="w-64 h-64 text-yellow-500" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-yellow-600 font-bold tracking-wider mb-2">لماذا رواسي؟</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">احترافية تعزز الثقة</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              نحن ندرك أهمية الوقت والجودة في إنجاز المشاريع. لذلك، صممنا خدماتنا لتقديم تجربة تأجير مرنة، آمنة، وموثوقة تواكب تطلعات شركائنا في جميع أنحاء المملكة.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-yellow-200 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-yellow-500">
                  <feature.icon className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Break Overlay with moving Truck */}
      <section className="h-48 bg-yellow-500 relative flex items-center overflow-hidden border-y border-yellow-600 shadow-inner z-20">
        <motion.div 
          className="absolute whitespace-nowrap opacity-10 font-bold text-[10rem] text-slate-900 leading-none select-none"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        >
          رواسي للمعدات الثقيلة • RAWASI HEAVY EQUIPMENT •
        </motion.div>
        
        <motion.div 
          className="relative z-10 flex items-center gap-4 text-slate-900"
          animate={{ x: ['150vw', '-50vw'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        >
          <Truck className="w-24 h-24" />
          <span className="font-bold text-2xl tracking-widest px-4 border-r-4 border-slate-900">جاري نقل المعدات...</span>
        </motion.div>
      </section>

      {/* Services Fleet */}
      <section id="services" className="py-24 bg-slate-900 relative z-20 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-yellow-500 font-bold tracking-wider mb-2">الأسطول</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6">معدات مصممة للإنجاز</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                بغض النظر عن حجم مشروعك، نوفر لك الآليات المناسبة التي تجمع بين القوة، الكفاءة، وأحدث تقنيات التشغيل.
              </p>
            </div>
            <button className="bg-white/5 hover:bg-yellow-500/20 text-white hover:text-yellow-500 border border-white/10 hover:border-yellow-500/50 py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2 whitespace-nowrap">
              تحميل مستند الأسطول
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-sm hover:border-yellow-500/50 hover:bg-slate-800 transition-all group overflow-hidden relative"
              >
                {/* Decorative background shape */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-yellow-500/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out" />
                
                <div className="flex items-start justify-between mb-6 relative">
                  <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                    <service.icon className="w-7 h-7 text-yellow-500 group-hover:text-slate-900 transition-colors" />
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-slate-600 group-hover:text-yellow-500/50 transition-colors" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 relative">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm relative">{service.desc}</p>
                
                <div className="mt-8 pt-6 border-t border-slate-700/50 flex items-center justify-between text-yellow-500 group-hover:text-yellow-400 font-medium cursor-pointer">
                  <span>طلب المعدة</span>
                  <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-yellow-500/20">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 drop-shadow-sm">مستعد لبدء مشروعك؟</h2>
              <p className="text-slate-800 text-lg md:text-xl font-medium mb-10">
                تواصل مع خبرائنا الآن للحصول على استشارة مجانية وعرض سعر مخصص يناسب متطلباتك.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-full text-lg transition-all hover:shadow-xl flex items-center justify-center gap-3">
                  <PhoneCall className="w-5 h-5" />
                  <span>9200 12345</span>
                </button>
                <button className="bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 px-10 rounded-full text-lg transition-all hover:shadow-xl shadow-sm">
                  راسلنا عبر واتساب
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center transform rotate-3">
                  <Tractor className="text-slate-900 w-6 h-6 -rotate-3" />
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight">رواسي<span className="text-yellow-500">.</span></h2>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                الخيار الأول في المملكة العربية السعودية لتأجير المعدات الثقيلة بمختلف أنواعها، بخبرة تمتد لأكثر من 15 عاماً في دعم مشاريع البنية التحتية.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">الأسطول المتوفر</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">الشروط والأحكام</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">سياسة الخصوصية</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">تواصل معنا</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span>الرياض، حي العليا، المملكة العربية السعودية</span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span dir="ltr">+966 9200 12345</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} شركة رواسي للمعدات الثقيلة. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
