import React, { useEffect, useState } from "react";

export const Network: React.FC = () => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleNetworkChange = () => {
      setStatus(navigator.onLine);
    };

    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);

  return (
    <div>
      <h2 className="mb-3">React Detect Network Connection Status Example</h2>
      {status ? (
        <>
          <div className="alert alert-success mb-3">
            Network is fullly connected
          </div>
          <img
            src="/img/connected.jpg"
            width={420}
            alt="Logo"
          />
        </>
      ) : (
        <img
          src="/img/connection-lost.jpg"
          width={420}
          alt="Logo"
        />
      )}
    </div>
  );
};
