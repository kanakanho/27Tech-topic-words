"use client";

import { useEffect, useState } from "react";
import { Card } from "../_content/Card";
import { Csv2json } from "../_util/Csv2json";
import type { WordsObject } from "../_util/struct";
import "../globals.css";

export default function Home() {
  const csvUrl = process.env.NEXT_PUBLIC_CSV_URL;
  if (!csvUrl) {
    console.error("BASE_URL is not defined");
  }

  const [object, setObject] = useState<WordsObject[]>([]);

  useEffect(() => {
    Csv2json(`${csvUrl}`).then((json) => {
      const object = json.filter((item) => item.tag === "技術" && (item.star !== "0" || item.text !== ""));
      setObject(object);
    });
  }, [csvUrl]);

  return (
    <>
      <div className="cardContainer">
        {object.map((item, index) => (
          <Card key={index} star={item.star} tag={item.tag} text={item.text} />
        ))}
      </div>
    </>
  );
}
