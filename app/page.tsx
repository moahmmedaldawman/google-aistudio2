'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Building2, 
  ChevronLeft, 
  MapPin, 
  PhoneCall, 
  ShieldCheck, 
  Truck,
  Wrench,
  Clock,
  CheckCircle2,
  Mail,
  ArrowUpRight,
  HardHat,
  Construction
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const equipmentList = [
    { 
      title: 'كرين متحرك (Mobile Crane)', 
      image: 'https://picsum.photos/seed/crane/800/600',
      desc: 'كرينات متحركة بقدرات رفع عالية وأداء احترافي، مناسبة للمشاريع الإنشائية والصناعية والبنية التحتية. متوفرة بأحجام مختلفة تلبي جميع متطلبات مشاريعكم.' 
    },
    { 
      title: 'رافعة شوكية (Forklift) - عند الطلب', 
      image: 'https://picsum.photos/seed/forklift/800/600',
      desc: 'رافعات شوكية متعددة الاستخدامات، مثالية لنقل وترتيب المواد في المستودعات والمشاريع الصناعية. متوفرة عند الطلب بحسب احتياج مشروعكم.' 
    },
    { 
      title: 'سيزر لفت (Scissor Lift)', 
      image: 'https://picsum.photos/seed/scissor/800/600',
      desc: 'منصات رفع مقصية آمنة ومتينة، مثالية لأعمال الصيانة والتركيب والتشطيب على الارتفاعات. توفر سطحاً واسعاً ومستقراً للعمل بأمان.' 
    },
    { 
      title: 'مان لفت (Manlift)', 
      image: 'https://picsum.photos/seed/manlift/800/600',
      desc: 'منصات رفع مفصلة للوصول إلى المناطق العالية بمرونة فائقة، مناسبة لأعمال التشطيب والصيانة والتركيب في الأماكن الضيقة والمواقع المختلفة.' 
    },
    { 
      title: 'بوم تراك (Boom Truck)', 
      image: 'https://picsum.photos/seed/boomtruck/800/600',
      desc: 'شاحنات رفع متعددة الاستخدامات ومتحركة، تجمع بين إمكانية النقل والرفع في آن واحد، مثالية لمشاريع البنية التحتية وتركيب المعدات الثقيلة.' 
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50">
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A1137]/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#D49D34] rounded-lg flex items-center justify-center font-black text-[#0A1137] text-xl">
              WR
            </div>
            <div>
              <h1 className={`text-2xl font-black ${isScrolled ? 'text-white' : 'text-slate-900'} drop-shadow-md tracking-tight transition-colors`}>وهج الرواد<span className="text-[#D49D34]">.</span></h1>
            </div>
          </div>
          
          <nav className={`hidden lg:flex items-center gap-8 ${isScrolled ? 'text-white' : 'text-slate-800'} font-medium transition-colors`}>
            <a href="#home" className="hover:text-[#D49D34] transition-colors">الرئيسية</a>
            <a href="#about" className="hover:text-[#D49D34] transition-colors">حول</a>
            <a href="#vision" className="hover:text-[#D49D34] transition-colors">الرسالة والرؤيا</a>
            <a href="#services" className="hover:text-[#D49D34] transition-colors">خدماتنا</a>
            <a href="#equipment" className="hover:text-[#D49D34] transition-colors">معداتنا</a>
            <a href="#contact" className="hover:text-[#D49D34] transition-colors">تواصل معنا</a>
          </nav>

          <button className="bg-[#D49D34] hover:bg-[#C48D2A] text-[#0A1137] font-bold py-2.5 px-6 rounded-full transition-all hover:shadow-[0_0_20px_rgba(212,157,52,0.4)] flex items-center gap-2">
            <PhoneCall className="w-4 h-4" />
            <span className="hidden sm:inline" dir="ltr">+966 506696691</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Parallax */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100/90 via-slate-100/70 to-slate-200/90 z-10" />
          <Image 
            src="https://picsum.photos/seed/trucks/1920/1080" 
            alt="Wahj Al Ruwad Heavy Equipment" 
            fill 
            className="object-cover object-center opacity-30 grayscale blur-[2px]"
            priority
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center pt-24">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-[#0A1137] font-bold tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D49D34] animate-pulse" />
                تأجير المعدات الثقيلة
              </div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#0A1137]"
            >
              حلول رفع <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#D49D34] to-[#B37A1D]">موثوقة وآمنة</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-lg md:text-2xl text-slate-700 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
            >
              مرحبًا بكم في وهج الرواد لتأجير المعدات الثقيلة، نوفر حلول احترافية في تأجير معدات الرفع بأعلى معايير الجودة والأمان لخدمة مشاريعكم بكفاءة وموثوقية.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#contact" className="bg-[#0A1137] hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-xl">
                اطلب تسعيرة الآن
              </a>
              <a href="#services" className="bg-white hover:bg-slate-50 border border-slate-200 text-[#0A1137] font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
                استكشف خدماتنا
                <ChevronLeft className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#D49D34] font-bold tracking-wider mb-2">حول وهج الرواد</h2>
              <h3 className="text-3xl md:text-5xl font-black text-[#0A1137] mb-6">المقاولات العامة وحلول الرفع</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                نوفّر حلول احترافية في تأجير المعدات الثقيلة لخدمة مشاريع البناء والإنشاءات، مع الالتزام بأعلى معايير السلامة والجودة. تشمل معداتنا الكرينات المتحركة، الرافعات الشوكية، السيزر لفت، المان لفت، والبوم تراك، بخيارات تأجير مرنة وخدمة ميدانية موثوقة.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 items-start">
                  <ShieldCheck className="w-10 h-10 text-[#D49D34] mb-4" />
                  <h4 className="text-xl font-bold text-[#0A1137] mb-2">الجودة العالية</h4>
                  <p className="text-slate-500 text-sm">أحدث المعدات وأفضلها كفاءة.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 items-start">
                  <CheckCircle2 className="w-10 h-10 text-[#D49D34] mb-4" />
                  <h4 className="text-xl font-bold text-[#0A1137] mb-2">الكفاءة الموثوقية</h4>
                  <p className="text-slate-500 text-sm">خدمات متكاملة وحلول مبتكرة.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/construction/800/1000" 
                alt="Construction equipment" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1137]/80 to-transparent" />
              <div className="absolute bottom-10 right-10 left-10">
                <div className="bg-[#D49D34] w-20 h-2 rounded mb-6" />
                <h3 className="text-3xl font-bold text-white mb-2">شركة وهج الرواد</h3>
                <p className="text-slate-200">الخيار الأمثل لمشاريعك.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-24 bg-[#0A1137] relative z-20 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D49D34]/10 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
          <h2 className="text-[#D49D34] font-bold tracking-wider mb-2">الرسالة والرؤيا</h2>
          <h3 className="text-3xl md:text-5xl font-black mb-12">التزامنا تجاه عملائنا</h3>

          <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-3xl backdrop-blur-md max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-300 font-light">
              تلتزم شركة <span className="text-[#D49D34] font-bold">وهج الرواد</span> بتقديم خدماتها في مجال تأجير المعدات الثقيلة لجميع العملاء، بتوفير أفضل المعدات ذات الكفاءة العالية واستخدام معدات معتمدة من الموردين العالميين الموثوقين، ونعمل جاهدين بتطوير مستمر لتقديم أفضل الخدمات وتحقيق رضا عملائنا.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section id="services" className="py-24 bg-slate-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#D49D34] font-bold tracking-wider mb-2">خدماتنا</h2>
            <h3 className="text-3xl md:text-5xl font-black text-[#0A1137]">كل ما تحتاجه لإنجاز عملك</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { t: 'تأجير الكرينات المتحركة' },
              { t: 'تأجير الرافعات الشوكية' },
              { t: 'تأجير معدات رفع العمال' },
              { t: 'تأجير شاحنه ونش - Boom Truck' },
              { t: 'تأجير كرين متحرك سلة' },
            ].map((s, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 px-10 shadow-sm flex items-center gap-4 hover:border-[#D49D34] transition-colors">
                <div className="w-10 h-10 bg-[#0A1137]/5 rounded-full flex items-center justify-center">
                  <HardHat className="w-5 h-5 text-[#D49D34]" />
                </div>
                <span className="text-lg font-bold text-[#0A1137]">{s.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Gallery */}
      <section id="equipment" className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#D49D34] font-bold tracking-wider mb-2">معداتنا</h2>
              <h3 className="text-3xl md:text-5xl font-black text-[#0A1137] mb-6">أسطول متكامل وجاهز</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hover:border-[#D49D34]/50 transition-all flex flex-col h-full hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-black text-[#0A1137] mb-4">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-[#D49D34] font-bold cursor-pointer hover:text-[#C48D2A]">
                    <span>طلب المعدة</span>
                    <ArrowUpRight className="w-5 h-5 -scale-x-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section id="contact" className="py-24 bg-[#0A1137] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="text-white">
              <h2 className="text-[#D49D34] font-bold tracking-wider mb-2">تواصل معنا</h2>
              <h3 className="text-3xl md:text-5xl font-black mb-6">تأجير المعدات بأسعار تنافسية</h3>
              <p className="text-slate-400 mb-12 text-lg">
                نسعد بتواصلك معنا لتلبية كافة احتياجات مشروعك من المعدات الثقيلة، بأفضل جودة وأنسب سعر.
              </p>
              
              <ul className="space-y-8">
                <li className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <PhoneCall className="w-6 h-6 text-[#D49D34]" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">الهاتف / WhatsApp</p>
                    <p className="text-xl font-bold" dir="ltr">+966-506696691</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <Mail className="w-6 h-6 text-[#D49D34]" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">البريد الإلكتروني</p>
                    <p className="text-xl font-bold" dir="ltr">info@wrco.sa</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <Clock className="w-6 h-6 text-[#D49D34]" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">ساعات العمل</p>
                    <p className="text-xl font-bold">السبت - الخميس (08:00 - 19:00)</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <MapPin className="w-6 h-6 text-[#D49D34]" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">الموقع الجغرافي</p>
                    <p className="text-xl font-bold" dir="ltr">24.632561, 46.807738</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Form */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-black text-[#0A1137] mb-8">طلب عرض سعر</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">الاسم</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D49D34] focus:ring-1 focus:ring-[#D49D34] transition-all" placeholder="الاسم الكامل" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">الهاتف</label>
                  <input type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D49D34] focus:ring-1 focus:ring-[#D49D34] transition-all" placeholder="رقم الجوال" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">البريد الإلكتروني</label>
                  <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D49D34] focus:ring-1 focus:ring-[#D49D34] transition-all" placeholder="example@mail.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">الرسالة</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D49D34] focus:ring-1 focus:ring-[#D49D34] transition-all" placeholder="تفاصيل طلبك..."></textarea>
                </div>
                <button type="button" className="w-full bg-[#0A1137] hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl mt-4">
                  إرسال الطلب
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050A20] pt-20 pb-10 border-t border-white/5 z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#D49D34] rounded-lg flex items-center justify-center font-black text-[#0A1137] text-lg">
                  WR
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight">شركة وهج الرواد للمقاولات</h2>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
                الخيار الأمثل لمشاريع المقاولات وتأجير المعدات الثقيلة الموثوقة.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-[#D49D34] transition-colors">الرئيسية</a></li>
                <li><a href="#about" className="hover:text-[#D49D34] transition-colors">حول وهج الرواد</a></li>
                <li><a href="#vision" className="hover:text-[#D49D34] transition-colors">الرسالة والرؤيا</a></li>
                <li><a href="#services" className="hover:text-[#D49D34] transition-colors">خدماتنا</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">المزيد</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#equipment" className="hover:text-[#D49D34] transition-colors">العملاء</a></li>
                <li><a href="#equipment" className="hover:text-[#D49D34] transition-colors">المعرض</a></li>
                <li><a href="#equipment" className="hover:text-[#D49D34] transition-colors">المعدات</a></li>
                <li><a href="#contact" className="hover:text-[#D49D34] transition-colors">تواصل معنا</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
            <p>حقوق النشر © {new Date().getFullYear()} جميع الحقوق محفوظة - شركة وهج الرواد للمقاولات</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
