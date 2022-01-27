import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/solid';

export default function Example() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">
              Ihre Texte sind auf dem Weg!
            </h3>
            <div className="mt-2 text-sm text-green-700">
              <p>
                Ihre individuellen Lagetexte landen in Kürze in Ihrem Postfach.
              </p>
            </div>
            <div className="mt-4">
              <div className="-mx-2 -my-1.5 flex">
                <Link href="/">
                  <button className="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                    Zurück
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
