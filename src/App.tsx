/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Truck, 
  Package, 
  Home, 
  Building, 
  ShieldCheck, 
  Clock, 
  ThumbsUp, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Star,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '首頁', href: '/' },
    { name: '服務項目', href: '/services' },
    { name: '服務流程', href: '/process' },
    { name: '案例說明', href: '/cases' },
    { name: '專業團隊', href: '/team' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <Truck size={28} />
              </div>
              <span className="font-black text-2xl text-gray-900 tracking-tight">安心搬家</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`font-medium transition-colors ${location.pathname === link.href ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-bold transition-colors shadow-lg shadow-accent-500/30"
            >
              免費估價
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === link.href ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="block w-full text-center mt-4 bg-accent-500 text-white px-6 py-3 rounded-md font-bold"
              onClick={() => setIsOpen(false)}
            >
              免費估價
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/movinghouse/1920/1080" 
          alt="Moving House" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6">
              超過 10,000 個家庭的信賴選擇
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-2">
              讓搬家變得<br/>
              <span className="text-primary-600">輕鬆、簡單、安心</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              專業包裝、細心搬運、準時送達。我們提供全方位的搬家服務，讓您無後顧之憂地迎接新生活。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-primary-600/30 hover:-translate-y-1"
              >
                立即預約估價
                <ChevronRight size={20} />
              </Link>
              <a 
                href="tel:0800123456" 
                className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-primary-600 hover:text-primary-600 text-gray-700 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                <Phone size={20} />
                0800-123-456
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-white object-cover" 
                  src={`https://picsum.photos/seed/face${i}/100/100`} 
                  alt="Customer"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="flex text-accent-500 mb-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-medium text-gray-600">Google 商家 4.9 星好評</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <ShieldCheck size={28} />, title: '損壞理賠保證', desc: '完善的理賠制度，讓您的貴重物品更有保障。' },
    { icon: <Clock size={28} />, title: '準時不遲到', desc: '嚴格控管時間，依約定時間準時抵達為您服務。' },
    { icon: <ThumbsUp size={28} />, title: '價格透明公開', desc: '免費到府估價，簽訂合約後絕不隨意加價。' },
  ];

  return (
    <section className="py-8 bg-white relative z-20 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 text-primary-600 p-3 rounded-full mb-3">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Home size={40} />, title: '家庭搬家', desc: '提供紙箱、包材，專業師傅細心打包搬運，讓您輕鬆入厝。', image: 'https://picsum.photos/seed/family/600/400' },
    { icon: <Building size={40} />, title: '企業廠辦', desc: '辦公設備、OA屏風拆裝、機房設備搬遷，不影響公司營運。', image: 'https://picsum.photos/seed/office/600/400' },
    { icon: <Package size={40} />, title: '精緻包裝', desc: '易碎品、藝術品、貴重家電提供客製化防護包裝服務。', image: 'https://picsum.photos/seed/packing/600/400' },
    { icon: <Truck size={40} />, title: '廢棄物清運', desc: '搬家產生之大型廢棄傢俱、垃圾代為處理清運。', image: 'https://picsum.photos/seed/truck/600/400' },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">多元化專業服務項目</h3>
          <p className="text-lg text-gray-600">針對不同客群需求，提供量身打造的搬遷方案，滿足您所有的搬家大小事。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-8 bg-white p-4 rounded-xl shadow-lg text-primary-600 z-20">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: '01', title: '線上/電話諮詢', desc: '了解您的搬遷需求、物品數量及兩地環境。' },
    { num: '02', title: '免費到府估價', desc: '專人實地勘估，提供準確報價並簽訂合約。' },
    { num: '03', title: '提供包裝耗材', desc: '提前送達紙箱、氣泡紙等包材供您整理。' },
    { num: '04', title: '專業搬運作業', desc: '約定當日準時抵達，細心包裝並安全搬運。' },
    { num: '05', title: '定位與點交', desc: '到達新址後依指示定位大型傢俱，確認無誤後結帳。' },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">標準化服務流程</h3>
          <p className="text-lg text-gray-600">五個簡單步驟，讓您的搬家過程井然有序，不再手忙腳亂。</p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center text-2xl font-black text-primary-600 shadow-lg mb-6 relative">
                  {step.num}
                  {/* Arrow for mobile */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-8 text-gray-300">
                      <ChevronRight className="rotate-90" />
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Cases = () => {
  const cases = [
    {
      image: 'https://picsum.photos/seed/case1/800/600',
      title: '科技公司百人辦公室搬遷',
      tags: ['企業搬遷', 'OA拆裝'],
      desc: '利用週末兩天完成 150 人辦公室搬遷，包含機房設備安全轉移，週一無縫接軌正常營運。'
    },
    {
      image: 'https://picsum.photos/seed/case2/800/600',
      title: '信義區豪宅精緻搬家',
      tags: ['家庭搬家', '精緻包裝'],
      desc: '百萬名床、大型藝術品及水晶吊燈專業防護包裝，全程無損壞，深獲客戶肯定。'
    },
    {
      image: 'https://picsum.photos/seed/case3/800/600',
      title: '跨縣市透天厝搬遷',
      tags: ['長途搬家', '廢棄物清運'],
      desc: '台北至台中長途搬遷，協助清理舊家大型廢棄傢俱，提供一條龍完整服務。'
    }
  ];

  return (
    <section id="cases" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary-400 font-bold tracking-wider uppercase text-sm mb-2">Success Stories</h2>
            <h3 className="text-3xl md:text-4xl font-black mb-6">成功案例分享</h3>
            <p className="text-lg text-gray-400">每一次的搬遷都是一份信任的託付，來看看我們如何為客戶圓滿達成任務。</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-primary-400 hover:text-primary-300 font-bold transition-colors">
            查看更多案例 <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-primary-400 font-bold">
            查看更多案例 <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    { name: '陳建宏', role: '搬運部經理', exp: '15年經驗', image: 'https://picsum.photos/seed/man1/400/400' },
    { name: '林志明', role: '資深領班', exp: '12年經驗', image: 'https://picsum.photos/seed/man2/400/400' },
    { name: '王大偉', role: '包裝達人', exp: '8年經驗', image: 'https://picsum.photos/seed/man3/400/400' },
    { name: '張雅婷', role: '客服專員', exp: '5年經驗', image: 'https://picsum.photos/seed/woman1/400/400' },
  ];

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">專業可靠的服務團隊</h3>
          <p className="text-lg text-gray-600">我們的師傅皆經過嚴格訓練，具備良民證，不吃檳榔不酗酒，給您最安心的服務品質。</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary-50 group-hover:border-primary-100 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
              <p className="text-primary-600 font-medium mb-2">{member.role}</p>
              <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                {member.exp}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 lg:p-16 text-white flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-black mb-6">準備好開始搬家了嗎？</h3>
              <p className="text-primary-100 text-lg mb-10 leading-relaxed">
                填寫右方表單，或直接透過以下方式聯繫我們。我們的客服專員將在 24 小時內與您聯繫，提供免費估價服務。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-500 p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-primary-200 text-sm">免付費專線</p>
                    <p className="text-xl font-bold">0800-123-456</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary-500 p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-primary-200 text-sm">電子信箱</p>
                    <p className="text-xl font-bold">service@reliablemovers.com.tw</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary-500 p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-primary-200 text-sm">總公司地址</p>
                    <p className="text-xl font-bold">台北市信義區信義路五段7號</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-12 lg:p-16">
              <h4 className="text-2xl font-bold text-gray-900 mb-8">線上預約估價</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="王小明" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">聯絡電話</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="0912-345-678" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">遷出地址</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="台北市大安區..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">遷入地址</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="新北市板橋區..." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">預計搬遷日期</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">其他需求備註</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none" placeholder="例如：有大型鋼琴、需要打包服務..."></textarea>
                </div>

                <button type="submit" className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-accent-500/30 text-lg">
                  送出預約表單
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary-600 text-white p-1.5 rounded-md">
                <Truck size={20} />
              </div>
              <span className="font-black text-xl text-white tracking-tight">安心搬家</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-md">
              我們致力於提供最優質、安全、可靠的搬家服務。讓每一次的搬遷，都是一段美好新生活的開始。
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">快速連結</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">服務項目</Link></li>
              <li><Link to="/process" className="hover:text-primary-400 transition-colors">服務流程</Link></li>
              <li><Link to="/cases" className="hover:text-primary-400 transition-colors">案例說明</Link></li>
              <li><Link to="/team" className="hover:text-primary-400 transition-colors">專業團隊</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">服務時間</h5>
            <ul className="space-y-2 text-sm">
              <li>週一至週五: 08:00 - 20:00</li>
              <li>週六至週日: 09:00 - 18:00</li>
              <li>國定假日: 歡迎來電洽詢</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} 安心搬家 Reliable Movers. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Services />
  </>
);

const ServicesPage = () => <div className="pt-20"><Services /></div>;
const ProcessPage = () => <div className="pt-20"><Process /></div>;
const CasesPage = () => <div className="pt-20"><Cases /></div>;
const TeamPage = () => <div className="pt-20"><Team /></div>;
const ContactPage = () => <div className="pt-20"><Contact /></div>;

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white selection:bg-primary-200 selection:text-primary-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

