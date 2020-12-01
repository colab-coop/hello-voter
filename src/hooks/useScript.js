import { useEffect } from 'react';

const useScript = ({ url, id, defer = true, beforeLoad, afterLoad, beforeUnload, afterUnload }) => {
    useEffect(() => {
      beforeLoad && beforeLoad();
      const script = document.createElement('script');
      script.id = id;
      script.src = url;
      script.async = true;
      script.defer = defer;
      document.body.appendChild(script);
      afterLoad && afterLoad();
      return () => {
        beforeUnload && beforeUnload();
        document.body.removeChild(script);
        afterUnload && afterUnload();
      }
    }, [url, id, defer, beforeLoad, afterLoad, beforeUnload, afterUnload]);
};
  
export default useScript;
  