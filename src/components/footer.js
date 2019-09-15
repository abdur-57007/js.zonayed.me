import React from 'react'

import './footer.css'

import logo from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot about">
        <h3>সম্পর্কেঃ</h3>
        <p>
          প্রোজেক্টটি সম্পূর্ণ সোর্স কোডসহ{' '}
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://github.com/zonayedpca/js.zonayed.me"
          >
            গিটহাবে
          </a>{' '}
          রয়েছে। আপনার ভালো লেগে থাকলে স্টার দিয়ে আসবেন। আপনার পরামর্শ, মন্তব্য
          এবং ভুলত্রুটি{' '}
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://github.com/zonayedpca/js.zonayed.me/issues"
          >
            গিটহাবে ইস্যু
          </a>{' '}
          করে দেওয়ার জন্যে অনুরোধ থাকলো
        </p>
      </div>
      <div className="foot foot-child">
        <div className="child">
          <h3>আপনার জন্যঃ</h3>
          <ul>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://github.com/zonayedpca/js.zonayed.me"
              >
                রিঅ্যাক্ট জেএস শিখুন
              </a>
            </li>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://github.com/zonayedpca/js.zonayed.me"
              >
                আমি মিডিয়ামে
              </a>
            </li>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://github.com/zonayedpca/js.zonayed.me"
              >
                আমার ব্লগ
              </a>
            </li>
          </ul>
        </div>
        <div className="child">
          <h3>রিসোর্সঃ</h3>
          <ul>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://github.com/zonayedpca/js.zonayed.me"
              >
                এমডিএন ডকুমেন্টেশন
              </a>
            </li>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://github.com/zonayedpca/js.zonayed.me"
              >
                ইউডেমি কোর্স
              </a>
            </li>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://github.com/zonayedpca/js.zonayed.me"
              >
                বই
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot copyright">
        <div>
          <img src={logo} alt="হাতেকলমে জাভাস্ক্রিপ্ট" />
        </div>
        <p>
          <span>❤</span> এর সাথে ডেভেলপ করেছে{' '}
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://github.com/zonayedpca/js.zonayed.me"
          >
            জুনায়েদ আহমেদ
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
