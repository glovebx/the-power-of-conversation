
import { Mosaic } from "react-loading-indicators";

const LoadingFallback = () => {
  return (
    <footer className="w-full max-w-7xl px-4 md:px-6 mx-auto">
      <div className="flex justify-center items-center py-3 mb-4">
        <Mosaic color="#a855f74d" />
      </div>    
    </footer>
  );
};

export default LoadingFallback;