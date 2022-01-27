import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h1 className="my-2 text-3xl font-extrabold text-yellow-600 sm:text-4xl lg:text-5xl">
        Impressum
      </h1>
      <h2 className="text-lg leading-6 font-semibold text-gray-800 uppercase tracking-wider mt-4">
        Angaben gemäß § 5 TMG
      </h2>
      <p>
        Timothy Krechel <br />
        Oberlarer Platz 1 <br />
        53842 Troisdorf
      </p>
      <h2 className="text-lg leading-6 font-semibold text-gray-800 uppercase tracking-wider mt-4">
        Kontakt
      </h2>
      <p>Telefon: +49 177 858 32 44 E-Mail: hello@timothy.de</p>
      <h2>Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RSTV</h2>
      <p>Timothy Krechel Oberlarer Platz 1 53842 Troisdorf</p>
    </div>
  );
}
