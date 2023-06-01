import { useState, useEffect } from "react";
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("online", checkOnlineStutus);
    window.addEventListener("offline", checkOfflineStutus);
    return;
  }, []);
  const checkOnlineStutus = () => {
    setIsOnline(true);
  };
  const checkOfflineStutus = () => {
    setIsOnline(false);
  };
  return isOnline;
};
export default useOnline;
