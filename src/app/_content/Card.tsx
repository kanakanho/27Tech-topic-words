import type { TagType } from "../_util/struct";
import "./Card.css";

export const Tags: Record<string, TagType> = {
  日常: {
    lightColor: "#F76B15",
    darkColor: "#FFC182",
  },
  趣味: {
    lightColor: "#12A594",
    darkColor: "#A1DED2",
  },
  技術: {
    lightColor: "#0090FF",
    darkColor: "#ACD8FC",
  },
  旅行: {
    lightColor: "#8E4EC6",
    darkColor: "#E0C4F4",
  },
};

type Props = {
  tag: string;
  text: string;
};

export const Card = ({ tag, text }: Props) => {
  const tagColor = Tags[tag] ? Tags[tag].lightColor : "transparent";
  const textColor = Tags[tag] ? Tags[tag].darkColor : "transparent";

  return (
    <div>
      <div className="tag" style={{ backgroundColor: tagColor }} color={tagColor}>
        {tag}
      </div>
      <div className="text" style={{ backgroundColor: textColor }} color={textColor}>
        {text}
      </div>
    </div>
  );
};
