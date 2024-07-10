"use client";

import { Card } from "./_content/Card";
import { useEffect, useState } from "react";
import { Csv2json } from "./_util/Csv2json";
import type { WordsObject } from "./_util/struct";
import "./page.css";

export default function Home() {
  const csvUrl = process.env.NEXT_PUBLIC_CSV_URL;
  if (!csvUrl) {
    console.error("BASE_URL is not defined");
  }

  const [object, setObject] = useState<WordsObject[]>([]);

  useEffect(() => {
    Csv2json(`${csvUrl}`).then((json) => {
      setObject(json);
    });
  }, [csvUrl]);

  return (
    <div className="cardContainer">
      {object.map((item, index) => (
        <Card key={index} tag={item.tag} text={item.text} />
      ))}
    </div>
  );
}
