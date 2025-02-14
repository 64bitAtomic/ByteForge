const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-black text-white p-4">
      <h1 className="text-6xl font-bold text-red-500 animate-bounce">404</h1>
      <h2 className="text-2xl mt-4">This page is not handled by the website</h2>
      <p className="text-gray-400 mt-2 text-center">
        Sorry, the page {"you're"} looking for {"doesn't"} exist or has been
        moved.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all">
        <a href="/" className="text-white">
          Go Home
        </a>
      </button>
    </div>
  );
};

export default NoPage;
