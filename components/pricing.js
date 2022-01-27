import {
  CheckIcon,
  BeakerIcon,
  FastForwardIcon,
  CursorClickIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';

import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

const steps = [
  {
    name: 'Competitive exchange rates',
    description:
      'Erzähle uns was Dir schmeckt und hinterlasse uns Deine E-Mail.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Du bekommst Deinen auf Dich abgestimmten Essensplan innerhalb von 24 Stunden.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Der Plan gefällt Dir? Dann kannst Du im Anschluss direkt den Einkauf Beauftragen.',
    icon: LightningBoltIcon,
  },
];

const features = [
  {
    name: 'Nachhaltig',
    icon: CursorClickIcon,
    description:
      'Wir setzen auf regionale und saisonale Planung. Genieße mit geringem CO2-Fußabdruck und gutem Gewissen.',
  },
  {
    name: 'Full-Service',
    icon: FastForwardIcon,
    description:
      'Wenn Dir Dein Wochenplan gefällt, kümmern wir uns um die Bestellung und alle Einkäufe kommen zu Dir nach Hause.',
  },
  {
    name: 'Tolle Rezepte',
    icon: BeakerIcon,
    description:
      'Bring Deine eigenen Rezepte mit und lass sie von uns nachhaltig machen, oder lass dich von uns inspirieren. Dazu arbeiten wir mit bekannten Food-Blogger:innen zusammen.',
  },
];

export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-yellow-600" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
        <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h2 className="text-base font-semibold tracking-wide text-yellow-600 uppercase">
              Nachhaltig, individuell, lecker!
            </h2>
            <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Du sagst uns, was Du magst. <br />
              Wir übernehmen den Rest.
            </p>
            <dl className="mt-12 space-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute h-12 w-12 flex items-center justify-center bg-yellow-500 rounded-md">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="bg-yellow-600 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
          <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
            <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
              <span className="text-yellow-100">Fantastisches Essen</span>{' '}
              <br /> in nur 3 Schritten
            </p>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              {steps.map((step, index) => (
                <div key={step.name}>
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white font-bold">
                      {index + 1}
                    </div>
                  </dt>
                  <dd className="mt-2 text-base text-yellow-100">
                    {step.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
