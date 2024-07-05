import Card from "./Card";
import { cardsData } from "../../data/cardsData";

function CardsWrapper() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex max-w-[1280px] flex-wrap justify-center gap-8 p-8">
        {cardsData.map((card, i) => {
          return (
            <Card
              title={card.title}
              imgName={card.imageCover}
              key={i}
              translationKey={card.project}
              demoUrl={card.demo}
              author={card.author}
              githubProjectUrl={card.github}
              githubRepoName={card.githubRepoName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardsWrapper;
