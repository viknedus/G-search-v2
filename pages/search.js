import {
  DotsVerticalIcon,
  MapIcon,
  MicrophoneIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import HeaderOption from "../components/HeaderOption";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

export default function Search({ results }) {
  //   console.log(results);
  const router = useRouter();
  const searchInputRef = useRef();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            height={40}
            width={120}
            onClick={() => router.push("/")}
            className="cursor-pointer"
          />
          <form className="flex border items-center flex-grow px-6 py-3 ml-10 mr-5 border-gray-50 rounded-full shadow-md max-w-3xl">
            <input
              ref={searchInputRef}
              type="text"
              className="flex-grow w-full focus:outline-none"
            />
            <XIcon
              className="h-6 text-gray-400 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
              onClick={() => (searchInputRef.current.value = "")}
            />
            <MicrophoneIcon className="h-6 text-blue-400 cursor-pointer hidden sm:inline-flex border-l-2 pl-3 border-gray-300" />
            <SearchIcon className="h-6 text-blue-400 cursor-pointer hidden sm:inline-flex pl-3" />
            <button hidden type="submit" onClick={search}>
              Search
            </button>
          </form>
          <Avatar className="ml-auto" />
        </div>

        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-32 lg:pl-52 border-b">
          <div className="flex space-x-6">
            <HeaderOption Icon={SearchIcon} title="All" selected />
            <HeaderOption Icon={PhotographIcon} title="Images" />
            <HeaderOption Icon={PlayIcon} title="Videos" />
            <HeaderOption Icon={NewspaperIcon} title="News" />
            <HeaderOption Icon={MapIcon} title="Maps" />
            <HeaderOption Icon={DotsVerticalIcon} title="More" />
          </div>
          <div>
            <p className="link">Tools</p>
          </div>
        </div>
      </header>
      <SearchResults results={results} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || 0;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());
  // after the sever has rendered, pass results to the client
  return {
    props: {
      results: data,
    },
  };
}
