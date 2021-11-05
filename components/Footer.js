export default function Footer() {
  return (
    <footer className="grid w-full divide-y divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3 flex justify-between">
        <p>Nigeria</p>
        <a href="https://github.com/viknedus">Github - Viknedus</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center space-x-8 md:col-span-2 lg:col-span-1 lg:col-start-2">
          <p>Advertising</p>
          <p>Business</p>
        </div>
        <p className="flex justify-center whitespace-nowrap md:justify-self-start">
          How Search works
        </p>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}
