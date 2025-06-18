// src/components/sections/TrustIndicatorsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Dummy logo data - replace with your actual image paths or a data array
const logos = [
  { alt: "Datawars logo", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuANoxchrbx9LqIxA6PzrGsXtgQgmlTKm8ABakvrYpqKg473LqOXCh3fUkHjbzLtVZiEVdlnb8zFrOMPV0IGWy1sSAu--VcqUXnNPbKgh-JKremfNlrC25kB81avC4SHln5fX9JjRf8nkh1xHr_xffmPG_Bl3s13UVNhxysa2rGu6CxYTJTvSZBZFfsONIye1U9vRK4kPzrTLWhMl1Oj0BHKEezTTPIQGfS0I8OyXhkbfD2QlQlMDXCoPdjkvM4q1RuWLTLqoKzmuH5G", heightClass: "h-8" },
  { alt: "Antern logo", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY0ixffo7zS6o4OgBtveb_3Dp1Mi39WCEcH4fCSmPD2qCgvTFK1Qf6Pw4CF7tzfoaCKtfB932HLCxODjdMDxzSU_XZPl5JkdzmGFQNoPTNJ32IC-WfGeuIqJGo1a6w1qKIr3iRnUPwG8a6KcwV_ET1iDVqLZuQRt4N8m9FllAcDelYTYtjRzC8zJBfzzCgt-wwalC0WPaO3ilgna05qHNx9fKok84KFmkXS-foCzl8BK1hKRgnfYvi_QtY4__D-ZllxRtSM8goWs8-", heightClass: "h-8" },
  { alt: "Cialdini Institute logo", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxqd3dg9ckao5rmgvTLmDqwI7y4Qnd6Ii0eg62dqgluHjeOmGCFgmLZMzVkVcwQIWVklfJaOtddHSN5QdAGfaNu5oM4M67txxGbFlv036VqCncnUYUhqkzKnnQ_8Br-TcLYAZZuwwSCD6a8WAp2y-h39IkGc81we9W8Jarmx32DVJ3G4_3HY3BFgGkA2Autyr7pzYVPuoSWlg4xaVj-yVJnX7gW1Q2E0cauCWJDMIf_YbajjfHcNBhKtQDlhjds_yKRvMOS45uFRnk", heightClass: "h-8" },
  { alt: "Growth School logo", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4exDvFIHvw7wvA8fSeuNM-6G41iQCkKm8c1y8zi8bhXbskKeeTbn-5hB6ZZHHQamdy8yOEViV13LVdd5SxqmI6CmcCw_NRGti-3Wz1PptleOKbQ0sQJcm_571RzTk0ekLBJjezibYw7xC1rIGAowbOHW8nMhbeYivv4wBU-96-VJwu9ML-X9ItwE51xdTtryKH6lgQLqKlU4P-7FO54v9RdWzyTtk_kC9bjSVX8AkQbrw7DK8y8xM1EWmbndleFYUy8lKtUt9TLbk", heightClass: "h-10" },
  { alt: "MyStudia logo", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJlD_4JytxrUgLUPKud-pwzdGifIl7Vz4isLIMO-SSnkGxWGKccA6W3yrOrw2zcX4m76W5aMppCsMsFbKUBpnsQ8IbdD3jjez8p3ZYf-X3mWdDNCzn9D3o8W2IvKF89qLtPbgU6zunJwYfEcS0uT1MqWdoeBsPLzIjIb7so_XKaTD6NKCHbDVet_Fha9WsM4SMx6KyjqSQBpsBfkFxxtxd5GsmKdWGd1EaZkazW6_nvaIqA7aKTJv5esXNOSN7DE0Ja87psrtOho0C", heightClass: "h-7" },
  { alt: "Topmate logo", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDuySxSy-Fmf52Wk1SEgpPgqi09BZ72631bjyjYd1IrzGkXr8wKHaBE-MQueVbQ0FAXzWI14xRHxVqLbFdquD90vpjiK5kA4qrSD1Ngac3WUfbVtAO5Tk5ZEFpTS6jAAaC0fuwYszoaUbtPBRVEYE3_KD4nKYnxOlvgy1Nw2wlc_OImA_BVhWFTBotUBCbxpcmsjYmi3bXV5RHitnl4z049f2fHSUZ6sCNSZzA-jce22O_ORtob6GrPN2QRep0H4rKsiWwlXNPASKy", heightClass: "h-8" },
];

// Replicates .logo-container style:
// filter: grayscale(100%); opacity: 0.5; transition: all 0.3s ease;
// &:hover: filter: grayscale(0%); opacity: 1; transform: scale(1.1);
const LogoItem = ({ src, alt, heightClass }) => (
  <motion.div
    className="h-12 flex items-center justify-center filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
    whileHover={{ scale: 1.1, filter: "grayscale(0%)", opacity: 1 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <img alt={alt} className={heightClass} src={src} />
  </motion.div>
);

const TrustIndicatorsSection = () => {
  const sectionAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const avatarColors = [
    'from-blue-400 to-purple-500',
    'from-green-400 to-blue-500',
    'from-pink-400 to-red-500',
    'from-yellow-400 to-orange-500',
  ];

  return (
    // section-fade animation in original CSS is replaced by Framer Motion
    <motion.section
      className="py-16 bg-bg-card" // bg-white in original, using themed bg-bg-card
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animate when 20% of it is in view
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-12" variants={itemAnimation}>
          <p className="text-text-muted text-sm font-semibold uppercase tracking-wider mb-4">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex items-center justify-center mb-4">
            <div className="flex -space-x-2">
              {avatarColors.map((gradient, index) => (
                <motion.div
                  key={index}
                  className={`w-8 h-8 bg-gradient-to-r ${gradient} rounded-full border-2 border-white`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping:10, delay: 0.5 + index * 0.1 }}
                />
              ))}
            </div>
            <span className="ml-3 text-text-secondary font-medium">2,500+ happy customers</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center"
          variants={itemAnimation} // This applies the itemAnimation to the grid as a whole
                                  // For individual logo animation, map logos and apply to each LogoItem
        >
          {logos.map((logo, index) => (
            <motion.div key={index} variants={itemAnimation}> {/* Apply itemAnimation to each logo for stagger */}
              <LogoItem src={logo.src} alt={logo.alt} heightClass={logo.heightClass} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TrustIndicatorsSection;