import { useEffect, useState } from "react";
import { MARCA } from "../datos/config.js";

export default function TopBar() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setI((v) => (v + 1) % MARCA.anuncios.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="topbar" role="status">
      <span className="msg" key={i}>
        {MARCA.anuncios[i]}
      </span>
    </div>
  );
}
