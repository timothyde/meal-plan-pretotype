import { useState } from 'react';
import { useRouter } from 'next/router';

import logo from '../public/logo.png';
import hero from '../public/food.jpg';
import { XCircleIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const encode = (data) => {
  const encoded = new URLSearchParams(data).toString();
  return encoded;
};

export default function Hero() {
  const [text, setText] = useState('');
  const [mail, setMail] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  function handleInput({ target: { value } }) {
    setText(value);
  }

  function handleMailChange({ target: { value } }) {
    setMail(value);
  }

  function isValidMail(email) {
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email.match(emailRegex)) {
      return false;
    }

    return true;
  }

  function handleSubmit(e) {
    if (!isValidMail(mail)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein');
      e.preventDefault();
      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'try-out', email: mail, address: query }),
    })
      .then(() => router.push('/success'))
      .catch((error) => setError(error));

    e.preventDefault();
  }

  const enabled = !!text && !!mail;

  return (
    <div className="relative overflow-hidden">
      <section id="free" className="lg:relative bg-yellow-900">
        <div className="mx-auto max-w-7xl w-full text-center py-24 2xl:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <div className="w-full flex justify-center pb-4 lg:justify-start">
              <img src={logo.src} alt="" className="h-8" />
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block">Dein individueller Essensplan</span>
              <span className="block text-yellow-400">
                nachhaltig, individuell, lecker
              </span>
            </h1>
            <p className="mt-3 text-base text-yellow-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Nachhaltig, lecker und abwechslungsreich Kochen ist anstrengend.
              Deswegen erstellen wir Deinen individuellen Essensplan - mit
              leckeren, nachhaltigen Rezepten und anhand Deiner Vorlieben.
              Schreib&apos; einfach, was Du magst, trage Deine E-Mail-Adresse
              ein und Du bekommst Deinen Wochenplan per Mail.
            </p>
            <div className="mt-10 sm:mt-12">
              <form
                name="try-out"
                method="POST"
                action="/success"
                data-netlify="true"
                className="sm:max-w-xl sm:mx-auto lg:mx-0"
                onSubmit={handleSubmit}
              >
                <div className="sm:flex">
                  <div className="relative w-full">
                    <label htmlFor="address" className="sr-only">
                      Deine Vorlieben
                    </label>
                    <input
                      id="preferences"
                      type="text"
                      placeholder="z.B. Spagetthi Bolognese, Gemüse, Karotten"
                      value={text}
                      onChange={handleInput}
                      className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 focus:ring-offset-gray-900"
                    />
                  </div>
                </div>
                <div className="sm:flex mt-3">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">
                      E-Mail-Adresse
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={mail}
                      onChange={handleMailChange}
                      placeholder="E-Mail-Adresse eingeben"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className={classNames(
                        enabled
                          ? 'text-white bg-yellow-600 hover:bg-yellow-700 cursor-pointer'
                          : 'text-gray-400 bg-gray-200 hover:bg-gray-200 cursor-not-allowed',
                        'block w-full py-3 px-4 rounded-md shadow text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 focus:ring-offset-gray-900'
                      )}
                    >
                      Kostenlos testen
                    </button>
                  </div>
                </div>
                {!!error && (
                  <div className="rounded-md bg-red-50 p-4 mt-2">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <XCircleIcon
                          className="h-5 w-5 text-red-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">
                          {error}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <p className="mt-3 text-sm text-yellow-50 sm:mt-4">
                  Der erste Wochenplan ist gratis und es sind keine
                  Zahlungsdaten notwendig. Durch die Angabe Deiner
                  E-Mail-Adresse stimmst Du der{' '}
                  <a href="#" className="font-medium text-white">
                    Datenschutzerklärung
                  </a>{' '}
                  zu.
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={hero.src}
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
