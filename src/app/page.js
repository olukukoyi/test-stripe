"use client";

import Image from "next/image";
import { checkout } from "../../checkout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="pb-20 font-bold  text-[30px]">NFT Shop</h1>
      <div className="mb-32 grid space-x-10 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
        >
          <Image
            src="/images/blue-imposter.png"
            alt="alt"
            width={210}
            height={300}
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Blue Imposter</p>
          <button
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1Ni1stHekDTsDdF9vBlWq7rK",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            buy!
          </button>
        </a>

        <a
          className="group rounded-lg border  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
        >
          <Image
            src="/images/red-imposter.png"
            alt="alt"
            width={200}
            height={300}
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Red imposter</p>
          <button
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1Ni1rvHekDTsDdF9HmTqQlqM",
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            buy!
          </button>
        </a>
      </div>
    </main>
  );
}
