function Avatar({ className }) {
  return (
    <img
      className={`h-8 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      src="https://avatars.githubusercontent.com/u/16660623?v=4"
      alt="profile pic"
      onClick={() => router.push("https://github.com/viknedus")}
    />
  );
}

export default Avatar;
