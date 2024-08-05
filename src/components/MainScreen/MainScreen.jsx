/* eslint-disable react/prop-types */
const MainScreen = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen py-4 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full">
          {title && (
            <>
              <h1 className="text-6xl md:text-4xl px-4 py-2 font-light text-center font-sans">
                {title}
              </h1>
              <hr className="my-4 border-gray-300" />
            </>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainScreen;