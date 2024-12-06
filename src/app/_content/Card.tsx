import type { TagType } from "../_util/struct";
import "./Card.css";

export const Tags: Record<string, TagType> = {
  日常: {
    lightColor: "#F76B15",
    darkColor: "#FFDCD3",
  },
  趣味: {
    lightColor: "#12A594",
    darkColor: "#B8EAE0",
  },
  技術: {
    lightColor: "#0090FF",
    darkColor: "#C2E5FF",
  },
  旅行: {
    lightColor: "#8E4EC6",
    darkColor: "#F2D1F3",
  },
  就活: {
    lightColor: "#FF5493",
    darkColor: "#FFD3E1",
  },
  その他: {
    lightColor: "#8D8D8D",
    darkColor: "#E0E0E0",
  },
};

type Props = {
  star: string;
  tag: string;
  text: string;
};

export const Card = ({ star, tag, text }: Props) => {
  const tagColor = Tags[tag] ? Tags[tag].lightColor : "transparent";
  const textColor = Tags[tag] ? Tags[tag].darkColor : "transparent";

  return (
    <div className="card">
      <div className="tag" style={{ backgroundColor: tagColor }} color={tagColor}>
        {tag}
        <div>
          {star === "1"
            ? "★"
            : star === "2"
            ? "★★"
            : star === "3"
            ? "★★★"
            : star === "4"
            ? "★★★★"
            : star === "5"
            ? "★★★★★"
            : ""}
        </div>
      </div>
      <div className="text" style={{ backgroundColor: textColor }} color={textColor}>
        {text}
      </div>
    </div>
  );
};
