import { useRouter } from "next/router";

function Avatar({ className }) {
  const router = useRouter();
  return (
    <img
      className={`h-8 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      src="https://avatars.githubusercontent.com/u/16660623?v=4"
      alt="profile pic"
      onClick={() => router.push("https://github.com/viknedus/g-search-v2")}
    />
  );
}

export default Avatar;
