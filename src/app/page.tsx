"use client";

import { useEffect, useState } from "react";
import { Card } from "./_content/Card";
import { Csv2json } from "./_util/Csv2json";
import type { WordsObject } from "./_util/struct";
import "./page.css";
import "./globals.css";

export default function Home() {
  const csvUrl = process.env.NEXT_PUBLIC_CSV_URL;

  const [object, setObject] = useState<WordsObject[]>([]);
  const [viewObject, setViewObject] = useState<WordsObject[]>([]);

  useEffect(() => {
    Csv2json(`${csvUrl}`).then((json) => {
      const object = json.filter(
        (item) => item.star !== "" && item.star !== "0" && item.text !== "",
      );
      setObject(object);
    });
  }, [csvUrl]);

  useEffect(() => {
    if (object.length > 0) {
      reGenerate();
    }
  }, [object]);

  const reGenerate = () => {
    const newObject = [...object];
    const shuffleObject = newObject.sort(() => Math.random() - 0.5);
    shuffleObject.length = 3;
    setViewObject(shuffleObject);
  };

  return (
    <div className="cardContainer">
      {viewObject.map((item, index) => (
        <Card star={item.star} key={index} tag={item.tag} text={item.text} />
      ))}
      <button type="button" className="reGenerate" onClick={reGenerate}>
        再生成
      </button>
    </div>
  );
}
