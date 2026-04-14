import React from 'react';
import footerLogo from '@/assets/logo-xl.png'
import instagramIcon from '@/assets/instagram.png'
import facebookIcon from '@/assets/facebook.png'
import twitterIcon from '@/assets/twitter.png'
import Image from 'next/image';

const Footer = () => {
    return (
      <footer
        className="pt-10 md:pt-20 pb-7 text-center"
        style={{ backgroundColor: "#244D3F" }}
      >
        <div>
          <div>
            <div className="w-72 max-w-2xl mx-auto">
              <Image
                src={footerLogo}
                alt="Footer Logo"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>

            <p
              className="text-base py-4 max-w-10/12 mx-auto"
              style={{ color: "#FAFAFA80" }}
            >
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xl font-medium">Social Links</h4>

            <div className="flex justify-center gap-3 mt-4">
              <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <Image
                  src={instagramIcon}
                  alt="Instagram Icon"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <Image
                  src={facebookIcon}
                  alt="Facebook Icon"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <Image
                  src={twitterIcon}
                  alt="Twitter Icon"
                  width={40}
                  height={40}
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid #225946" }}
          className="mt-10 pt-7 flex gap-5 flex-col md:flex-row md:justify-between px-7 md:px-10 lg:px-20"
        >
          <div>
            <p className="text-base" style={{ color: "#FAFAFA80" }}>
              © 2026 KeenKeeper. All rights reserved.
            </p>
          </div>

          <div className="flex gap-8">
            <p className="text-base" style={{ color: "#FAFAFA80" }}>
              Privacy Policy
            </p>
            <p className="text-base" style={{ color: "#FAFAFA80" }}>
              Terms of Service
            </p>
            <p className="text-base" style={{ color: "#FAFAFA80" }}>
              Cookies
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;